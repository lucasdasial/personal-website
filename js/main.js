(function () {
  "use strict";

  var I18N = {};

  function loadTranslations() {
    return Promise.all([
      fetch("I18N/en.json").then(function (response) {
        return response.json();
      }),
      fetch("I18N/pt.json").then(function (response) {
        return response.json();
      })
    ]).then(function (dicts) {
      I18N.en = dicts[0];
      I18N.pt = dicts[1];
    });
  }

  function applyLanguage(lang) {
    var dict = I18N[lang] || I18N.en;
    if (!dict) return;

    document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = dict[key];
      if (value == null) return;

      var attr = el.getAttribute("data-i18n-attr");
      if (attr) {
        el.setAttribute(attr, value);
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", String(isActive));
      btn.classList.toggle("is-active", isActive);
    });

    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      /* localStorage unavailable (e.g. private browsing), ignore */
    }
  }

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLanguage(btn.getAttribute("data-lang"));
    });
  });

  loadTranslations()
    .then(function () {
      var savedLang;
      try {
        savedLang = localStorage.getItem("lang");
      } catch (e) {
        savedLang = null;
      }

      var browserLang = (navigator.language || "en").toLowerCase().indexOf("pt") === 0 ? "pt" : "en";
      applyLanguage(savedLang === "pt" || savedLang === "en" ? savedLang : browserLang);
    })
    .catch(function (error) {
      console.error("Failed to load translations:", error);
    });

  // Mobile navigation toggle
  var navToggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Interactive experience timeline (accordion)
  document.querySelectorAll(".timeline-interactive").forEach(function (timeline) {
    var items = timeline.querySelectorAll(".timeline-item");

    items.forEach(function (item) {
      var toggle = item.querySelector(".timeline-toggle");
      var content = item.querySelector(".timeline-content");
      if (!toggle || !content) return;

      content.addEventListener("click", function (event) {
        if (event.target.closest("a")) return;
        if (event.target.closest(".timeline-panel")) return;

        var isOpen = item.classList.contains("is-open");

        items.forEach(function (other) {
          other.classList.remove("is-open");
          var otherToggle = other.querySelector(".timeline-toggle");
          if (otherToggle) otherToggle.setAttribute("aria-expanded", "false");
        });

        if (!isOpen) {
          item.classList.add("is-open");
          toggle.setAttribute("aria-expanded", "true");
        }
      });
    });
  });

  // Reveal-on-scroll animation
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();

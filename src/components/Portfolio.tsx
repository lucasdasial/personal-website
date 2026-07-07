"use client";

import { CONTENT, type Lang } from "@/data/content";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const NAV_IDS = ["work", "skills", "about"] as const;
const GMAIL_COMPOSE_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=as.lucasalves@gmail.com";

export default function Portfolio() {
  const [lang, setLangState] = useState<Lang>("en");
  const [active, setActive] = useState(0);
  const [activeNav, setActiveNav] = useState<string | null>(null);

  const rootRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroPhotoBoxRef = useRef<HTMLDivElement>(null);

  const c = CONTENT[lang];
  const t = c.t;
  const job = c.jobs[active];
  const year = new Date().getFullYear();

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lucas-lang");
      if (saved === "pt" || saved === "en") setLangState(saved);
    } catch { }
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    root.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveNav(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV_IDS.forEach((id) => {
      const section = root.querySelector(`#${id}`);
      if (section) io.observe(section);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    function syncHeroPhoto() {
      const title = heroTitleRef.current;
      const box = heroPhotoBoxRef.current;
      if (!title || !box) return;
      if (window.innerWidth <= 860) {
        box.style.height = "";
        box.style.marginTop = "";
        box.style.aspectRatio = "3/3.6";
        return;
      }
      const grid = box.closest(".hero-grid");
      if (!grid) return;
      box.style.aspectRatio = "auto";
      box.style.marginTop = "0px";
      box.style.height = title.offsetHeight + "px";
      const off =
        title.getBoundingClientRect().top - grid.getBoundingClientRect().top;
      box.style.marginTop = off + "px";
    }
    syncHeroPhoto();
    const raf = requestAnimationFrame(syncHeroPhoto);
    document.fonts?.ready.then(syncHeroPhoto);
    window.addEventListener("resize", syncHeroPhoto);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", syncHeroPhoto);
    };
  }, [lang]);

  function setLang(l: Lang) {
    setLangState(l);
    try {
      localStorage.setItem("lucas-lang", l);
    } catch { }
  }

  return (
    <div ref={rootRef}>
      <nav>
        <a href="#top" className="brand">
          <span className="brand-dot" />
          Lucas Alves
        </a>
        <div className="nav-right">
          <div className="nav-links">
            {NAV_IDS.map((id) => (
              <a
                key={id}
                className={"navlink" + (activeNav === id ? " active" : "")}
                href={`#${id}`}
              >
                {id === "work" ? t.navWork : id === "skills" ? t.navSkills : t.navAbout}
              </a>
            ))}
          </div>
          <div className="lang-toggle">
            <button
              type="button"
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={lang === "pt" ? "active" : ""}
              onClick={() => setLang("pt")}
            >
              PT
            </button>
          </div>
          <a className="btn-dark" href={GMAIL_COMPOSE_URL} target="_blank" rel="noopener">
            {t.getInTouch}
          </a>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section id="top" className="hero">
          <div className="hero-bg" />
          <div className="hero-inner">
            <div className="hero-grid">
              <div>
                <div className="badge">
                  <span className="dot" />
                  <span>{t.heroBadge}</span>
                </div>
                <h1 className="hero-title" ref={heroTitleRef}>
                  {t.title1}
                  <br />
                  {t.title2}
                  <br />
                  {t.title3}
                  <br />
                  {t.title4}
                </h1>
                <p className="intro">
                  {t.introA}
                  <strong>Lucas Alves</strong>
                  {t.introB}
                </p>
                <div className="hero-ctas">
                  <a className="btn-dark" href="#work">
                    <span>{t.viewWork}</span>
                    <span className="accent-arrow">→</span>
                  </a>
                  <a
                    className="btn-ghost"
                    href="https://www.linkedin.com/in/lucasdasial/"
                    target="_blank"
                    rel="noopener"
                  >
                    {t.linkedin}
                  </a>
                  <a className="btn-ghost" href="/assets/Lucas-Alves-Resume.pdf" download>
                    <span>{t.resume}</span>
                    <span className="accent-arrow">↓</span>
                  </a>
                </div>
              </div>
              <div className="hero-photo">
                <div className="hero-photo-box" ref={heroPhotoBoxRef}>
                  <Image
                    src="/assets/lucas.jpeg"
                    alt="Lucas Alves"
                    fill
                    sizes="290px"
                    priority
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS
        <section className="reveal stats">
          <div className="stat-row">
            {c.stats.map((s) => (
              <div className="stat-item" key={s.label}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label mono">{s.label}</div>
              </div>
            ))}
          </div>
        </section> */}

        {/* WORK HISTORY */}
        <section id="work" className="reveal work">
          <div className="wrap">
            <div className="eyebrow">{t.workEyebrow}</div>
            <h2>{t.workHeading}</h2>
            <p className="sub">{t.workSub}</p>

            <div className="exp-grid">
              <div className="exp-list">
                {c.jobs.map((j, i) => (
                  <button
                    key={j.role + j.company}
                    type="button"
                    className={"rolebtn" + (i === active ? " active" : "")}
                    onClick={() => setActive(i)}
                  >
                    <span className="rolebtn-inner">
                      <span className="rolebtn-dot" />
                      <span className="rolebtn-text">
                        <span className="rolebtn-dates mono">{j.dates}</span>
                        <span className="rolebtn-role">{j.role}</span>
                        <span className="rolebtn-company">{j.company}</span>
                      </span>
                    </span>
                  </button>
                ))}
              </div>

              <div className="exp-detail" key={`${lang}-${active}`}>
                <div className="detail-head">
                  <h3>{job.role}</h3>
                  <span className="detail-dates mono">{job.dates}</span>
                </div>
                <div className="detail-meta">
                  <span className="detail-company">{job.company}</span>
                  <span className="detail-dot" />
                  <span className="detail-location">{job.location}</span>
                </div>
                <p className="detail-summary">{job.summary}</p>

                <div className="metrics-grid">
                  {job.metrics.map((m) => (
                    <div className="metric" key={m.label}>
                      <div className="metric-value">{m.value}</div>
                      <div className="metric-label mono">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="what-i-did mono">{t.whatIDid}</div>
                <ul className="points-list">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>

                <div className="tech-row">
                  {job.tech.map((tc) => (
                    <span className="chip mono" key={tc}>
                      {tc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="reveal skills">
          <div className="wrap">
            <div className="eyebrow">{t.skillsEyebrow}</div>
            <h2>{t.skillsHeading}</h2>
            <p className="sub">{t.skillsSub}</p>
            <div className="skills-grid">
              {c.skills.map((group) => (
                <div className="skills-group" key={group.label}>
                  <div className="skills-group-label mono">{group.label}</div>
                  <div className="chip-row">
                    {group.items.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="reveal about">
          <div className="wrap">

            <div className="about-photo">
              <Image
                src="/assets/2.png"
                alt="Working with the team at Idopter Labs"
                width={900}
                height={1600}
              />
            </div>
            <div className="eyebrow">{t.aboutEyebrow}</div>
            <h2>{t.aboutHeading}</h2>
            <div className="about-grid">
              <div>
                {t.aboutC.map((paragraph) => (
                  <p className="about-bio" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
              <div>
                <div className="label">{t.optimiseFor}</div>
                <div className="chip-row">
                  {c.values.map((v) => (
                    <span className="chip" key={v}>
                      {v}
                    </span>
                  ))}
                </div>
                <div className="label label-sp">{t.educationLabel}</div>
                <div className="degree">{t.degree}</div>
                <div className="school">{t.school}</div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="reveal contact">
          <div className="wrap">
            <div className="eyebrow">{t.contactEyebrow}</div>
            <h2>
              {t.contact1}
              <br />
              {t.contact2}
            </h2>
            <p className="contact-body">{t.contactBody}</p>
            <div className="contact-ctas">
              <a className="btn-white" href={GMAIL_COMPOSE_URL} target="_blank" rel="noopener">
                as.lucasalves@gmail.com<span className="accent-arrow">→</span>
              </a>
              <a className="btn-outline" href="/assets/Lucas-Alves-Resume.pdf" download>
                <span>{t.resume}</span>
                <span className="accent-arrow">↓</span>
              </a>
            </div>
            <div className="footer-row">
              <div className="footer-copy mono">
                © {year} Lucas da Silva Alves · Dasial
              </div>
              <div className="footer-links">
                <a
                  className="linkline"
                  href="https://www.linkedin.com/in/lucasdasial/"
                  target="_blank"
                  rel="noopener"
                >
                  LinkedIn
                </a>
                <a
                  className="linkline"
                  href="https://lucasdasial.com.br/"
                  target="_blank"
                  rel="noopener"
                >
                  lucasdasial.com.br
                </a>
                <a
                  className="linkline"
                  href={GMAIL_COMPOSE_URL}
                  target="_blank"
                  rel="noopener"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

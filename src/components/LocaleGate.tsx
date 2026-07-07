"use client";

import { useEffect } from "react";

const STORAGE_KEY = "lucas-lang-choice";

export default function LocaleGate() {
  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
      const prefersPt = navigator.language?.toLowerCase().startsWith("pt");
      if (prefersPt) window.location.replace("/pt");
    } catch {
      // ignore: localStorage/navigator unavailable, fall back to English default
    }
  }, []);

  return null;
}

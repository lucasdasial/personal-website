# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

This repository currently contains only content/spec files — there is no application code yet (no `package.json`, no build tooling, no HTML/CSS/JS). Before writing any code, read `docs/guide.md` in full; it is the project brief and takes precedence over assumptions.

## What this project is

A premium personal portfolio website for Lucas Alves (Backend Software Engineer), to be built from the content in `docs/`.

## Content source of truth

- `docs/resume.md` — primary source for all personal/professional facts (experience, skills, education, contact info). If `docs/resume.md` and `docs/linkedin.md` conflict, `docs/resume.md` wins.
- `docs/linkedin.md` — supplementary detail, use only to complement the resume.
- `docs/personality.md` — currently empty.
- A `docs/projects/` directory (one markdown file per project: description, technologies, challenges, architecture, business impact, images) is planned but explicitly out of scope for now per `docs/guide.md` ("skip this session") — do not build the Projects section from it until instructed.

**Never fabricate** dates, companies, technologies, responsibilities, or metrics. If information is missing, leave the section empty or add a TODO instead of inventing content.

## Tech stack constraint

Vanilla JavaScript, CSS, and HTML only. **Do not introduce a framework** (no React/Vue/Next/etc.) or unnecessary dependencies — this is an explicit rule from `docs/guide.md`, not an oversight.

## Design language

- Minimalism, large typography, generous whitespace.
- Rounded corners (8px), soft shadows, no unnecessary borders.
- Light mode first; primary color plus a near-black.
- Visual/UX inspiration: Linear, Vercel, Stripe, Apple.
- Animations should be subtle.

## Content and copy rules

- All copy in English, concise, no buzzwords, no lorem ipsum.
- No fake/placeholder projects.
- Prefer measurable achievements over vague claims; never exaggerate.
- Optimize for a recruiter audience; prioritize readability.
- Every component should be reusable; keep markup/CSS/JS modular even without a framework.

## Site goals

The site must communicate: backend expertise, software engineering maturity, clean architecture knowledge, cloud experience, mobile background, and performance optimization experience.

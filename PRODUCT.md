# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary — technical recruiters and hiring managers.** They arrive from a LinkedIn
profile, a job application, or a referral, usually on mobile, usually with a stack of
other candidates open. Their job is to decide in under a minute whether Carlos is worth
a screening call. They are scanning for: what Carlos has actually built, what technologies
Carlos can be trusted with, whether Carlos is available, and how to make contact.

**Secondary — freelance and small-business clients.** They arrive looking for someone to
build something for them. Their job is to judge whether Carlos can ship a real, working
product and whether getting in touch is low-friction. They care less about academic depth
and more about evidence of finished work.

Both audiences are served on the same surface. When the two conflict, the hiring read wins.

## Product Purpose

A personal portfolio site for Carlos Parra Camacho that converts a cold visitor into a
contact — a screening call, an email, or a project inquiry. Success is a message in the
inbox. Secondary success is a recruiter who leaves able to name at least two projects.

It replaces an existing site at `https://carlospc13.netlify.app`. That site is treated as
a record of true content, not as a design authority.

## Positioning

Carlos is a final-year Computer Science student in Spain who is **already working as a
Software Engineer intern**, with a project record spanning an unusually wide band for
this career stage: a full-stack production web application, low-level parallel computing
on both CPU and GPU, and two applied deep-learning models in medical imaging.

The honest differentiator is **range with real artifacts behind it** — a deployed
marketplace, hand-written CUDA, a trained CNN and a U-Net. Most candidates at this stage
have one of those three. Carlos also teaches programming and robotics to children, which
is genuine evidence of being able to explain technical work to a non-technical audience.

Currently open to work.

## Operating Context

- Visitors most often arrive from LinkedIn or an application link; mobile-first traffic
  should be assumed.
- Visit duration is short. The decision is usually made above the fold and in the
  projects section.
- Both Spanish and international audiences are in scope, so the site is bilingual.
- Two of the four projects have public repositories; the other two do not, and their
  absence must not be papered over with fake links.

## Capabilities and Constraints

- **Stack: Astro.** Static output, minimal client-side JavaScript, deployable to Netlify
  or equivalent. Confirmed by the user.
- **Bilingual: English and Spanish**, with a visible language toggle. Confirmed by the
  user. Both languages are first-class; neither is a machine-translated afterthought.
- **No backend.** Contact runs through `mailto:` and social links unless a form service
  is added later.
- The site must remain editable by Carlos without a CMS — content lives in the repo.

### Undecided / not yet supplied

- The name of the company of the current Software Engineer internship. **Not known —
  must not be invented.** The build carries it as an empty `internshipCompany` field in
  `src/data/content.ts`; while empty the season row simply shows the role with no
  employer, and filling the field makes it appear. Nothing is displayed as a placeholder.
- Screenshots or live demo URLs for the projects. None have been supplied.
- A downloadable CV/résumé file. Not supplied.
- Repositories for the CUDA/OpenMP project and the Skin Lesion Segmentation project.
  Not supplied; may not exist publicly.
- Graduation date.
- Carlos's pronouns. Not stated; all copy stays in first person ("I") or uses the name,
  so the site never needs to guess.

## Brand Commitments

- **Name:** Carlos Parra Camacho. Informal address "Carlos" is established and acceptable.
- **Voice:** first person, direct, plainly confident, not corporate. The prior site's
  "WHAT'S UP! I'M CARLOS" register shows comfort with being personal and warm rather than
  formal. Preserve the warmth; the new work does not have to preserve the exclamation.
- **Confirmed personal facts** made public on the prior site, which give the site its
  human texture: plays sport of any kind, cares about good coffee, keeps music on
  constantly.
- No logo, wordmark, brand palette, or type license exists. None are binding.

## Evidence on Hand

All of the following is **real and verified** from the existing site and may be stated as
fact. Nothing outside this list may be presented as fact.

### Projects

1. **DeSales Exchange Hub** — Web application. A web-based marketplace to buy, sell, and
   rent items, built for exchange students within a university community. Built with
   Flask as the Capstone Project at DeSales University.
   Stack: Python, PostgreSQL, Sass, JavaScript.
   Repo: `https://github.com/Carlos-PC05/CapstoneProject`

2. **CUDA and OpenMP Parallel Programming** — Parallel algorithms. A parallel algorithm
   for calculating gradients in multivariable equation systems, implemented for both CPU
   (OpenMP) and GPU (CUDA).
   Stack: C, CUDA, OpenMP, Linear Algebra.
   Repo: none supplied.

3. **Pneumonia Detection with Keras** — Deep learning. A convolutional neural network for
   detecting pneumonia in chest X-rays.
   Stack: Python, Keras, Deep Learning, CNN.
   Repo: `https://github.com/Carlos-PC05/Pneumonia`

4. **Skin Lesion Segmentation with PyTorch** — Deep learning. A model for segmenting skin
   lesions.
   Stack: Python, PyTorch, Deep Learning, U-Net.
   Repo: none supplied.

### Experience

- **Software Engineer Intern** — current, alongside final year of study. Employer not yet
  supplied.
- **Programming Teacher** — Summer 2026. Teaching programming to children aged 8–12.
- **Sport Model** — August 2025. Worked with the Spanish sport brand Musai Brand,
  promoting the brand and its services.
- **Robotics and Programming Teacher** — June 2025. Taught the basics of programming and
  robotics to children aged 8–12, building projects with LEGO Spike and Prime.

### Contact and links

- Email: `carlosparracamacho@gmail.com`
- GitHub: `https://github.com/Carlos-PC05`
- LinkedIn: `https://www.linkedin.com/in/carlos-parra-camacho`
- Instagram: `https://www.instagram.com/carrlit0s_/`

### Explicit absences — must never be fabricated

No testimonials. No client logos. No named employers beyond DeSales University and Musai
Brand. No metrics, benchmarks, accuracy figures, or user counts for any project. No press.
No awards. No product screenshots.

## Product Principles

1. **Every claim traces to the evidence list.** This is a real person's career record.
   Inventing a metric, a client, or an employer is the one unrecoverable failure.
2. **The hiring read comes first.** A recruiter with sixty seconds must leave knowing what
   was built, what stack it used, and how to get in touch. Expression never costs clarity.
3. **Range is the argument.** Full-stack, low-level parallel computing, and applied deep
   learning in one record. The structure should let a visitor feel that breadth rather
   than read a claim about it.
4. **Availability is a headline, not a footnote.** Carlos is open to work; the site should
   not make a recruiter hunt for that.
5. **Both languages are the real site.** Spanish is not a translation layer bolted onto an
   English original.

## Accessibility & Inclusion

No product-specific standard was established by the user. Baseline expectations apply:
keyboard-operable navigation, visible focus, sufficient contrast, correct language
attributes per locale, and respect for `prefers-reduced-motion`.

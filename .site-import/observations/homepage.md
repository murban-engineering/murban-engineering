# Homepage import observation ledger

Source: `https://murban-eng.com/`  
Preview: `/`  
Compared at 1280×1800 and 390×844. Source and preview were inspected using fresh browser sessions. A final fresh phone check confirmed the hero, no horizontal page overflow (390px document width at a 390px viewport), and the expandable navigation; no form was submitted and no credentials or account actions were entered.

## Section landmarks

| Section | Source observation | Preview result | Status |
| --- | --- | --- | --- |
| Homepage/hero | Full-width industrial inspection image, logo/title, service and project links; pinned hero animation | Imported assets, logo, headline, buttons, and crop visible on desktop and phone; document width matches 390px phone viewport | Pass for visible layout; captured animation is static |
| Company profile / About | Content reveals during long pinned scroll section | Preview includes About, Who We Are, Where We Work and associated copy | Partial: source pinned/scroll motion was not fully reconstructed |
| Services | Four groups and their services | Four groups and 35 service links are present; service destinations retain their original local paths | Pass for navigation menu; service detail pages were not requested/imported |
| Industries | Seven industry links and section content | Industry section and links to homepage anchors are present | Partial: source pinned scroll interaction was not fully reconstructed |
| Projects | Horizontally moving case-study panel with seven project images | Project section and images render; project strip remains horizontally scrollable within its clipped page width | Partial: source scroll-driven movement is represented as static content |
| Project video | Source provides a project-video section | Imported still image has `data-site-import-static-fallback="video"` | Blocked: no advancing video or playback controls exist in the captured import |
| Contact/footer | Contact details, email links, message form, company links | Contact/footer content and email links render | Partial: captured form has no working submission service; it was not submitted |

## Primary controls

| Route | Viewport | Position | Trigger | Expected result | Observed result | Status / evidence |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | Desktop 1280×1800 | Top | Hover About | About, Who We Are, Where We Work submenu | Same links open | Pass: `screenshots/desktop-about.png` |
| `/` | Phone 390×844 | Top | Toggle menu | Full navigation panel | Fresh check opens the menu with `aria-expanded=true`; previous interaction check confirmed About/Services/Industries/Projects expand and Escape closes with focus return | Pass: `screenshots/phone-menu-open.png`, `screenshots/phone-menu.png` |
| `/` | Desktop 1280×1800 | Top | Hover Services then General NDT | List of General NDT service links | 13 matching links appear | Pass: `screenshots/desktop-services-menu.png` |
| `/` | Phone 390×844 | Top | Open menu > Services > General NDT | Nested service links | Items appear, including NDT Inspection Services and Pressure Testing | Pass: `screenshots/phone-service-menu.png` |
| `/` | Phone 390×844 | Top | Select NDT Inspection Services | Preserve its same-site path on the preview origin | Reaches `/services/ndt-inspection-services`; route is not imported and correctly returns not found | Partial: destination preserved, page unavailable in this single-page import |
| `/` | Desktop | Top then `#services` | Explore Services | Jump to Services section | URL becomes `/#services`; section anchor exists | Pass: `screenshots/desktop-services-cta.png` |
| `/` | Desktop | Footer | Privacy Policy | Open full privacy details | Dialog with policy, local refinery photo, close button | Pass: `screenshots/desktop-privacy-open.png` |
| `/` | Desktop | Footer | Escape / Close privacy policy | Close and return focus to trigger | Dialog closes and focus returns | Pass: Playwright interaction check |
| `/` | Desktop/phone | Projects / `#projects-video` | Main media | Playing video and pause control | Captured still image only | Blocked: static fallback; no video playback to verify |

## Source artifacts

- `screenshots/source-desktop-top.png`, `screenshots/source-desktop-about.png`, `screenshots/source-desktop-industries.png`, `screenshots/source-desktop-bottom.png`
- `screenshots/source-desktop-services.png`, `screenshots/source-desktop-services-selected.png`
- `screenshots/source-mobile-top.png`, `screenshots/source-mobile-menu.png`, `screenshots/source-mobile-services.png`
- `screenshots/source-privacy-open.png`

## Preview artifacts

- `screenshots/desktop-home-top.png`, `screenshots/desktop-about.png`, `screenshots/desktop-services-menu.png`, `screenshots/desktop-services-cta.png`
- `screenshots/phone-home-top.png`, `screenshots/phone-menu-open.png`, `screenshots/phone-menu.png`, `screenshots/phone-service-menu.png`
- `screenshots/desktop-privacy-open.png`
- `screenshots/preview-desktop-company.png`, `screenshots/preview-desktop-industries.png`, `screenshots/preview-desktop-projects.png`, `screenshots/preview-desktop-video.png`, `screenshots/preview-desktop-contact.png`, `screenshots/preview-phone-service-menu.png`

## Known limitations

- This imports only the requested homepage. Service links keep their original local paths, but their pages are not part of this import.
- Imported project media is partly static, including the video still; animated scroll/canvas source behavior remains a visual limitation.
- The page width is constrained on phones; the project strip remains independently horizontally scrollable.
- The source itself had unavailable images in the browser capture; the importer saved 85 of 87 assets. The still video was retained as a generated local asset.

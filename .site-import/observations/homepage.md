# Homepage import observation ledger

Source: `https://murban-eng.com/`  
Preview: `/`  
Compared at 1280×1800 and 390×844. Source and preview were inspected using fresh browser sessions. No form was submitted and no credentials or account actions were entered.

## Section landmarks

| Section | Source observation | Preview result | Status |
| --- | --- | --- | --- |
| Homepage/hero | Full-width industrial inspection image, logo/title, service and project links; pinned hero animation | Imported assets render; headline, buttons, and crop visible on desktop and phone | Pass, visual layout verified |
| Company profile / About | Content reveals during long pinned scroll section | Preview includes About, Who We Are, Where We Work and associated copy; text present | Partial: dynamic pinned/source motion was not fully compared |
| Services | Four groups and their services | All service groups visible and tested; 35 service links navigate on preview origin | Pass for menu; destination service pages were not requested/imported |
| Industries | Seven industry links and section content | Industry links point to the matching homepage anchors | Partial: source pinned scroll interaction not fully compared |
| Projects | Horizontally moving case-study panel with seven project images | Static imported project content and images visible; small screen horizontal overflow found in imported layout | Partial: scroll-driven motion/static-panel behavior not verified |
| Project video | Source provides a project-video section | Importer retained a still image with `data-site-import-static-fallback="video"` | Blocked: no advancing video available in the captured import |
| Contact/footer | Contact details, email links, message form, company links | Imported contact/footer visible and email links retained | Partial: no backend submission exists; form was not submitted |

## Primary controls

| Route | Viewport | Position | Trigger | Expected result | Observed result | Status / evidence |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | Desktop 1280×1800 | Top | Hover About | About, Who We Are, Where We Work submenu | Same links open | Pass: `screenshots/fixed-desktop-about.png` |
| `/` | Phone 390×844 | Top | Toggle menu | Full navigation panel | Opens; About/Services/Industries/Projects expand; toggle reports `aria-expanded=true`; Escape closes and returns focus | Pass: `screenshots/fixed-mobile-menu.png` |
| `/` | Desktop 1280×1800 | Top | Hover Services then General NDT | List of General NDT service links | 13 matching links appear | Pass: `screenshots/fixed-desktop-services-selected.png` |
| `/` | Phone 390×844 | Top | Open menu > Services > General NDT | Nested service links | Items appear, including NDT Inspection Services and Pressure Testing | Pass: `screenshots/fixed-mobile-service-group.png` |
| `/` | Phone 390×844 | Top | Select NDT Inspection Services | Preserve its same-site path on the preview origin | Reaches `/services/ndt-inspection-services`; route is not imported and correctly returns not found | Partial: destination preserved, page unavailable in this single-page import |
| `/` | Desktop | Top then `#services` | Explore Services | Jump to Services section | URL becomes `/#services`; section anchor exists | Pass: `screenshots/fixed-desktop-services-cta.png` |
| `/` | Desktop | Footer | Privacy Policy | Open full privacy details | Dialog with policy, local refinery photo, close button | Pass: `screenshots/fixed-desktop-privacy-open.png` |
| `/` | Desktop | Footer | Escape / Close privacy policy | Close and return focus to trigger | Dialog closes and focus returns | Pass: Playwright interaction check |
| `/` | Desktop/phone | Projects / `#projects-video` | Main media | Playing video and pause control | Captured still image only | Blocked: static fallback; no video playback to verify |

## Source artifacts

- `screenshots/source-desktop-top.png`
- `screenshots/source-desktop-services.png`
- `screenshots/source-mobile-top.png`
- `screenshots/source-mobile-menu.png`
- `screenshots/source-mobile-services.png`
- `screenshots/source-privacy-open.png`

## Preview artifacts

- `screenshots/fixed-desktop-top.png`
- `screenshots/fixed-desktop-about.png`
- `screenshots/fixed-desktop-services-selected.png`
- `screenshots/fixed-desktop-services-cta.png`
- `screenshots/fixed-mobile-top.png`
- `screenshots/fixed-mobile-menu.png`
- `screenshots/fixed-mobile-service-group.png`
- `screenshots/fixed-desktop-privacy-open.png`

## Known limitations

- This imports only the requested homepage. Service links keep their original local paths, but their pages are not part of this import.
- Imported project media is partly static, including the video still; animated scroll/canvas source behavior remains a visual limitation.
- Mobile overflow is caused by the captured marquees and project strip. The browser clamps page width, but the imported strip itself extends beyond the phone viewport.
- The source itself had unavailable images in the browser capture; the importer saved 85 of 87 assets. The still video was retained as a generated local asset.

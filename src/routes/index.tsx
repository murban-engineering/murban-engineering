import type { CSSProperties } from "react";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MURBAN ENGINEERING LTD | Asset Integrity & NDT" },
      {
        name: "description",
        content:
          "Asset integrity, inspection, and non-destructive testing services across Africa since 2007.",
      },
      { property: "og:title", content: "MURBAN ENGINEERING LTD | Asset Integrity & NDT" },
      {
        property: "og:description",
        content:
          "Asset integrity, inspection, and non-destructive testing services across Africa since 2007.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  staticData: { importedDocument: { html: { "lang": "en" }, body: { "className": "\x66ont-sans \x61ntialiased" } } },
  component: Index,
});

function Index() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <style>{capturedCSS}</style>
      <div hidden />
      <main className={"min-h-screen \x62g-background"}>
        <ImportedHeader />
        <ImportedSection />
        <ImportedSectionTrustedByIndustryLeaders />
        <ImportedSectionWhatSetsUsApart />
        <ImportedSectionMURBANENGINEERINGLTDNDT />
        <ImportedSectionIndustriesWeServe />
        <ImportedSection2 />
        <ImportedSectionFeaturedProjectCaseStudies />
        <section className={"\x62g-background"}>
          <div className="flex items-center justify-center gap-6 pb-20" />
        </section>
        <section className={"\x62g-background \x73croll-mt-4"} id="projects-video">
          <div className={"relative left-1/2 aspect-[16/9] w-screen \x2dtranslate-x-1/\x32 overflow-hidden \x62g-[#\x3213164] md:aspect-[21/9]"}>
            <img className={"pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 \x62order-0"} style={{ width: "1536.02px", maxWidth: "100%", height: "auto" }} id="projects-video-player" alt="MURBAN ENGINEERING LTD projects video" src="/site-assets/e73bb6b01bcea8d7.png" data-site-import-static-fallback="video" />
          </div>
        </section>
        <ImportedSectionContactUs />
        <ImportedFooterMURBANENGINEERINGLTD onOpenPrivacy={() => setPrivacyOpen(true)} />
      </main>
      <PrivacyPolicyDialog open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
}

function ImportedHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [mobileServiceGroup, setMobileServiceGroup] = useState<string | null>(null);
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null);
  const [desktopServiceGroup, setDesktopServiceGroup] = useState<string | null>(null);

  const serviceGroups = [
    {
      id: "general",
      label: "General Non-Destructive Testing (NDT)",
      items: [
        ["NDT Inspection Services", "/services/ndt-inspection-services/"],
        ["Ultrasonic Flaw Testing C-Scan", "/services/ultrasonic-flaw-testing-c-scan/"],
        ["Ultrasonic Flaw Testing B-Scan", "/services/ultrasonic-flaw-testing-b-scan/"],
        ["UTM Ultrasonic Thickness Measurement", "/services/utm-ultrasonic-thickness-measurement/"],
        ["Visual Inspection", "/services/visual-inspection/"],
        ["Magnetic Particle Testing", "/services/magnetic-particle-testing/"],
        ["Fluorescent Magnet Particle Testing", "/services/fluorescent-magnet-particle-testing/"],
        ["Dye Penetrant Testing", "/services/dye-penetrant-testing/"],
        ["RT Radiographic Services", "/services/rt-radiographic-services/"],
        ["Paint & Coating Inspection", "/services/paint-coating-inspection/"],
        ["Gas Detection", "/services/gas-detection/"],
        ["Pressure Testing", "/services/pressure-testing/"],
        ["Surface Hardness Testing", "/services/surface-hardness-testing/"],
      ],
    },
    {
      id: "advanced",
      label: "Advanced NDT & Specialised Technologies",
      items: [
        ["Tank Calibration Services", "/services/tank-calibration-services/"],
        ["Phased Array Testing", "/services/phased-array-testing/"],
        ["3D Laser Scanning Services", "/services/3d-laser-scanning-services/"],
        ["Thermal Camera Inspection", "/services/thermal-camera-inspection/"],
        ["Alternating Current Field Measurement", "/services/alternating-current-field-measurement/"],
        ["Floormap 3D MFL Scanning", "/services/floormap-3d-mfl-scanning/"],
        ["UAV Inspection", "/services/uav-inspection/"],
      ],
    },
    {
      id: "certification",
      label: "Engineering Assessments & Certification",
      items: [
        ["API 570 Piping Inspection and Certification", "/services/api-570-piping-inspection-and-certification/"],
        ["API 653 Aboveground Storage Tank Inspection and Certification", "/services/api-653-aboveground-storage-tank-inspection-and-certification/"],
        ["API 510 Pressure Vessel Inspection", "/services/api-510-pressure-vessel-inspection/"],
        ["Positive Material Identification Testing", "/services/positive-material-identification-testing/"],
        ["API 579 Fitness for Service", "/services/api-579-fitness-for-service/"],
        ["API 580 Risk Based Inspection", "/services/api-580-risk-based-inspection/"],
        ["Boiler Inspection Services", "/services/boiler-inspection-services/"],
        ["Lifting Equipment Thorough Examination and Certification", "/services/lifting-equipment-thorough-examination-and-certification/"],
        ["Sphere Tank Inspections", "/services/sphere-tank-inspections/"],
      ],
    },
    {
      id: "fabrication",
      label: "Engineering & Fabrication",
      items: [
        ["Detailed Engineering", "/services/detailed-engineering/"],
        ["Procurement", "/services/procurement/"],
        ["Fabrication", "/services/fabrication/"],
        ["Construction and Erection", "/services/construction-and-erection/"],
        ["Specialised Welding", "/services/specialised-welding/"],
        ["Surface Preparation and Paint Works", "/services/surface-preparation-and-paint-works/"],
      ],
    },
  ] as const;

  const industryLinks = [
    ["Oil & Gas Industry", "/#industry-oil-gas-industry"],
    ["Power & Steam Generation", "/#industry-power-steam-generation"],
    ["Storage & Logistics Terminals", "/#industry-storage-logistics-terminals"],
    ["Food Processing Industry", "/#industry-food-processing-industry"],
    ["Renewable Energy & Geothermal", "/#industry-renewable-energy-geothermal"],
    ["Rail Industry", "/#industry-rail-industry"],
    ["Shipping & Marine Industry", "/#industry-shipping-marine-industry"],
  ] as const;

  const toggleMobileSection = (section: string) => {
    setMobileSection((current) => (current === section ? null : section));
    setMobileServiceGroup(null);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileSection(null);
    setMobileServiceGroup(null);
  };

  const renderServiceLinks = (groupId: (typeof serviceGroups)[number]["id"]) => {
    const group = serviceGroups.find((candidate) => candidate.id === groupId);
    if (!group) return null;
    return group.items.map(([label, href]) => (
      <a
        key={href}
        className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        href={href}
        onClick={closeMobileMenu}
      >
        {label}
      </a>
    ));
  };

  const renderMobileGroup = (section: string, links: readonly (readonly [string, string])[]) => (
    <div className="ml-4 border-l border-border pl-3">
      {links.map(([label, href]) => (
        <a
          key={href}
          className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          href={href}
          onClick={closeMobileMenu}
        >
          {label}
        </a>
      ))}
    </div>
  );

  const desktopMenuClass = (name: string) =>
    `absolute left-0 top-full z-50 mt-2 rounded-xl border border-border bg-background/95 p-2 opacity-0 shadow-xl backdrop-blur transition-all duration-200 ${desktopMenu === name ? "visible opacity-100" : "invisible"}`;

  return (
    <header
      className={`fixed left-1/2 top-3 z-50 w-[94%] max-w-3xl -translate-x-1/2 overflow-y-auto rounded-2xl bg-background/90 backdrop-blur-md transition-all duration-300 sm:top-4 sm:w-[90%] sm:rounded-full md:max-w-5xl ${mobileOpen ? "max-h-[calc(100vh-1.5rem)]" : "max-h-[4.5rem]"}`}
      style={{ boxShadow: "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px" }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeMobileMenu();
          setDesktopMenu(null);
        }
      }}
    >
      <div className="flex items-center justify-between border-b border-border/60 px-3 py-2 transition-all duration-300 sm:pl-5 md:border-b-0">
        <a className="flex min-w-0 flex-shrink-0 items-center" aria-label="MURBAN ENGINEERING LTD home" href="/#home">
          <img className="h-auto w-[150px] max-w-[52vw] object-contain sm:w-[170px] md:w-[180px]" style={{ color: "transparent" }} alt="MURBAN ENGINEERING LTD" width="1227" height="345" decoding="async" src="/site-assets/c513441600d26cbd.png" />
        </a>
        <nav className={"hidden min-w-0 flex-1 items-center justify-center gap-5 \x6dd:\x66lex lg:gap-8 xl:gap-10"}>
          <a className="whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-foreground" href="/#home">Home</a>
          <div className="relative" onMouseEnter={() => setDesktopMenu("about")} onMouseLeave={() => setDesktopMenu(null)}>
            <button aria-expanded={desktopMenu === "about"} className="inline-flex items-center gap-1 whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-foreground" type="button" onClick={() => setDesktopMenu((current) => current === "about" ? null : "about")}>About<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></button>
            <div className={`${desktopMenuClass("about")} w-56`}>
              <a className={"block rounded-lg px-3 py-2 text-sm text-foreground transition-colors \x68over:\x62g-muted"} href="/#about">About</a>
              <a className={"block rounded-lg px-3 py-2 text-sm text-foreground transition-colors \x68over:\x62g-muted"} href="/#who-we-are">Who We Are</a>
              <a className={"block rounded-lg px-3 py-2 text-sm text-foreground transition-colors \x68over:\x62g-muted"} href="/#where-we-work">Where We Work</a>
            </div>
          </div>
          <div className="relative" onMouseEnter={() => setDesktopMenu("services")} onMouseLeave={() => setDesktopMenu(null)}>
            <button aria-expanded={desktopMenu === "services"} className="inline-flex items-center gap-1 whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-foreground" type="button" onClick={() => setDesktopMenu((current) => current === "services" ? null : "services")}>Services<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></button>
            <div className={`${desktopMenuClass("services")} w-[44rem]`}>
              <div className="grid grid-cols-[18rem_1fr] gap-2">
                <div className={"max-h-[70vh] overflow-y-auto rounded-lg \x62order \x62order-border/\x360 p-1"}>
                  <a className={"mb-1 block rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors \x68over:\x62g-muted"} href="/#services">All Services</a>
                  {serviceGroups.map((group) => (
                    <div className="mb-1" key={group.id}>
                      <button aria-expanded={desktopServiceGroup === group.id} className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs font-semibold uppercase text-muted-foreground transition-colors hover:bg-muted" type="button" onClick={() => setDesktopServiceGroup((current) => current === group.id ? null : group.id)}>
                        {group.label}<svg className="transition-transform" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                      </button>
                    </div>
                  ))}
                </div>
                <div className={"min-h-[14rem] rounded-lg \x62order \x62order-border/\x360 p-1"}>
                  {desktopServiceGroup ? <div className="max-h-[70vh] overflow-y-auto">{renderServiceLinks(desktopServiceGroup)}</div> : <p className="px-3 py-2 text-sm text-muted-foreground">Select a service group to view items.</p>}
                </div>
              </div>
            </div>
          </div>
          <div className="relative" onMouseEnter={() => setDesktopMenu("industries")} onMouseLeave={() => setDesktopMenu(null)}>
            <button aria-expanded={desktopMenu === "industries"} className="inline-flex items-center gap-1 whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-foreground" type="button" onClick={() => setDesktopMenu((current) => current === "industries" ? null : "industries")}>Industries<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></button>
            <div className={`${desktopMenuClass("industries")} w-72`}>
              <a className={"block rounded-lg px-3 py-2 text-sm text-foreground transition-colors \x68over:\x62g-muted"} href="/#industries">All Industries</a>
              {industryLinks.map(([label, href]) => <a key={href} className="block rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted" href={href}>{label}</a>)}
            </div>
          </div>
          <div className="relative" onMouseEnter={() => setDesktopMenu("projects")} onMouseLeave={() => setDesktopMenu(null)}>
            <button aria-expanded={desktopMenu === "projects"} className="inline-flex items-center gap-1 whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-foreground" type="button" onClick={() => setDesktopMenu((current) => current === "projects" ? null : "projects")}>Our Projects<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></button>
            <div className={`${desktopMenuClass("projects")} w-56`}>
              <a className={"block rounded-lg px-3 py-2 text-sm text-foreground transition-colors \x68over:\x62g-muted"} href="/#our-projects">Our Projects</a>
              <a className={"block rounded-lg px-3 py-2 text-sm text-foreground transition-colors \x68over:\x62g-muted"} href="/#projects-video">Projects Video</a>
            </div>
          </div>
          <a className="whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-foreground" href="/#contact-us">Contact</a>
        </nav>
        <div className={"hidden flex-shrink-0 items-center gap-6 \x6dd:\x66lex"}>
          <a className="whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-foreground" href="https://portal.murban-eng.com/#/" rel="noopener noreferrer" target="_blank">Portal</a>
        </div>
        <button className="rounded-md p-1 text-foreground transition-colors hover:text-primary md:hidden" type="button" aria-label={mobileOpen ? "Close menu" : "Toggle menu"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen((open) => !open)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileOpen ? <path d="m18 6-12 12M6 6l12 12" /> : <><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></>}
          </svg>
        </button>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" className={`space-y-1 px-3 pb-4 pt-3 md:hidden ${mobileOpen ? "block" : "hidden"}`}>
        <a className="block rounded-md px-3 py-2 text-base text-foreground hover:bg-muted" href="/#home" onClick={closeMobileMenu}>Home</a>
        <div>
          <button className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-base text-foreground hover:bg-muted" type="button" aria-expanded={mobileSection === "about"} onClick={() => toggleMobileSection("about")}>About<ChevronIcon /></button>
          {mobileSection === "about" && renderMobileGroup("about", [["About", "/#about"], ["Who We Are", "/#who-we-are"], ["Where We Work", "/#where-we-work"]])}
        </div>
        <div>
          <button className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-base text-foreground hover:bg-muted" type="button" aria-expanded={mobileSection === "services"} onClick={() => toggleMobileSection("services")}>Services<ChevronIcon /></button>
          {mobileSection === "services" && <div className="ml-4 border-l border-border pl-3">
            <a className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground" href="/#services" onClick={closeMobileMenu}>All Services</a>
            {serviceGroups.map((group) => (
              <div key={group.id}>
                <button className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-semibold text-foreground hover:bg-muted" type="button" aria-expanded={mobileServiceGroup === group.id} onClick={() => setMobileServiceGroup((current) => current === group.id ? null : group.id)}>{group.label}<ChevronIcon /></button>
                {mobileServiceGroup === group.id && <div className="ml-3 border-l border-border pl-2">{renderServiceLinks(group.id)}</div>}
              </div>
            ))}
          </div>}
        </div>
        <div>
          <button className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-base text-foreground hover:bg-muted" type="button" aria-expanded={mobileSection === "industries"} onClick={() => toggleMobileSection("industries")}>Industries<ChevronIcon /></button>
          {mobileSection === "industries" && renderMobileGroup("industries", [["All Industries", "/#industries"], ...industryLinks])}
        </div>
        <div>
          <button className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-base text-foreground hover:bg-muted" type="button" aria-expanded={mobileSection === "projects"} onClick={() => toggleMobileSection("projects")}>Our Projects<ChevronIcon /></button>
          {mobileSection === "projects" && renderMobileGroup("projects", [["Our Projects", "/#our-projects"], ["Projects Video", "/#projects-video"]])}
        </div>
        <a className="block rounded-md px-3 py-2 text-base text-foreground hover:bg-muted" href="/#contact-us" onClick={closeMobileMenu}>Contact</a>
        <a className="block rounded-md px-3 py-2 text-base text-foreground hover:bg-muted" href="https://portal.murban-eng.com/#/" target="_blank" rel="noopener noreferrer">Portal</a>
      </nav>
    </header>
  );
}

function ChevronIcon() {
  return <svg className="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>;
}

function ImportedSection() {
  return (
    <section className={"relative \x62g-background"} id="home">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          <div className="relative flex h-full w-full items-stretch justify-center" style={{ gap: "0px", padding: "0px 0px 60px" }}>
            <div className="flex flex-col will-change-transform" style={{ width: "0%", gap: "0px", transform: "translateX(-100%) translateY(0%)", opacity: "0" }}>
              <div className="relative overflow-hidden will-change-transform" style={{ flex: "1 1 0%", borderRadius: "0px" }}>
                <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Industrial facility overview" loading="lazy" decoding="async" src="/site-assets/dd26f7b7c135f093.webp" />
              </div>
              <div className="relative overflow-hidden will-change-transform" style={{ flex: "1 1 0%", borderRadius: "0px" }}>
                <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Industrial operations site" loading="lazy" decoding="async" src="/site-assets/55ea49278a78fe69.webp" />
              </div>
            </div>
            <div className="relative overflow-hidden will-change-transform" style={{ width: "100%", height: "100%", flex: "0 0 auto", borderRadius: "0px" }}>
              <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="MURBAN ENGINEERING LTD industrial services hero image" decoding="async" src="/site-assets/ba05f3f833b9ab51.webp" />
              <div className={"absolute inset-0 flex items-end \x6dd:\x69tems-end overflow-hidden"} style={{ opacity: "1" }}>
                <div className={"w-full \x62g-gradient-to-t \x66rom-black/\x370 \x76ia-black/\x340 \x74o-transparent px-6 pb-20 pt-20 text-white md:px-12 md:pb-14 md:pt-24 lg:px-16"}>
                  <div className={"relative h-[7rem] w-[16.5rem] \x64rop-shadow-[\x30_2px_8px_rgba(\x30,\x30,\x30,\x30.\x335)] md:h-[11rem] md:w-[26rem]"} aria-label="MURBAN ENGINEERING LTD">
                    <img className={"object-contain \x6fbject-left"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="MURBAN ENGINEERING LTD" decoding="async" src="/site-assets/6b0bda99500b4a50.png" />
                  </div>
                  <p className={"mt-4 max-w-3xl text-sm leading-relaxed \x74ext-white/\x390 md:text-base"}>A specialist firm in Asset Integrity, Inspection, and Non-Destructive Testing (NDT). We deliver reliable and safe inspection solutions for oil &amp; gas, energy, marine, and industrial sectors across Africa.</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a className={"rounded-md \x62g-[#\x4160D0F] px-4 py-2 text-sm font-medium text-white transition \x68over:\x62g-[#\x38f0b0d]"} href="#services">Explore Services</a>
                    <a className={"rounded-md \x62order \x62order-white/\x380 px-4 py-2 text-sm font-medium text-white transition \x68over:\x62g-white/\x310"} href="#our-projects">View Our Projects</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col will-change-transform" style={{ width: "0%", gap: "0px", transform: "translateX(100%) translateY(0%)", opacity: "0" }}>
              <div className="relative overflow-hidden will-change-transform" style={{ flex: "1 1 0%", borderRadius: "0px" }}>
                <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Plant and pipeline infrastructure" loading="lazy" decoding="async" src="/site-assets/0c0db1c78728d582.webp" />
              </div>
              <div className="relative overflow-hidden will-change-transform" style={{ flex: "1 1 0%", borderRadius: "0px" }}>
                <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Industrial storage and processing" loading="lazy" decoding="async" src="/site-assets/e2fda55345967ae6.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[300vh]" />
      <div className="px-6 pt-32 pb-28 md:pt-48 md:px-12 md:pb-36 lg:px-20 lg:pt-56 lg:pb-44">
        <p className={"mx-auto max-w-2xl text-center text-2xl leading-relaxed text-muted-foreground md:text-3xl \x6cg:\x74ext-[\x32.\x35rem] lg:leading-snug"}>ISO 9001:2015<br />Operating since 2007<br />Certified ASNT SNT-TC-1A<br />Level II Technicians</p>
      </div>
    </section>
  );
}

function ImportedSectionTrustedByIndustryLeaders() {
  return (
    <section className={"\x62g-background py-16 md:py-20"}>
      <div className="px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground md:text-3xl">Trusted by industry leaders</h2>
          <div className={"mt-10 \x73pace-y-5"}>
            <div className="relative overflow-hidden">
              <div className="trusted-marquee">
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/46f4718509a36f14.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/0312c9e3d67bc00a.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/f7489f03c4504eec.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/76046f72ce528f46.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/104cfd14922ad1ab.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/e44df3ab01734c3a.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/ba1579b88bc389f9.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/c3d04ebfb9558c49.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/a7f9137f7f376271.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/46f4718509a36f14.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/0312c9e3d67bc00a.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/f7489f03c4504eec.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/76046f72ce528f46.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/104cfd14922ad1ab.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/e44df3ab01734c3a.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/ba1579b88bc389f9.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/c3d04ebfb9558c49.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/a7f9137f7f376271.png" />
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <div className="trusted-marquee trusted-marquee-reverse">
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/6393308a7c988e6d.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/f13c7b1ec3d7d1ea.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/c17cc44411ad9d21.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/3645f1a8b7737213.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/0e3efb4032e99311.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/5d8e7d53aedcca14.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/d02f0d4d2e0d3326.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/8c2d4d0e346902a1.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/6393308a7c988e6d.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/f13c7b1ec3d7d1ea.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/c17cc44411ad9d21.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/3645f1a8b7737213.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/0e3efb4032e99311.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/5d8e7d53aedcca14.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/d02f0d4d2e0d3326.png" />
                </div>
                <div className={"flex h-20 w-44 shrink-0 items-center justify-center rounded-lg \x62order \x62order-border/\x360 \x62g-card/\x370 px-5"}>
                  <img className="h-10 w-auto object-contain" style={{ color: "transparent" }} alt="Client logo" loading="lazy" width="136" height="48" decoding="async" src="/site-assets/8c2d4d0e346902a1.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionWhatSetsUsApart() {
  return (
    <section className={"\x62g-background"} id="company-profile">
      <div className="relative" style={{ height: "200vh" }}>
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0" style={{ opacity: "1" }}>
              <div className="px-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary sm:text-base">Why choose us</p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">What sets us apart</h2>
                <div className={"mx-auto mt-5 flex max-w-4xl flex-col items-center gap-3 text-base font-medium \x74ext-foreground/\x390 sm:text-lg md:text-xl"}>
                  <p>ASNT SNT-TC-1A Level II inspectors on every job.</p>
                  <p>API-aligned reporting that passes IOC technical evaluation.</p>
                  <p>Mobilisation across East and Central Africa within 72 hours.</p>
                </div>
              </div>
            </div>
            <div className="relative z-10 grid grid-cols-1 gap-4 px-6 md:grid-cols-2 md:px-12 lg:px-20">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl [backface-visibility:hidden]" style={{ transform: "translate3d(-100%, 0px, 0px)" }}>
                <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Field technician backpack kit" loading="lazy" decoding="async" src="/site-assets/f54d2a2aaf5e3a6d.jpg" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl [backface-visibility:hidden]" style={{ transform: "translate3d(100%, 0px, 0px)" }}>
                <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Technical field gear setup" loading="lazy" decoding="async" src="/site-assets/5ea019c7c7d6e6ec.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={"\x73croll-mt-28 \x62g-background"} id="about">
        <div className={"px-6 \x70y-fluid-xl md:px-12 lg:px-20"}>
          <p className={"\x63ontent-wide \x74ext-fluid-3xl leading-relaxed text-foreground text-pretty"}>We operate through two divisions:<br />MURBAN Inspection Services<br />MURBAN ENGINEERING LTD Services<br />With a fully equipped laboratory in Mombasa and mobile teams deployed regionally, MURBAN ENGINEERING LTD is your trusted partner for both on-site and lab-based inspections, delivered with safety, speed, and precision.</p>
        </div>
        <div className={"relative isolate min-h-screen w-full overflow-hidden \x62g-[#\x3101522]"} role="img" aria-label="MURBAN ENGINEERING LTD asset integrity connects inspection services and fabrication">
          <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
            <div className="relative flex min-h-[50vh] items-center justify-center overflow-hidden px-6 py-24 text-center md:min-h-screen md:px-12 lg:px-20">
              <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Inspection services background" loading="lazy" decoding="async" src="/site-assets/d01c105f74a04681.jpg" />
              <div className={"absolute inset-0 \x62g-[#\x4160D0F]/\x380 mix-blend-multiply"} />
              <div className={"absolute inset-0 \x62g-gradient-to-r \x66rom-[#\x4160D0F]/\x390 \x76ia-[#\x4160D0F]/\x370 \x74o-[#\x4160D0F]/\x355"} />
              <div className="relative z-10 max-w-md text-white">
                <p className={"text-xs font-semibold uppercase tracking-[0.32em] \x74ext-white/\x375"}>01</p>
                <h3 className={"mt-5 \x74ext-fluid-3xl font-semibold tracking-tight text-balance"}>Inspection Services</h3>
                <p className={"mt-5 text-base leading-relaxed \x74ext-white/\x385 md:text-lg"}>NDT, certification, testing, and compliance-focused field inspection teams.</p>
              </div>
            </div>
            <div className="relative flex min-h-[50vh] items-center justify-center overflow-hidden px-6 py-24 text-center md:min-h-screen md:px-12 lg:px-20">
              <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Fabrication services background" loading="lazy" decoding="async" src="/site-assets/aca26f8ee616f1bd.jpg" />
              <div className={"absolute inset-0 \x62g-[#\x3213164]/\x380 mix-blend-multiply"} />
              <div className={"absolute inset-0 \x62g-gradient-to-l \x66rom-[#\x3213164]/\x390 \x76ia-[#\x3213164]/\x372 \x74o-[#\x3213164]/\x355"} />
              <div className="relative z-10 max-w-md text-white">
                <p className={"text-xs font-semibold uppercase tracking-[0.32em] \x74ext-white/\x375"}>02</p>
                <h3 className={"mt-5 \x74ext-fluid-3xl font-semibold tracking-tight text-balance"}>Fabrication</h3>
                <p className={"mt-5 text-base leading-relaxed \x74ext-white/\x385 md:text-lg"}>Engineering assessments, repair planning, fabrication support, and site execution.</p>
              </div>
            </div>
          </div>
          <div className={"pointer-events-none absolute left-1/2 top-1/2 z-20 flex w-[min(58vw,18rem)] \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 flex-col items-center justify-center rounded-[1.25rem] \x62order \x62order-white/\x330 \x62g-white/\x388 px-4 py-5 text-center \x73hadow-2xl \x73hadow-black/\x325 \x62ackdrop-blur-xl md:w-[17rem] md:px-6 md:py-6"}>
            <div className={"flex h-14 w-14 items-center justify-center rounded-full \x62order \x62order-[#\x3213164]/\x315 bg-white \x73hadow-lg md:h-16 md:w-16"}>
              <img className="h-10 w-10 object-contain md:h-12 md:w-12" style={{ color: "transparent" }} alt="MURBAN ENGINEERING LTD logo" loading="lazy" width="52" height="52" decoding="async" src="/site-assets/317d1f91a03ee046.ico" />
            </div>
            <p className={"mt-3 text-[0.6rem] font-semibold uppercase tracking-[0.3em] \x74ext-[#\x4160D0F]"}>Outcome</p>
            <h3 className={"mt-1.5 \x74ext-fluid-xl font-semibold uppercase tracking-tight \x74ext-[#\x3213164] text-balance"}>Asset Integrity</h3>
          </div>
        </div>
        <div className={"px-6 \x70y-fluid-lg md:px-12 lg:px-20"}>
          <div className={"mx-auto max-w-6xl \x73pace-y-14"}>
            <div className={"grid gap-10 lg:grid-cols-[1.05fr_1fr] \x6cg:\x69tems-stretch"}>
              <div className={"rounded-3xl \x62order \x62order-[#\x3213164]/\x320 \x62g-gradient-to-br \x66rom-[#\x3213164]/\x35 \x76ia-white \x74o-[#\x4160D0F]/\x35 p-8 \x73hadow-sm md:p-10"}>
                <p className={"text-xs uppercase tracking-[0.2em] \x74ext-[#\x3213164]"}>Company Profile</p>
                <h3 className="murban-engineering-wordmark mt-4 text-3xl tracking-tight !text-black md:text-4xl">MURBAN ENGINEERING LTD</h3>
                <p className="mt-5 text-lg leading-relaxed text-black">MURBAN ENGINEERING LTD is a specialist firm in Asset Integrity, Inspection, and Non-Destructive Testing (NDT). We deliver reliable and safe inspection solutions that support critical infrastructure in the oil &amp; gas, energy, marine, and industrial sectors.</p>
                <p className="mt-4 text-lg leading-relaxed text-black">Operating since 2007 across East, Central, Southern and West Africa, with delivered projects in 20+ countries. Our services help clients extend asset life, ensure regulatory compliance, and minimise downtime.</p>
              </div>
              <div className={"relative overflow-hidden rounded-3xl \x62order \x62order-[#\x4160D0F]/\x325 \x62g-[#\x3213164] p-8 text-white \x73hadow-lg md:p-10"}>
                <div className={"pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full \x62g-[#\x4160D0F]/\x320 \x62lur-3xl"} />
                <div className={"pointer-events-none absolute -bottom-24 -left-20 h-60 w-60 rounded-full \x62g-[#\x3213164]/\x335 \x62lur-3xl"} />
                <div className="relative">
                  <p className="murban-engineering-wordmark text-xs uppercase tracking-[0.2em] text-black">Why Clients Choose MURBAN ENGINEERING LTD</p>
                </div>
                <div className={"relative mt-6 \x73pace-y-4 \x74ext-white/\x390"}>
                  <p className="text-base leading-relaxed"><span className="font-semibold text-white">African-based, globally credible:</span> Operating since 2007 across East, Central, Southern and West Africa, with delivered projects in 20+ countries.</p>
                  <p className="text-base leading-relaxed"><span className="font-semibold text-white">ISO 9001:2015 Certified:</span> Every aspect of our service delivery governed by a certified quality management system.</p>
                  <p className="text-base leading-relaxed"><span className="font-semibold text-white">Sharp Focus on Safety:</span> 100% commitment to safety embedded in every engagement, with zero tolerance on HSE.</p>
                  <p className="text-base leading-relaxed"><span className="font-semibold text-white">Fast, Effective Mobilisation:</span> Strategic Nairobi and Mombasa bases enable rapid deployment across East, Central, Southern and West Africa.</p>
                  <p className="text-base leading-relaxed"><span className="font-semibold text-white">International Standards:</span> API, ASNT and ISO: all work executed to internationally recognised codes and standards.</p>
                  <p className="text-base leading-relaxed"><span className="font-semibold text-white">Solutions-Focused Excellence:</span> Technical depth ensures any inspection challenge, conventional or advanced, can be tackled.</p>
                </div>
              </div>
            </div>
            <div className={"grid gap-10 lg:grid-cols-2 \x6cg:\x69tems-start"}>
              <div className={"\x61nimate-in fade-in-0 slide-in-from-left-4 duration-700"} style={{ transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotate(0deg)", opacity: "1" }}>
                <h3 className={"\x73croll-mt-28 text-3xl font-medium tracking-tight text-foreground md:text-4xl"} id="who-we-are">Who We Are</h3>
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <div className={"group relative overflow-hidden rounded-2xl \x62order \x62order-[#\x3213164]/\x320 bg-white p-5 \x73hadow-sm transition-all duration-300 \x68over:\x2dtranslate-y-1 \x68over:\x62order-[#\x4160D0F]/\x345 \x68over:\x73hadow-md"} style={{ animationDelay: "0ms" } as CSSProperties}>
                    <div className={"pointer-events-none absolute \x69nset-x-0 top-0 h-1 \x62g-[#\x3213164]"} />
                    <p className="text-base leading-relaxed text-muted-foreground">Conventional and Advanced NDT and Inspection Services</p>
                  </div>
                  <div className={"group relative overflow-hidden rounded-2xl \x62order \x62order-[#\x3213164]/\x320 bg-white p-5 \x73hadow-sm transition-all duration-300 \x68over:\x2dtranslate-y-1 \x68over:\x62order-[#\x4160D0F]/\x345 \x68over:\x73hadow-md"} style={{ animationDelay: "90ms" } as CSSProperties}>
                    <div className={"pointer-events-none absolute \x69nset-x-0 top-0 h-1 \x62g-[#\x3213164]"} />
                    <p className="text-base leading-relaxed text-muted-foreground">Engineering</p>
                  </div>
                  <div className={"group relative overflow-hidden rounded-2xl \x62order \x62order-[#\x3213164]/\x320 bg-white p-5 \x73hadow-sm transition-all duration-300 \x68over:\x2dtranslate-y-1 \x68over:\x62order-[#\x4160D0F]/\x345 \x68over:\x73hadow-md"} style={{ animationDelay: "180ms" } as CSSProperties}>
                    <div className={"pointer-events-none absolute \x69nset-x-0 top-0 h-1 \x62g-[#\x3213164]"} />
                    <p className="text-base leading-relaxed text-muted-foreground">Oil and Gas, Refinery, Petrochemical, Heavy Industry, Mining and Power Plant</p>
                  </div>
                  <div className={"group relative overflow-hidden rounded-2xl \x62order \x62order-[#\x3213164]/\x320 bg-white p-5 \x73hadow-sm transition-all duration-300 \x68over:\x2dtranslate-y-1 \x68over:\x62order-[#\x4160D0F]/\x345 \x68over:\x73hadow-md"} style={{ animationDelay: "270ms" } as CSSProperties}>
                    <div className={"pointer-events-none absolute \x69nset-x-0 top-0 h-1 \x62g-[#\x3213164]"} />
                    <p className="text-base leading-relaxed text-muted-foreground">Qualified and certified inspectors and NDT Practitioners</p>
                  </div>
                  <div className={"group relative overflow-hidden rounded-2xl \x62order \x62order-[#\x3213164]/\x320 bg-white p-5 \x73hadow-sm transition-all duration-300 \x68over:\x2dtranslate-y-1 \x68over:\x62order-[#\x4160D0F]/\x345 \x68over:\x73hadow-md"} style={{ animationDelay: "360ms" } as CSSProperties}>
                    <div className={"pointer-events-none absolute \x69nset-x-0 top-0 h-1 \x62g-[#\x3213164]"} />
                    <p className="text-base leading-relaxed text-muted-foreground">Operating since 2007 across East, Central, Southern and West Africa, with delivered projects in 20+ countries.</p>
                  </div>
                </div>
              </div>
              <div className={"\x61nimate-in fade-in-0 slide-in-from-right-4 duration-700 rounded-3xl \x62order \x62order-[#\x3213164]/\x320 bg-white p-8 md:p-10"} style={{ transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotate(0deg)", opacity: "1" }}>
                <h3 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">MURBAN ENGINEERING LTD</h3>
                <h4 className={"mt-8 text-2xl font-medium \x74ext-[#\x4160D0F]"}>Vision</h4>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">It is our vision to be the undisputed leaders in the field of specialised Non-Destructive Testing through innovation, experience and the use of technology.</p>
                <h4 className={"mt-8 text-2xl font-medium \x74ext-[#\x4160D0F]"}>Mission</h4>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">We will deliver value to our clients by executing world class asset integrity services that maximise up-time and safety.</p>
                <h4 className={"mt-8 text-2xl font-medium \x74ext-[#\x4160D0F]"}>Values</h4>
                <ul className={"mt-3 \x73pace-y-1 text-lg leading-relaxed text-muted-foreground"}>
                  <li>• Respect and Diversity;</li>
                  <li>• Ethics and Integrity;</li>
                  <li>• Safety and Sustainability are important to us;</li>
                </ul>
              </div>
            </div>
            <div className={"mx-auto mt-10 w-full max-w-md rounded-2xl \x62order \x62order-border \x62g-card/\x340 p-6"}>
              <h4 className="text-center text-2xl font-medium text-primary">Core Values</h4>
              <svg className="mx-auto mt-6 h-72 w-72 max-w-full" viewBox="0 0 240 240" role="img" aria-label="Core values pie chart">
                <g transform="translate(120,120)">
                  <path d="M 0 0 L 0 -90 A 90 90 0 0 1 77.94 45 Z" fill="#A60D0F" stroke="#0f172a" strokeWidth="1" />
                  <path d="M 0 0 L 77.94 45 A 90 90 0 0 1 -77.94 45 Z" fill="#213164" stroke="#0f172a" strokeWidth="1" />
                  <path d="M 0 0 L -77.94 45 A 90 90 0 0 1 0 -90 Z" fill="#FFFFFF" stroke="#0f172a" strokeWidth="1.5" />
                  <text x="42" y="-18" textAnchor="middle" fontSize="8" fill="#FFFFFF" fontWeight="600">Passion for</text>
                  <text x="42" y="-8" textAnchor="middle" fontSize="8" fill="#FFFFFF" fontWeight="600">Innovation</text>
                  <text x="0" y="58" textAnchor="middle" fontSize="8" fill="#FFFFFF" fontWeight="600">Customer</text>
                  <text x="0" y="68" textAnchor="middle" fontSize="8" fill="#FFFFFF" fontWeight="600">Obsession</text>
                  <text x="-42" y="-18" textAnchor="middle" fontSize="8" fill="#0f172a" fontWeight="600">Drive for</text>
                  <text x="-42" y="-8" textAnchor="middle" fontSize="8" fill="#0f172a" fontWeight="600">Results</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="px-6 md:px-12 lg:px-20">
          <div className={"mx-auto max-w-6xl \x73pace-y-14"}>
            <div>
              <div className={"rounded-3xl \x62order \x62order-border/\x360 \x62g-card px-6 py-10 md:px-10"}>
                <div className={"mx-auto max-w-5xl \x73pace-y-4"}>
                  <h3 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Part of the Murban Group</h3>
                  <p className="text-pretty text-lg leading-relaxed text-muted-foreground">MURBAN ENGINEERING LTD is part of the Murban Group, a privately held East African holding company. Our sister company Murban Chemicals (<a className={"font-medium text-foreground underline \x75nderline-offset-4 transition-colors hover:text-primary"} href="https://www.murchem.com/" rel="noopener noreferrer" target="_blank">Murchem</a>) delivers dye injection and marine logistics services to the petroleum sector. Where a project calls for cross-disciplinary scope, the group entities collaborate under a single point of contact.</p>
                </div>
              </div>
            </div>
            <div>
              <div className={"rounded-3xl \x62g-muted/\x360 px-6 py-12 md:px-10"}>
                <div className="mx-auto max-w-5xl">
                  <div className="flex flex-col items-center text-center">
                    <svg className="h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <h3 className={"\x73croll-mt-28 mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl"} id="where-we-work">Where We Work</h3>
                  </div>
                  <div className={"mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] \x6cg:\x69tems-center"}>
                    <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                      <p className="flex items-center gap-3 text-2xl font-semibold" style={{ color: "rgb(166, 13, 15)" }}><svg className="h-6 w-6 shrink-0" style={{ color: "rgb(166, 13, 15)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Burundi</p>
                      <p className="flex items-center gap-3 text-2xl font-semibold" style={{ color: "rgb(166, 13, 15)" }}><svg className="h-6 w-6 shrink-0" style={{ color: "rgb(166, 13, 15)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Cameroon</p>
                      <p className="flex items-center gap-3 text-2xl font-semibold" style={{ color: "rgb(166, 13, 15)" }}><svg className="h-6 w-6 shrink-0" style={{ color: "rgb(166, 13, 15)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Central African Republic</p>
                      <p className="flex items-center gap-3 text-2xl font-semibold" style={{ color: "rgb(166, 13, 15)" }}><svg className="h-6 w-6 shrink-0" style={{ color: "rgb(166, 13, 15)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Chad</p>
                      <p className="flex items-center gap-3 text-2xl font-semibold" style={{ color: "rgb(166, 13, 15)" }}><svg className="h-6 w-6 shrink-0" style={{ color: "rgb(166, 13, 15)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Comoros</p>
                      <p className="flex items-center gap-3 text-2xl font-semibold" style={{ color: "rgb(166, 13, 15)" }}><svg className="h-6 w-6 shrink-0" style={{ color: "rgb(166, 13, 15)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Côte d'Ivoire</p>
                      <p className="flex items-center gap-3 text-2xl font-semibold" style={{ color: "rgb(166, 13, 15)" }}><svg className="h-6 w-6 shrink-0" style={{ color: "rgb(166, 13, 15)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Democratic Republic of Congo</p>
                      <p className="flex items-center gap-3 text-2xl font-semibold" style={{ color: "rgb(166, 13, 15)" }}><svg className="h-6 w-6 shrink-0" style={{ color: "rgb(166, 13, 15)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Eritrea</p>
                      <p className="flex items-center gap-3 text-2xl font-semibold" style={{ color: "rgb(166, 13, 15)" }}><svg className="h-6 w-6 shrink-0" style={{ color: "rgb(166, 13, 15)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Ethiopia</p>
                      <p className="flex items-center gap-3 text-2xl font-semibold" style={{ color: "rgb(166, 13, 15)" }}><svg className="h-6 w-6 shrink-0" style={{ color: "rgb(166, 13, 15)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Ghana</p>
                      <p className="flex items-center gap-3 text-2xl font-semibold" style={{ color: "rgb(33, 49, 100)" }}><svg className="h-6 w-6 shrink-0" style={{ color: "rgb(33, 49, 100)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Kenya (HQ)</p>
                      <p className="flex items-center gap-3 text-2xl font-semibold" style={{ color: "rgb(166, 13, 15)" }}><svg className="h-6 w-6 shrink-0" style={{ color: "rgb(166, 13, 15)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Madagascar</p>
                      <p className="flex items-center gap-3 text-2xl font-semibold" style={{ color: "rgb(166, 13, 15)" }}><svg className="h-6 w-6 shrink-0" style={{ color: "rgb(166, 13, 15)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Malawi</p>
                      <p className="flex items-center gap-3 text-2xl font-semibold" style={{ color: "rgb(166, 13, 15)" }}><svg className="h-6 w-6 shrink-0" style={{ color: "rgb(166, 13, 15)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Mauritius</p>
                      <p className="flex items-center gap-3 text-2xl font-semibold" style={{ color: "rgb(166, 13, 15)" }}><svg className="h-6 w-6 shrink-0" style={{ color: "rgb(166, 13, 15)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Mozambique</p>
                      <p className="flex items-center gap-3 text-2xl font-semibold" style={{ color: "rgb(166, 13, 15)" }}><svg className="h-6 w-6 shrink-0" style={{ color: "rgb(166, 13, 15)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Rwanda</p>
                      <p className="flex items-center gap-3 text-2xl font-semibold" style={{ color: "rgb(166, 13, 15)" }}><svg className="h-6 w-6 shrink-0" style={{ color: "rgb(166, 13, 15)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Seychelles</p>
                      <p className="flex items-center gap-3 text-2xl font-semibold" style={{ color: "rgb(166, 13, 15)" }}><svg className="h-6 w-6 shrink-0" style={{ color: "rgb(166, 13, 15)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Somalia</p>
                      <p className="flex items-center gap-3 text-2xl font-semibold" style={{ color: "rgb(166, 13, 15)" }}><svg className="h-6 w-6 shrink-0" style={{ color: "rgb(166, 13, 15)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>South Sudan</p>
                      <p className="flex items-center gap-3 text-2xl font-semibold" style={{ color: "rgb(166, 13, 15)" }}><svg className="h-6 w-6 shrink-0" style={{ color: "rgb(166, 13, 15)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Sudan</p>
                      <p className="flex items-center gap-3 text-2xl font-semibold" style={{ color: "rgb(166, 13, 15)" }}><svg className="h-6 w-6 shrink-0" style={{ color: "rgb(166, 13, 15)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Tanzania</p>
                      <p className="flex items-center gap-3 text-2xl font-semibold" style={{ color: "rgb(166, 13, 15)" }}><svg className="h-6 w-6 shrink-0" style={{ color: "rgb(166, 13, 15)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Uganda</p>
                      <p className="flex items-center gap-3 text-2xl font-semibold" style={{ color: "rgb(166, 13, 15)" }}><svg className="h-6 w-6 shrink-0" style={{ color: "rgb(166, 13, 15)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Zambia</p>
                      <p className="flex items-center gap-3 text-2xl font-semibold" style={{ color: "rgb(166, 13, 15)" }}><svg className="h-6 w-6 shrink-0" style={{ color: "rgb(166, 13, 15)" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>Zimbabwe</p>
                    </div>
                    <div className={"overflow-hidden rounded-2xl \x62g-card relative bg-white"} aria-label="Africa map showing Murban operations" role="img">
                      <div className="relative aspect-[10/11] w-full min-h-[360px] rounded-xl bg-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={"\x62g-background"} id="services">
        <div className="relative h-[220vh]">
          <div className="sticky top-0 h-screen overflow-hidden">
            <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Aerial view of gas and oil refinery" fetchPriority="high" decoding="async" src="/site-assets/55ea49278a78fe69.webp" />
            <div className={"absolute inset-0 \x62g-black/\x345"} />
            <div className="absolute inset-0 flex items-center justify-center px-6 transition-opacity duration-150 md:px-12 lg:px-20" style={{ opacity: "1", transform: "translateY(0px)", pointerEvents: "auto" }}>
              <div className="w-full max-w-5xl rounded-2xl p-6 sm:p-8">
                <p className={"inline-flex rounded-full \x62g-white/\x390 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary \x73hadow-lg \x73hadow-black/\x315 \x62ackdrop-blur-sm"}>Our services</p>
                <h3 className={"murban-engineering-wordmark mt-3 \x74ext-fluid-4xl font-medium text-white text-balance"}>
                  <span className={"block uppercase \x74ext-[#\x4382032] \x64rop-shadow-[\x30_2px_8px_rgba(\x30,\x30,\x30,\x30.\x335)]"}>MURBAN</span>
                  <span className={"murban-engineering-wordmark-subtitle mt-2 inline-block rounded-full \x62g-white/\x390 px-4 py-2 \x74ext-[#\x3213164] \x73hadow-lg \x73hadow-black/\x320 \x62ackdrop-blur-sm text-xl md:text-3xl"}>ENGINEERING LTD</span>
                </h3>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a className={"rounded-full \x62order \x62order-border \x62g-background/\x380 px-4 py-2 text-xs font-semibold tracking-wide \x74ext-[#\x4160D0F] transition-colors \x68over:\x62g-[#\x4160D0F]/\x310"} href="#services-general-non-destructive-testing-ndt">General Non-Destructive Testing (NDT)</a>
                  <a className={"rounded-full \x62order \x62order-border \x62g-background/\x380 px-4 py-2 text-xs font-semibold tracking-wide \x74ext-[#\x4160D0F] transition-colors \x68over:\x62g-[#\x4160D0F]/\x310"} href="#services-advanced-ndt-specialised-technologies">Advanced NDT &amp; Specialised Technologies</a>
                  <a className={"rounded-full \x62order \x62order-border \x62g-background/\x380 px-4 py-2 text-xs font-semibold tracking-wide \x74ext-[#\x4160D0F] transition-colors \x68over:\x62g-[#\x4160D0F]/\x310"} href="#services-engineering-assessments-certification">Engineering Assessments &amp; Certification</a>
                  <a className={"rounded-full \x62order \x62order-border \x62g-background/\x380 px-4 py-2 text-xs font-semibold tracking-wide \x74ext-[#\x4160D0F] transition-colors \x68over:\x62g-[#\x4160D0F]/\x310"} href="#services-engineering-fabrication">Engineering &amp; Fabrication</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"relative overflow-hidden px-6 \x70y-fluid-lg md:px-12 lg:px-20"}>
          <div className={"\x63ontent-wide relative z-10 mx-auto text-foreground"}>
            <div className="mt-14">
              <h4 className="text-center text-2xl font-semibold tracking-tight text-foreground md:text-3xl">TECHNOLOGY AND TRAINING PARTNERS</h4>
              <div className="relative mt-8 overflow-hidden">
                <div className="trusted-marquee">
                  <div className={"flex h-24 w-56 shrink-0 items-center justify-center rounded-xl \x62order \x62order-white/\x325 \x62g-white/\x310 px-6"}>
                    <img className="h-14 w-auto object-contain" style={{ color: "transparent" }} alt="Technology and training partner logo" loading="lazy" width="180" height="70" decoding="async" src="/site-assets/4b403b0ec7cbbca5.png" />
                  </div>
                  <div className={"flex h-24 w-56 shrink-0 items-center justify-center rounded-xl \x62order \x62order-white/\x325 \x62g-white/\x310 px-6"}>
                    <img className="h-14 w-auto object-contain" style={{ color: "transparent" }} alt="Technology and training partner logo" loading="lazy" width="180" height="70" decoding="async" src="/site-assets/dbdebd853991bbbe.png" />
                  </div>
                  <div className={"flex h-24 w-56 shrink-0 items-center justify-center rounded-xl \x62order \x62order-white/\x325 \x62g-white/\x310 px-6"}>
                    <img className="h-14 w-auto object-contain" style={{ color: "transparent" }} alt="Technology and training partner logo" loading="lazy" width="180" height="70" decoding="async" src="/site-assets/21900c29fdb2424b.png" />
                  </div>
                  <div className={"flex h-24 w-56 shrink-0 items-center justify-center rounded-xl \x62order \x62order-white/\x325 \x62g-white/\x310 px-6"}>
                    <img className="h-14 w-auto object-contain" style={{ color: "transparent" }} alt="Technology and training partner logo" loading="lazy" width="180" height="70" decoding="async" src="/site-assets/2f453f2bc7a1a844.png" />
                  </div>
                  <div className={"flex h-24 w-56 shrink-0 items-center justify-center rounded-xl \x62order \x62order-white/\x325 \x62g-white/\x310 px-6"}>
                    <img className="h-14 w-auto object-contain" style={{ color: "transparent" }} alt="Technology and training partner logo" loading="lazy" width="180" height="70" decoding="async" src="/site-assets/9ebe8f4df67bf427.png" />
                  </div>
                  <div className={"flex h-24 w-56 shrink-0 items-center justify-center rounded-xl \x62order \x62order-white/\x325 \x62g-white/\x310 px-6"}>
                    <img className="h-14 w-auto object-contain" style={{ color: "transparent" }} alt="Technology and training partner logo" loading="lazy" width="180" height="70" decoding="async" src="/site-assets/ed8941f58612ee20.png" />
                  </div>
                  <div className={"flex h-24 w-56 shrink-0 items-center justify-center rounded-xl \x62order \x62order-white/\x325 \x62g-white/\x310 px-6"}>
                    <img className="h-14 w-auto object-contain" style={{ color: "transparent" }} alt="Technology and training partner logo" loading="lazy" width="180" height="70" decoding="async" src="/site-assets/92791e4f8486da97.png" />
                  </div>
                  <div className={"flex h-24 w-56 shrink-0 items-center justify-center rounded-xl \x62order \x62order-white/\x325 \x62g-white/\x310 px-6"}>
                    <img className="h-14 w-auto object-contain" style={{ color: "transparent" }} alt="Technology and training partner logo" loading="lazy" width="180" height="70" decoding="async" src="/site-assets/dd3dc14a0d0741b7.png" />
                  </div>
                  <div className={"flex h-24 w-56 shrink-0 items-center justify-center rounded-xl \x62order \x62order-white/\x325 \x62g-white/\x310 px-6"}>
                    <img className="h-14 w-auto object-contain" style={{ color: "transparent" }} alt="Technology and training partner logo" loading="lazy" width="180" height="70" decoding="async" src="/site-assets/4b403b0ec7cbbca5.png" />
                  </div>
                  <div className={"flex h-24 w-56 shrink-0 items-center justify-center rounded-xl \x62order \x62order-white/\x325 \x62g-white/\x310 px-6"}>
                    <img className="h-14 w-auto object-contain" style={{ color: "transparent" }} alt="Technology and training partner logo" loading="lazy" width="180" height="70" decoding="async" src="/site-assets/dbdebd853991bbbe.png" />
                  </div>
                  <div className={"flex h-24 w-56 shrink-0 items-center justify-center rounded-xl \x62order \x62order-white/\x325 \x62g-white/\x310 px-6"}>
                    <img className="h-14 w-auto object-contain" style={{ color: "transparent" }} alt="Technology and training partner logo" loading="lazy" width="180" height="70" decoding="async" src="/site-assets/21900c29fdb2424b.png" />
                  </div>
                  <div className={"flex h-24 w-56 shrink-0 items-center justify-center rounded-xl \x62order \x62order-white/\x325 \x62g-white/\x310 px-6"}>
                    <img className="h-14 w-auto object-contain" style={{ color: "transparent" }} alt="Technology and training partner logo" loading="lazy" width="180" height="70" decoding="async" src="/site-assets/2f453f2bc7a1a844.png" />
                  </div>
                  <div className={"flex h-24 w-56 shrink-0 items-center justify-center rounded-xl \x62order \x62order-white/\x325 \x62g-white/\x310 px-6"}>
                    <img className="h-14 w-auto object-contain" style={{ color: "transparent" }} alt="Technology and training partner logo" loading="lazy" width="180" height="70" decoding="async" src="/site-assets/9ebe8f4df67bf427.png" />
                  </div>
                  <div className={"flex h-24 w-56 shrink-0 items-center justify-center rounded-xl \x62order \x62order-white/\x325 \x62g-white/\x310 px-6"}>
                    <img className="h-14 w-auto object-contain" style={{ color: "transparent" }} alt="Technology and training partner logo" loading="lazy" width="180" height="70" decoding="async" src="/site-assets/ed8941f58612ee20.png" />
                  </div>
                  <div className={"flex h-24 w-56 shrink-0 items-center justify-center rounded-xl \x62order \x62order-white/\x325 \x62g-white/\x310 px-6"}>
                    <img className="h-14 w-auto object-contain" style={{ color: "transparent" }} alt="Technology and training partner logo" loading="lazy" width="180" height="70" decoding="async" src="/site-assets/92791e4f8486da97.png" />
                  </div>
                  <div className={"flex h-24 w-56 shrink-0 items-center justify-center rounded-xl \x62order \x62order-white/\x325 \x62g-white/\x310 px-6"}>
                    <img className="h-14 w-auto object-contain" style={{ color: "transparent" }} alt="Technology and training partner logo" loading="lazy" width="180" height="70" decoding="async" src="/site-assets/dd3dc14a0d0741b7.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12" id="services-general-non-destructive-testing-ndt">
              <h4 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">General Non-Destructive Testing (NDT)</h4>
              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/ndt-inspection-services">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="NDT Inspection Services service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/d01c105f74a04681.jpg" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">NDT Inspection Services</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Full-scope Non-Destructive Testing coverage tailored to your assets and regulations.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/ultrasonic-flaw-testing-c-scan">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="Ultrasonic Flaw Testing C-Scan service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/83c03dcbe08ea91c.webp" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Ultrasonic Flaw Testing C-Scan</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Detailed corrosion mapping and flaw visualisation using advanced ultrasonic C-scan imaging.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/ultrasonic-flaw-testing-b-scan">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="Ultrasonic Flaw Testing B-Scan service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/ba6ae51c367a75e8.webp" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Ultrasonic Flaw Testing B-Scan</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Cross-sectional ultrasonic imaging for defect characterisation, sizing, and localisation.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/utm-ultrasonic-thickness-measurement">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="UTM Ultrasonic Thickness Measurement service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/41a3bfb79cd58a97.jpg" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">UTM Ultrasonic Thickness Measurement</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Accurate non-destructive thickness measurements to monitor structural integrity and corrosion.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/visual-inspection">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="Visual Inspection service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/2ab211ade4dbf1b8.webp" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Visual Inspection</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Comprehensive visual assessments that identify visible defects, anomalies, and operational risks.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/magnetic-particle-testing">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="Magnetic Particle Testing service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/b653e40c79b065ab.webp" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Magnetic Particle Testing</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Surface flaw detection using powerful magnetic particle inspection methods.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/fluorescent-magnet-particle-testing">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="Fluorescent Magnet Particle Testing service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/8398cd8d7847647a.jpg" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Fluorescent Magnet Particle Testing</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Crack detection enhanced with fluorescent indicators and ultraviolet inspection.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/dye-penetrant-testing">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="Dye Penetrant Testing service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/8386e12a1505f9b1.webp" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Dye Penetrant Testing</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Critical PT inspections that reveal surface flaws and discontinuities for safer, more reliable asset performance.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/rt-radiographic-services">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="RT Radiographic Services service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/83c03dcbe08ea91c.webp" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">RT Radiographic Services</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">High-resolution radiographic imaging that uncovers hidden discontinuities without interrupting service.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/paint-coating-inspection">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt={"Paint & Coating Inspection service image"} loading="lazy" width="800" height="420" decoding="async" src="/site-assets/9dc9a215620aff07.webp" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Paint &amp; Coating Inspection</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Checking protective coating thickness and quality to extend asset life.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/gas-detection">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="Gas Detection service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/fbf0f329e6930e7f.jpg" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Gas Detection</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Comprehensive monitoring solutions that detect hazardous gases early and keep worksites compliant.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/pressure-testing">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="Pressure Testing service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/5e63ae84305d8b11.webp" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Pressure Testing</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Verify system strength and tightness through controlled pressure testing.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/surface-hardness-testing">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="Surface Hardness Testing service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/67b35b6bcf625212.jpg" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Surface Hardness Testing</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Measuring metal surface strength to validate fabrication quality and wear resistance.</p>
                  </article>
                </a>
              </div>
            </div>
            <div className="mt-12" id="services-advanced-ndt-specialised-technologies">
              <h4 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">Advanced NDT &amp; Specialised Technologies</h4>
              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/tank-calibration-services">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="Tank Calibration Services service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/8114b6f8fab6e6ea.webp" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Tank Calibration Services</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Accurate volume measurement and tank calibration across all storage configurations.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/phased-array-testing">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="Phased Array Testing service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/07ccb30a7ddd1b62.webp" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Phased Array Testing</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Advanced phased array ultrasonics for complex geometry and high-resolution flaw detection.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/3d-laser-scanning-services">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="3D Laser Scanning Services service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/45ef1429a96716ad.jpg" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">3D Laser Scanning Services</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">High-accuracy spatial data capture for asset management, design planning, and facility maintenance.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/thermal-camera-inspection">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="Thermal Camera Inspection service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/d870e12942d88b32.webp" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Thermal Camera Inspection</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Thermal imaging surveys that uncover temperature anomalies and emerging issues before they escalate.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/alternating-current-field-measurement">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="Alternating Current Field Measurement service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/5feca25ce23ecfd6.jpg" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Alternating Current Field Measurement</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Advanced electromagnetic inspection that detects and sizes surface cracks with exceptional accuracy.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/floormap-3d-mfl-scanning">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="Floormap 3D MFL Scanning service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/444e29d0545bf16b.webp" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Floormap 3D MFL Scanning</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">3D magnetic flux leakage scanning that pinpoints tank floor defects with precision.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/uav-inspection">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="UAV Inspection service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/906910f1878dcca0.jpg" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">UAV Inspection</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Aerial inspection using drone-based technology to access challenging environments.</p>
                  </article>
                </a>
              </div>
            </div>
            <div className="mt-12" id="services-engineering-assessments-certification">
              <h4 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">Engineering Assessments &amp; Certification</h4>
              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/api-570-piping-inspection-and-certification">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="API 570 Piping Inspection and Certification service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/a8c9ab514415f733.jpg" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">API 570 Piping Inspection and Certification</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Piping system inspection for code compliance.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/api-653-aboveground-storage-tank-inspection-and-certification">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="API 653 Aboveground Storage Tank Inspection and Certification service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/d1c442217169e4b1.webp" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">API 653 Aboveground Storage Tank Inspection and Certification</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Tank integrity inspections that deliver official API 653 certification and reporting.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/api-510-pressure-vessel-inspection">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="API 510 Pressure Vessel Inspection service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/8ad1d0c13c82415c.webp" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">API 510 Pressure Vessel Inspection</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Pressure vessel safety verification with detailed API 510 compliance documentation.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/positive-material-identification-testing">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="Positive Material Identification Testing service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/d740ec39dddba901.webp" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Positive Material Identification Testing</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Verify alloy composition quickly with positive material identification technology.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/api-579-fitness-for-service">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="API 579 Fitness for Service service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/c8b41fa51e115c05.webp" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">API 579 Fitness for Service</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">API 579-based integrity assessments that uncover defects, document risk, and guide repair or replacement decisions.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/api-580-risk-based-inspection">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="API 580 Risk Based Inspection service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/d01c105f74a04681.jpg" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">API 580 Risk Based Inspection</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Risk-based inspection strategies prioritising safety-critical assets and intervals.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/boiler-inspection-services">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="Boiler Inspection Services service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/b986ee4c07c8e983.webp" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Boiler Inspection Services</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Thorough inspections that keep boiler systems safe, efficient, and compliant.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/lifting-equipment-thorough-examination-and-certification">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="Lifting Equipment Thorough Examination and Certification service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/ec82681874d95430.webp" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Lifting Equipment Thorough Examination and Certification</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Safe lifting equipment checks paired with formal certification packages.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/sphere-tank-inspections">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="Sphere Tank Inspections service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/5ea019c7c7d6e6ec.webp" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Sphere Tank Inspections</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Inspection of spherical tanks with detailed structural and safety reporting.</p>
                  </article>
                </a>
              </div>
            </div>
            <div className="mt-12" id="services-engineering-fabrication">
              <h4 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">Engineering &amp; Fabrication</h4>
              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/detailed-engineering">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="Detailed Engineering service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/7d79d7bb8c8c607c.webp" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Detailed Engineering</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Comprehensive technical plans and documentation.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/procurement">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="Procurement service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/c6a7188f398e1649.webp" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Procurement</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Sourcing materials for project execution.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/fabrication">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="Fabrication service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/aca26f8ee616f1bd.jpg" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Fabrication</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Precision cutting, welding, and assembly services.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/construction-and-erection">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="Construction and Erection service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/16b33e299e3916e4.webp" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Construction and Erection</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Safe, code-compliant erection of steel structures, pipelines, and storage tanks.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/specialised-welding">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="Specialised Welding service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/46137fad5df982ec.webp" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Specialised Welding</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Certified TIG, MIG, SMAW, and SAW welding that safeguards structural integrity.</p>
                  </article>
                </a>
                <a className={"rounded-2xl \x62order \x62order-border \x62g-card p-4 md:p-5 transition-colors \x68over:\x62order-primary/\x340 \x68over:\x62g-card/\x390"} href="/services/surface-preparation-and-paint-works">
                  <article>
                    <div className={"mb-4 overflow-hidden rounded-xl \x62order \x62order-border \x62g-muted/\x320"}>
                      <img className="h-24 w-full object-cover" style={{ color: "transparent" }} alt="Surface Preparation and Paint Works service image" loading="lazy" width="800" height="420" decoding="async" src="/site-assets/9dc9a215620aff07.webp" />
                    </div>
                    <h4 className="text-base font-medium text-foreground">Surface Preparation and Paint Works</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Surface cleaning and industrial paint coating.</p>
                  </article>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionMURBANENGINEERINGLTDNDT() {
  return (
    <section className={"\x62g-background"} id="technology">
      <div className={"px-6 \x70y-fluid-lg text-center md:px-12 lg:px-20"}>
        <h2 className={"murban-engineering-wordmark \x74ext-fluid-4xl tracking-tight !text-black text-balance"}>MURBAN ENGINEERING LTD: NDT &amp; Asset Integrity Services</h2>
        <p className={"mx-auto mt-6 max-w-md \x74ext-fluid-sm text-muted-foreground"}>Technology</p>
      </div>
      <div className="grid grid-cols-1 gap-4 px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20">
        <div className="group">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <div className="relative h-full w-full">
              <img className={"object-cover \x67roup-hover:\x73cale-105 transition-all duration-700 ease-out opacity-100 \x73cale-100"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Service image 1" loading="lazy" decoding="async" src="/site-assets/0c0db1c78728d582.webp" />
            </div>
          </div>
        </div>
        <div className="group">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <div className="relative h-full w-full">
              <img className={"object-cover \x67roup-hover:\x73cale-105 transition-all duration-700 ease-out opacity-100 \x73cale-100"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Service image 2" loading="lazy" decoding="async" src="/site-assets/6a7d810ebf2652eb.webp" />
            </div>
          </div>
        </div>
        <div className="group">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <div className="relative h-full w-full">
              <img className={"object-cover \x67roup-hover:\x73cale-105 transition-all duration-700 ease-out opacity-100 \x73cale-100"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Service image 3" loading="lazy" decoding="async" src="/site-assets/79d7dd4b7b1782f1.webp" />
            </div>
          </div>
        </div>
        <div className="group">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <div className="relative h-full w-full">
              <img className={"object-cover \x67roup-hover:\x73cale-105 transition-all duration-700 ease-out opacity-100 \x73cale-100"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Service image 4" loading="lazy" decoding="async" src="/site-assets/0be5306a01d68b74.webp" />
            </div>
          </div>
        </div>
        <div className="group">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <div className="relative h-full w-full">
              <img className={"object-cover \x67roup-hover:\x73cale-105 transition-all duration-700 ease-out opacity-100 \x73cale-100"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Service image 5" loading="lazy" decoding="async" src="/site-assets/b2e846aabc2c195f.jpg" />
            </div>
          </div>
        </div>
        <div className="group">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <div className="relative h-full w-full">
              <img className={"object-cover \x67roup-hover:\x73cale-105 transition-all duration-700 ease-out opacity-100 \x73cale-100"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Service image 6" loading="lazy" decoding="async" src="/site-assets/0c0db1c78728d582.webp" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center px-6 pb-28 md:px-12 lg:px-20" />
    </section>
  );
}

function ImportedSectionIndustriesWeServe() {
  return (
    <section className={"relative \x62g-foreground"} id="industries">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          <div className="relative flex h-full w-full items-stretch justify-center" style={{ gap: "0px", padding: "0px" }}>
            <div className="flex flex-col will-change-transform" style={{ width: "0%", gap: "0px", transform: "translateX(-100%)", opacity: "0" }}>
              <div className="relative overflow-hidden will-change-transform" style={{ flex: "1 1 0%", borderRadius: "0px" }}>
                <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Tank inspection platform" loading="lazy" decoding="async" src="/site-assets/e2fda55345967ae6.webp" />
              </div>
              <div className="relative overflow-hidden will-change-transform" style={{ flex: "1 1 0%", borderRadius: "0px" }}>
                <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Industrial fire line piping" loading="lazy" decoding="async" src="/site-assets/4203ed916202988a.webp" />
              </div>
            </div>
            <div className="relative overflow-hidden will-change-transform" style={{ width: "100%", height: "100%", flex: "0 0 auto", borderRadius: "0px" }}>
              <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="MURBAN industrial storage installation" loading="lazy" decoding="async" src="/site-assets/79d7dd4b7b1782f1.webp" />
              <div className={"absolute inset-0 \x62g-foreground/\x340"} />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <h2 className="max-w-3xl text-5xl font-medium leading-tight tracking-tight text-white md:text-5xl lg:text-7xl">
                  <span className="inline-block" style={{ opacity: "1", filter: "blur(0px)", transition: "opacity 0.1s linear, filter 0.1s linear", marginRight: "0.3em" } as CSSProperties}>Industries</span>
                  <span className="inline-block" style={{ opacity: "1", filter: "blur(0px)", transition: "opacity 0.1s linear, filter 0.1s linear", marginRight: "0.3em" } as CSSProperties}>We<br /></span>
                  <span className="inline-block" style={{ opacity: "1", filter: "blur(0px)", transition: "opacity 0.1s linear, filter 0.1s linear", marginRight: "0px" } as CSSProperties}>Serve</span>
                </h2>
              </div>
            </div>
            <div className="flex flex-col will-change-transform" style={{ width: "0%", gap: "0px", transform: "translateX(100%)", opacity: "0" }}>
              <div className="relative overflow-hidden will-change-transform" style={{ flex: "1 1 0%", borderRadius: "0px" }}>
                <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Horizontal vessel installation" loading="lazy" decoding="async" src="/site-assets/6a7d810ebf2652eb.webp" />
              </div>
              <div className="relative overflow-hidden will-change-transform" style={{ flex: "1 1 0%", borderRadius: "0px" }}>
                <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Storage vessels and access stairways" loading="lazy" decoding="async" src="/site-assets/0be5306a01d68b74.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[200vh]" />
      <div className={"relative overflow-hidden \x62g-background px-6 \x70y-fluid-xl md:px-12 lg:px-20"}>
        <div className={"mx-auto max-w-6xl \x73pace-y-6"}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Industry Solutions</p>
          <p className="text-2xl font-semibold leading-snug sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="transition-colors duration-150" style={{ color: "rgb(228, 228, 231)" }}>Tailored{" "}</span>
            <span className="transition-colors duration-150" style={{ color: "rgb(228, 228, 231)" }}>inspection{" "}</span>
            <span className="transition-colors duration-150" style={{ color: "rgb(228, 228, 231)" }}>and{" "}</span>
            <span className="transition-colors duration-150" style={{ color: "rgb(228, 228, 231)" }}>integrity{" "}</span>
            <span className="transition-colors duration-150" style={{ color: "rgb(228, 228, 231)" }}>solutions{" "}</span>
            <span className="transition-colors duration-150" style={{ color: "rgb(228, 228, 231)" }}>for{" "}</span>
            <span className="transition-colors duration-150" style={{ color: "rgb(228, 228, 231)" }}>diverse{" "}</span>
            <span className="transition-colors duration-150" style={{ color: "rgb(228, 228, 231)" }}>industries{" "}</span>
            <span className="transition-colors duration-150" style={{ color: "rgb(228, 228, 231)" }}>across{" "}</span>
            <span className="transition-colors duration-150" style={{ color: "rgb(228, 228, 231)" }}>Africa</span>
          </p>
          <div className={"\x73pace-y-2 pt-6"}>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">Industries We Serve</h3>
            <p className="text-base text-muted-foreground md:text-lg">Delivering specialised expertise across multiple sectors</p>
          </div>
          <div className="flex flex-col gap-8 pt-4">
            <article className={"\x73croll-mt-28 overflow-hidden rounded-2xl \x62order \x62order-border \x62g-card p-5 text-card-foreground \x73hadow-sm md:p-6"} id="industry-oil-gas-industry">
              <div className={"grid gap-6 lg:grid-cols-[minmax(360px,42%)_minmax(0,1fr)] \x6cg:\x69tems-stretch xl:grid-cols-[minmax(440px,46%)_minmax(0,1fr)]"}>
                <div className={"relative h-52 overflow-hidden rounded-xl \x62order \x62order-border sm:h-64 lg:h-full lg:min-h-[420px] xl:min-h-[520px]"}>
                  <img className={"object-cover \x6fbject-center"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Oil and gas processing plant at sunrise" loading="lazy" decoding="async" src="/site-assets/e2a3249a546086f9.webp" />
                  <div className={"absolute inset-0 \x62g-gradient-to-t \x66rom-black/\x345 \x76ia-transparent \x74o-black/\x310"} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground md:text-2xl">Oil &amp; Gas Industry</h4>
                  <div className={"mt-4 \x73pace-y-2"}>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Assets Covered</p>
                    <p className="text-sm leading-relaxed md:text-base">Storage tanks, sphere tanks, pressure vessels, pipelines, marine terminals, FPSOs</p>
                  </div>
                  <div className={"mt-4 \x73pace-y-2"}>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Key Services</p>
                    <ul className={"\x73pace-y-1 text-sm leading-relaxed md:text-base"}>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>API 653 Storage Tank Inspection</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Sphere Tank Inspection</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>API 510 Pressure Vessel Inspection</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>API 570 Pipeline Inspection</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Tank Bottom MFL Corrosion Mapping</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Fitness for Service Analysis</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>UAV &amp; Thermal Surveys</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>3D Laser Scanning &amp; Tank Calibration</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Coating Inspection &amp; Corrosion Assessment</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Risk-Based Inspection &amp; RBI Plans</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Radiography &amp; Ultrasonic Testing</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>PMI Testing for imported fittings</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Post-fire and post-buckling assessments</span>
                      </li>
                    </ul>
                  </div>
                  <div className={"mt-4 \x73pace-y-2"}>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Why It Matters</p>
                    <p className="text-sm leading-relaxed md:text-base">At MURBAN ENGINEERING LTD, we offer industry-leading inspection and integrity solutions tailored to the critical demands of the oil and gas sector. Our services span upstream, midstream, and downstream operations, from pipeline and pressure vessel inspections to storage tank calibration and corrosion assessment. Using advanced techniques like Phased Array Ultrasonic Testing (PAUT), Magnetic Flux Leakage (MFL), and Risk-Based Inspection (RBI), we help oil and gas operators extend asset life, avoid unplanned outages, and meet the highest standards of safety and compliance.</p>
                  </div>
                </div>
              </div>
            </article>
            <article className={"\x73croll-mt-28 overflow-hidden rounded-2xl \x62order \x62order-border \x62g-card p-5 text-card-foreground \x73hadow-sm md:p-6"} id="industry-power-steam-generation">
              <div className={"grid gap-6 lg:grid-cols-[minmax(360px,42%)_minmax(0,1fr)] \x6cg:\x69tems-stretch xl:grid-cols-[minmax(440px,46%)_minmax(0,1fr)]"}>
                <div className={"relative h-52 overflow-hidden rounded-xl \x62order \x62order-border sm:h-64 lg:h-full lg:min-h-[420px] xl:min-h-[520px]"}>
                  <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Power and steam facility with industrial stacks" loading="lazy" decoding="async" src="/site-assets/9aba3d09a6d0e926.webp" />
                  <div className={"absolute inset-0 \x62g-gradient-to-t \x66rom-black/\x345 \x76ia-transparent \x74o-black/\x310"} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground md:text-2xl">Power &amp; Steam Generation</h4>
                  <div className={"mt-4 \x73pace-y-2"}>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Assets Covered</p>
                    <p className="text-sm leading-relaxed md:text-base">Boilers, heat exchangers, pressure vessels, steam lines</p>
                  </div>
                  <div className={"mt-4 \x73pace-y-2"}>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Key Services</p>
                    <ul className={"\x73pace-y-1 text-sm leading-relaxed md:text-base"}>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Boiler Internal &amp; External Inspections</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Surface Hardness &amp; Weld Flaw Detection</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Pressure Testing of High-Pressure Systems</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>PMI &amp; Material Traceability</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Thermal Surveys for Insulation Performance</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>QA/QC during plant maintenance</span>
                      </li>
                    </ul>
                  </div>
                  <div className={"mt-4 \x73pace-y-2"}>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Why It Matters</p>
                    <p className="text-sm leading-relaxed md:text-base">The power industry relies on the continuous and safe operation of high-pressure systems. Our inspection and testing services are designed to support steam generation plants, turbines, and high-energy piping. We conduct in-depth assessments of boilers, heat exchangers, and pressure vessels using ultrasonic flaw detection, surface hardness testing, and pressure validation. These services ensure the structural integrity, operational efficiency, and safety of critical components under extreme conditions.</p>
                  </div>
                </div>
              </div>
            </article>
            <article className={"\x73croll-mt-28 overflow-hidden rounded-2xl \x62order \x62order-border \x62g-card p-5 text-card-foreground \x73hadow-sm md:p-6"} id="industry-storage-logistics-terminals">
              <div className={"grid gap-6 lg:grid-cols-[minmax(360px,42%)_minmax(0,1fr)] \x6cg:\x69tems-stretch xl:grid-cols-[minmax(440px,46%)_minmax(0,1fr)]"}>
                <div className={"relative h-52 overflow-hidden rounded-xl \x62order \x62order-border sm:h-64 lg:h-full lg:min-h-[420px] xl:min-h-[520px]"}>
                  <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Storage and logistics terminal with bulk tanks" loading="lazy" decoding="async" src="/site-assets/4dcca7a99f5947a3.webp" />
                  <div className={"absolute inset-0 \x62g-gradient-to-t \x66rom-black/\x345 \x76ia-transparent \x74o-black/\x310"} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground md:text-2xl">Storage &amp; Logistics Terminals</h4>
                  <div className={"mt-4 \x73pace-y-2"}>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Assets Covered</p>
                    <p className="text-sm leading-relaxed md:text-base">Bulk liquid tanks, LPG spheres, loading lines, depot infrastructure</p>
                  </div>
                  <div className={"mt-4 \x73pace-y-2"}>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Key Services</p>
                    <ul className={"\x73pace-y-1 text-sm leading-relaxed md:text-base"}>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Storage Tank Calibration</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Volumetric Analysis with 3D Laser Scanning</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>API 653 Inspections</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>API 510 Inspections</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>API 570 Inspections</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Paint and Coating Integrity Testing</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Third party verification and testing</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Engineering drawings: as-built data</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Foundation and settlement monitoring</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>NDT Testing</span>
                      </li>
                    </ul>
                  </div>
                  <div className={"mt-4 \x73pace-y-2"}>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Why It Matters</p>
                    <p className="text-sm leading-relaxed md:text-base">Bulk liquid and fuel terminals are complex facilities that demand accurate calibration, corrosion monitoring, and tank integrity assurance. MURBAN ENGINEERING LTD provides comprehensive solutions for tank farms, depots, and LPG storage facilities using technologies like 3D laser scanning, UAV-based inspections, and API 653-compliant tank assessments. Our goal is to help operators maintain regulatory compliance, safeguard stored products, and optimise infrastructure performance across the entire terminal lifecycle.</p>
                  </div>
                </div>
              </div>
            </article>
            <article className={"\x73croll-mt-28 overflow-hidden rounded-2xl \x62order \x62order-border \x62g-card p-5 text-card-foreground \x73hadow-sm md:p-6"} id="industry-food-processing-industry">
              <div className={"grid gap-6 lg:grid-cols-[minmax(360px,42%)_minmax(0,1fr)] \x6cg:\x69tems-stretch xl:grid-cols-[minmax(440px,46%)_minmax(0,1fr)]"}>
                <div className={"relative h-52 overflow-hidden rounded-xl \x62order \x62order-border sm:h-64 lg:h-full lg:min-h-[420px] xl:min-h-[520px]"}>
                  <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Food processing production facility" loading="lazy" decoding="async" src="/site-assets/5d82350593b68afa.webp" />
                  <div className={"absolute inset-0 \x62g-gradient-to-t \x66rom-black/\x345 \x76ia-transparent \x74o-black/\x310"} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground md:text-2xl">Food Processing Industry</h4>
                  <div className={"mt-4 \x73pace-y-2"}>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Assets Covered</p>
                    <p className="text-sm leading-relaxed md:text-base">Stainless tanks, pressure vessels, food-grade pipelines, steam boilers</p>
                  </div>
                  <div className={"mt-4 \x73pace-y-2"}>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Key Services</p>
                    <ul className={"\x73pace-y-1 text-sm leading-relaxed md:text-base"}>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>UT Thickness Surveys for Corrosion in Clean Systems</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Surface Hardness Testing for Safety Compliance</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>3D Tank Calibration for Volume Control</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Radiographic Testing to check welds on hygiene-critical vessels</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>QA/QC for stainless welding and fittings</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Non-contaminating NDT procedures (e.g., non-toxic DPI)</span>
                      </li>
                    </ul>
                  </div>
                  <div className={"mt-4 \x73pace-y-2"}>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Why It Matters</p>
                    <p className="text-sm leading-relaxed md:text-base">In food and beverage processing, cleanliness, accuracy, and structural integrity are non-negotiable. MURBAN ENGINEERING LTD supports this industry with non-contaminating inspection techniques, volumetric tank calibration, and material identification suited for food-grade environments. Whether it's ensuring weld quality in stainless vessels or verifying tank geometry for accurate mixing and batching, we bring precision, hygiene-compliant methods, and peace of mind to food manufacturers.</p>
                  </div>
                </div>
              </div>
            </article>
            <article className={"\x73croll-mt-28 overflow-hidden rounded-2xl \x62order \x62order-border \x62g-card p-5 text-card-foreground \x73hadow-sm md:p-6"} id="industry-renewable-energy-geothermal">
              <div className={"grid gap-6 lg:grid-cols-[minmax(360px,42%)_minmax(0,1fr)] \x6cg:\x69tems-stretch xl:grid-cols-[minmax(440px,46%)_minmax(0,1fr)]"}>
                <div className={"relative h-52 overflow-hidden rounded-xl \x62order \x62order-border sm:h-64 lg:h-full lg:min-h-[420px] xl:min-h-[520px]"}>
                  <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Renewable energy and geothermal infrastructure" loading="lazy" decoding="async" src="/site-assets/dd83e7115bbb39a5.webp" />
                  <div className={"absolute inset-0 \x62g-gradient-to-t \x66rom-black/\x345 \x76ia-transparent \x74o-black/\x310"} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground md:text-2xl">Renewable Energy &amp; Geothermal</h4>
                  <div className={"mt-4 \x73pace-y-2"}>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Assets Covered</p>
                    <p className="text-sm leading-relaxed md:text-base">Geothermal drilling rigs, solar plants, wind support structures</p>
                  </div>
                  <div className={"mt-4 \x73pace-y-2"}>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Key Services</p>
                    <ul className={"\x73pace-y-1 text-sm leading-relaxed md:text-base"}>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>NDT on Cementing and Casing Equipment</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>QA/QC Inspections during rig fabrication and commissioning</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>UT and MPI for welds and frames</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>UAV Thermal Surveys for solar arrays</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Pressure Testing and PMI of drilling components</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Structural laser scanning for alignment and elevation</span>
                      </li>
                    </ul>
                  </div>
                  <div className={"mt-4 \x73pace-y-2"}>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Why It Matters</p>
                    <p className="text-sm leading-relaxed md:text-base">The renewable energy sector is expanding rapidly, and so is the need for safe, reliable, and long-lasting infrastructure. At MURBAN ENGINEERING LTD, we offer targeted inspection services for geothermal rigs, solar installations, and wind structures. From flaw detection in rig welds to thermal imaging of solar panels and structural surveys using UAVs and laser scanning, we ensure your green energy systems are safe, efficient, and compliant with modern engineering codes.</p>
                  </div>
                </div>
              </div>
            </article>
            <article className={"\x73croll-mt-28 overflow-hidden rounded-2xl \x62order \x62order-border \x62g-card p-5 text-card-foreground \x73hadow-sm md:p-6"} id="industry-rail-industry">
              <div className={"grid gap-6 lg:grid-cols-[minmax(360px,42%)_minmax(0,1fr)] \x6cg:\x69tems-stretch xl:grid-cols-[minmax(440px,46%)_minmax(0,1fr)]"}>
                <div className={"relative h-52 overflow-hidden rounded-xl \x62order \x62order-border sm:h-64 lg:h-full lg:min-h-[420px] xl:min-h-[520px]"}>
                  <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Rail industry yard and wagons" loading="lazy" decoding="async" src="/site-assets/ce88e10ac265caf0.webp" />
                  <div className={"absolute inset-0 \x62g-gradient-to-t \x66rom-black/\x345 \x76ia-transparent \x74o-black/\x310"} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground md:text-2xl">Rail Industry</h4>
                  <div className={"mt-4 \x73pace-y-2"}>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Assets Covered</p>
                    <p className="text-sm leading-relaxed md:text-base">Rail wagons, bogies, bridges, storage depots, fuel tanks</p>
                  </div>
                  <div className={"mt-4 \x73pace-y-2"}>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Key Services</p>
                    <ul className={"\x73pace-y-1 text-sm leading-relaxed md:text-base"}>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>UT and RT for railcar tanks and weld seams</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>ACFM Inspection for wheels and axles</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Surface Hardness for load-bearing components</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Paint, Coating &amp; Corrosion Inspection for rolling stock</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Lifting Equipment Certification for maintenance depots</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Tank Calibration for fuel and chemical wagons</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>3D Scanning of structural members in railway bridges</span>
                      </li>
                    </ul>
                  </div>
                  <div className={"mt-4 \x73pace-y-2"}>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Why It Matters</p>
                    <p className="text-sm leading-relaxed md:text-base">Railway infrastructure must meet the demands of heavy loads, constant vibration, and dynamic stresses. MURBAN ENGINEERING LTD provides specialised inspection and certification services for railcars, bridges, depots, and fuel wagons. Our techniques, ranging from ultrasonic and radiographic testing to tank calibration and corrosion inspection, help operators ensure safety, prevent failures, and maintain smooth operations across the rail network.</p>
                  </div>
                </div>
              </div>
            </article>
            <article className={"\x73croll-mt-28 overflow-hidden rounded-2xl \x62order \x62order-border \x62g-card p-5 text-card-foreground \x73hadow-sm md:p-6"} id="industry-shipping-marine-industry">
              <div className={"grid gap-6 lg:grid-cols-[minmax(360px,42%)_minmax(0,1fr)] \x6cg:\x69tems-stretch xl:grid-cols-[minmax(440px,46%)_minmax(0,1fr)]"}>
                <div className={"relative h-52 overflow-hidden rounded-xl \x62order \x62order-border sm:h-64 lg:h-full lg:min-h-[420px] xl:min-h-[520px]"}>
                  <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Marine and shipping terminal with industrial piping" loading="lazy" decoding="async" src="/site-assets/911ea22c827eb9ce.webp" />
                  <div className={"absolute inset-0 \x62g-gradient-to-t \x66rom-black/\x345 \x76ia-transparent \x74o-black/\x310"} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground md:text-2xl">Shipping &amp; Marine Industry</h4>
                  <div className={"mt-4 \x73pace-y-2"}>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Assets Covered</p>
                    <p className="text-sm leading-relaxed md:text-base">Cargo tanks, ballast tanks, marine pipelines, ship hulls, offshore loading arms, vessel pressure systems, tankers, offshore platforms</p>
                  </div>
                  <div className={"mt-4 \x73pace-y-2"}>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Key Services</p>
                    <ul className={"\x73pace-y-1 text-sm leading-relaxed md:text-base"}>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Ultrasonic Thickness Measurement (UTM) of hull plating and tanks</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Visual Inspection of cargo tanks, hatches, and decks</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Magnetic Particle &amp; Dye Penetrant Testing of weld seams and load points</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Phased Array Ultrasonic Testing (PAUT) for deck and hull integrity</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>3D Laser Scanning for tank geometry and deck mapping</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Internal UAV Inspection for difficult-to-access compartments</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Surface Hardness Testing on load-bearing components</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>PMI Testing on imported or unknown marine-grade alloys</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Thermal Imaging for hot spot detection in engines and exhausts</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Paint &amp; Coating Assessment in ballast and cargo tanks</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Pressure Testing of marine pipelines and fluid systems</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Lifting gear and lifesaving equipment inspection support</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground" aria-hidden="true">•</span>
                        <span>Third-party inspection support to class societies and IACS member surveyors</span>
                      </li>
                    </ul>
                  </div>
                  <div className={"mt-4 \x73pace-y-2"}>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Why It Matters</p>
                    <p className="text-sm leading-relaxed md:text-base">Marine environments expose vessels and offshore structures to accelerated wear from corrosion, mechanical loading, and extreme conditions. At MURBAN ENGINEERING LTD, we provide specialised marine inspection services that enhance safety, support class and regulatory compliance workflows, and contribute to the longevity of your marine assets. Whether for in-service vessels, dockside inspections, or offshore operations, our NDT and engineering capabilities help mitigate risk, reduce repair costs, and maintain operational readiness at sea.</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSection2() {
  return (
    <section className={"relative \x62g-background"} style={{ height: "5074px" }} id="our-projects" data-site-import-responsive="990">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full items-center">
          <div className="flex gap-6 px-6 [backface-visibility:hidden] [perspective:1000px] [touch-action:pan-y]" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
            <div className={"relative h-[70vh] w-[85vw] flex-shrink-0 overflow-hidden rounded-2xl \x62order \x62order-primary/\x320 \x62g-foreground/\x310 md:w-[60vw] lg:w-[45vw]"} style={{ transform: "translateZ(0px)" }}>
              <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Industrial plant view" loading="eager" decoding="async" src="/site-assets/0c0db1c78728d582.webp" />
            </div>
            <div className={"relative h-[70vh] w-[85vw] flex-shrink-0 overflow-hidden rounded-2xl \x62order \x62order-primary/\x320 \x62g-foreground/\x310 md:w-[60vw] lg:w-[45vw]"} style={{ transform: "translateZ(0px)" }}>
              <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Industrial piping systems" loading="eager" decoding="async" src="/site-assets/4203ed916202988a.webp" />
            </div>
            <div className={"relative h-[70vh] w-[85vw] flex-shrink-0 overflow-hidden rounded-2xl \x62order \x62order-primary/\x320 \x62g-foreground/\x310 md:w-[60vw] lg:w-[45vw]"} style={{ transform: "translateZ(0px)" }}>
              <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Refinery operations" loading="lazy" decoding="async" src="/site-assets/6a7d810ebf2652eb.webp" />
            </div>
            <div className={"relative h-[70vh] w-[85vw] flex-shrink-0 overflow-hidden rounded-2xl \x62order \x62order-primary/\x320 \x62g-foreground/\x310 md:w-[60vw] lg:w-[45vw]"} style={{ transform: "translateZ(0px)" }}>
              <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Industrial silos complex" loading="lazy" decoding="async" src="/site-assets/0be5306a01d68b74.webp" />
            </div>
            <div className={"relative h-[70vh] w-[85vw] flex-shrink-0 overflow-hidden rounded-2xl \x62order \x62order-primary/\x320 \x62g-foreground/\x310 md:w-[60vw] lg:w-[45vw]"} style={{ transform: "translateZ(0px)" }}>
              <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Modern industrial facility" loading="lazy" decoding="async" src="/site-assets/79d7dd4b7b1782f1.webp" />
            </div>
            <div className={"relative h-[70vh] w-[85vw] flex-shrink-0 overflow-hidden rounded-2xl \x62order \x62order-primary/\x320 \x62g-foreground/\x310 md:w-[60vw] lg:w-[45vw]"} style={{ transform: "translateZ(0px)" }}>
              <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Modern factory building" loading="lazy" decoding="async" src="/site-assets/1b2757c18be922a7.jpg" />
            </div>
            <div className={"relative h-[70vh] w-[85vw] flex-shrink-0 overflow-hidden rounded-2xl \x62order \x62order-primary/\x320 \x62g-foreground/\x310 md:w-[60vw] lg:w-[45vw]"} style={{ transform: "translateZ(0px)" }}>
              <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Pipeline construction work" loading="lazy" decoding="async" src="/site-assets/b2e846aabc2c195f.jpg" />
            </div>
            <div className={"relative h-[70vh] w-[85vw] flex-shrink-0 overflow-hidden rounded-2xl \x62order \x62order-primary/\x320 \x62g-foreground/\x310 md:w-[60vw] lg:w-[45vw]"} style={{ transform: "translateZ(0px)" }}>
              <img className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Storage tank farm" loading="lazy" decoding="async" src="/site-assets/e2fda55345967ae6.webp" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionFeaturedProjectCaseStudies() {
  return (
    <section className={"\x62g-background pb-24"}>
      <div className={"px-6 \x70y-fluid-md md:px-12 lg:px-20"}>
        <h2 className={"\x74ext-fluid-3xl font-medium tracking-tight text-foreground text-balance"}>Featured Project Case Studies</h2>
        <p className="mt-4 max-w-3xl text-base text-muted-foreground md:text-lg">A selection of active project evidence across tank inspection, fabrication assurance, and pipeline integrity programs.</p>
      </div>
      <div className="grid gap-8 px-6 md:grid-cols-2 md:px-12 lg:grid-cols-3 lg:px-20">
        <article className={"overflow-hidden rounded-2xl \x62order \x62order-primary/\x315 \x62g-card"}>
          <div className={"relative aspect-[16/10] \x62g-secondary"}>
            <div className="relative h-full w-full">
              <img className={"object-cover transition-all duration-700 ease-out opacity-100 \x73cale-100"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Thika Power Plant Integrity Program" loading="lazy" decoding="async" src="/site-assets/0be5306a01d68b74.webp" />
            </div>
          </div>
          <div className={"\x73pace-y-3 p-5"}>
            <h3 className="text-lg font-semibold text-foreground">Thika Power Plant Integrity Program</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">Client: regional independent power producer. Scope: phased NDT and corrosion mapping across pressure systems and rotating auxiliaries during planned outages. Standards applied: ASME Section V, API 510, and site QA/QC procedures. Outcome: zero start-up delays and a risk-ranked repair plan that reduced unplanned downtime.</p>
          </div>
        </article>
        <article className={"overflow-hidden rounded-2xl \x62order \x62order-primary/\x315 \x62g-card"}>
          <div className={"relative aspect-[16/10] \x62g-secondary"}>
            <div className="relative h-full w-full">
              <img className={"object-cover transition-all duration-700 ease-out opacity-100 \x73cale-100"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="VTTI Mombasa Terminal Assessment" loading="lazy" decoding="async" src="/site-assets/e2fda55345967ae6.webp" />
            </div>
          </div>
          <div className={"\x73pace-y-3 p-5"}>
            <h3 className="text-lg font-semibold text-foreground">VTTI Mombasa Terminal Assessment</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">Client: bulk liquid storage terminal operator. Scope: aboveground tank floor scanning, shell UT, and fitness-for-service evaluations for continued operation. Standards applied: API 653, API 650, and RBI documentation requirements. Outcome: inspection evidence supported targeted maintenance and extended safe service intervals.</p>
          </div>
        </article>
        <article className={"overflow-hidden rounded-2xl \x62order \x62order-primary/\x315 \x62g-card"}>
          <div className={"relative aspect-[16/10] \x62g-secondary"}>
            <div className="relative h-full w-full">
              <img className={"object-cover transition-all duration-700 ease-out opacity-100 \x73cale-100"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Rubis Djibouti Pipeline Verification" loading="lazy" decoding="async" src="/site-assets/4203ed916202988a.webp" />
            </div>
          </div>
          <div className={"\x73pace-y-3 p-5"}>
            <h3 className="text-lg font-semibold text-foreground">Rubis Djibouti Pipeline Verification</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">Client: downstream fuel infrastructure company. Scope: weld quality verification, coating condition checks, and right-of-way integrity observations along transfer lines. Standards applied: ASME B31.4, ISO 9712 competency controls, and client HSE protocols. Outcome: commissioning handover was completed with all critical punch-list items closed.</p>
          </div>
        </article>
        <article className={"overflow-hidden rounded-2xl \x62order \x62order-primary/\x315 \x62g-card"}>
          <div className={"relative aspect-[16/10] \x62g-secondary"}>
            <div className="relative h-full w-full">
              <img className={"object-cover transition-all duration-700 ease-out opacity-100 \x73cale-100"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Total Zimbabwe HAFS Reliability Works" loading="lazy" decoding="async" src="/site-assets/0c0db1c78728d582.webp" />
            </div>
          </div>
          <div className={"\x73pace-y-3 p-5"}>
            <h3 className="text-lg font-semibold text-foreground">Total Zimbabwe HAFS Reliability Works</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">Client: aviation fueling systems operator. Scope: hydrant and dispenser line integrity checks, valve station NDT, and operational readiness validation. Standards applied: EI/JIG guidance, API 570 principles, and statutory compliance checklists. Outcome: the facility cleared audit requirements and resumed full-capacity service.</p>
          </div>
        </article>
        <article className={"overflow-hidden rounded-2xl \x62order \x62order-primary/\x315 \x62g-card"}>
          <div className={"relative aspect-[16/10] \x62g-secondary"}>
            <div className="relative h-full w-full">
              <img className={"object-cover transition-all duration-700 ease-out opacity-100 \x73cale-100"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt={"KR Tank Cleaning & Recommissioning"} loading="lazy" decoding="async" src="/site-assets/79d7dd4b7b1782f1.webp" />
            </div>
          </div>
          <div className={"\x73pace-y-3 p-5"}>
            <h3 className="text-lg font-semibold text-foreground">KR Tank Cleaning &amp; Recommissioning</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">Client: petroleum storage and distribution business. Scope: confined-space tank cleaning oversight, internal visual inspection, and wall-loss trending for recommissioning decisions. Standards applied: API 653, OSHA-aligned confined-space controls, and permit-to-work system rules. Outcome: tanks returned to service on schedule with documented integrity baselines.</p>
          </div>
        </article>
        <article className={"overflow-hidden rounded-2xl \x62order \x62order-primary/\x315 \x62g-card"}>
          <div className={"relative aspect-[16/10] \x62g-secondary"}>
            <div className="relative h-full w-full">
              <img className={"object-cover transition-all duration-700 ease-out opacity-100 \x73cale-100"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="OLA Energy Pipeline Condition Survey" loading="lazy" decoding="async" src="/site-assets/b2e846aabc2c195f.jpg" />
            </div>
          </div>
          <div className={"\x73pace-y-3 p-5"}>
            <h3 className="text-lg font-semibold text-foreground">OLA Energy Pipeline Condition Survey</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">Client: regional fuel marketing company. Scope: selective radiography, UT thickness screening, and support-stress review on transfer and loading pipelines. Standards applied: ASME B31.3, API 570, and project-specific ITP checkpoints. Outcome: priority repairs were executed early, preventing leak-related shutdown risk.</p>
          </div>
        </article>
      </div>
    </section>
  );
}

function ImportedSectionContactUs() {
  return (
    <section className={"min-h-screen \x62g-[#\x3213164] px-6 py-12 md:px-12 md:py-16 lg:px-20"}>
      <div className={"mx-auto grid max-w-7xl \x73croll-mt-24 overflow-hidden rounded-2xl \x62order \x62order-white/\x310 \x62g-[#\x3213164] \x73hadow-2xl lg:grid-cols-[1.2fr_0.8fr]"} id="contact-us">
        <div className="relative min-h-[360px] p-8 md:min-h-[520px] md:p-12" style={{ backgroundImage: "linear-gradient(135deg, rgba(33, 49, 100, 0.78), rgba(24, 33, 66, 0.92)), url(\"data:,\")", backgroundSize: "cover", backgroundPosition: "center center" } as CSSProperties}>
          <div className="flex h-full flex-col justify-between">
            <div>
              <span className={"inline-flex rounded-full \x62order \x62order-white/\x330 px-4 py-2 text-xs uppercase tracking-[0.2em] \x74ext-white/\x380"}>Contact MURBAN ENGINEERING LTD</span>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">Contact us</h2>
            </div>
            <div className="mt-8">
              <p className={"text-[11px] uppercase tracking-[0.24em] \x74ext-white/\x365"}>Our Office Locations</p>
              <div className={"mt-4 grid gap-6 text-[12px] leading-relaxed \x74ext-white/\x390 sm:grid-cols-2"}>
                <div>
                  <p className="text-sm font-semibold text-white">Nairobi</p>
                  <p className={"mt-1 text-[12px] font-medium \x74ext-white/\x395"}>MURBAN ENGINEERING LTD</p>
                  <p className={"mt-2 \x73pace-y-0.\x35 text-[11px] leading-relaxed \x74ext-white/\x390"}>
                    <span className="block">POSTAL ADDRESS</span>
                    <span className="block">P.O. BOX 142-00502 Nairobi Karen</span>
                    <span className="block">OFFICE</span>
                    <span className="block">Embakasi, Old North Airport Rd</span>
                    <span className="block">Next to Naivas Embakasi</span>
                    <span className="block">Tel: +254203673821</span>
                    <span className="block">Mob: +254703041821</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Mombasa</p>
                  <p className={"mt-1 text-[12px] font-medium \x74ext-white/\x395"}>MURBAN ENGINEERING LTD</p>
                  <p className={"mt-2 \x73pace-y-0.\x35 text-[11px] leading-relaxed \x74ext-white/\x390"}>
                    <span className="block">Off Airport Road, Port Reitz</span>
                    <span className="block">P. O. Box 99215, 80107</span>
                    <span className="block">Mombasa, Kenya</span>
                    <span className="block">Tel: +254202650618</span>
                    <span className="block">Mob: +254724966694</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 md:p-10">
          <p className={"text-xs uppercase tracking-[0.24em] \x74ext-[#\x3213164]/\x370"}>Feedback form</p>
          <form className={"mt-8 \x73pace-y-7"}>
            <label className={"block text-sm \x74ext-[#\x3213164]"}>
              <span>Name</span>
              <input className={"mt-3 w-full \x62order-0 \x62order-b \x62order-[#\x3213164]/\x330 px-0 pb-2 text-sm \x74ext-[#\x3213164] \x6futline-none \x70laceholder:\x74ext-[#\x3213164]/\x340 \x66ocus:\x62order-[#\x4160D0F] \x66ocus:\x72ing-0"} type="text" />
            </label>
            <label className={"block text-sm \x74ext-[#\x3213164]"}>
              <span>E-mail</span>
              <input className={"mt-3 w-full \x62order-0 \x62order-b \x62order-[#\x3213164]/\x330 px-0 pb-2 text-sm \x74ext-[#\x3213164] \x6futline-none \x70laceholder:\x74ext-[#\x3213164]/\x340 \x66ocus:\x62order-[#\x4160D0F] \x66ocus:\x72ing-0"} type="email" />
            </label>
            <label className={"block text-sm \x74ext-[#\x3213164]"}>
              <span>Phone</span>
              <input className={"mt-3 w-full \x62order-0 \x62order-b \x62order-[#\x3213164]/\x330 px-0 pb-2 text-sm \x74ext-[#\x3213164] \x6futline-none \x70laceholder:\x74ext-[#\x3213164]/\x340 \x66ocus:\x62order-[#\x4160D0F] \x66ocus:\x72ing-0"} type="tel" />
            </label>
            <label className={"block text-sm \x74ext-[#\x3213164]"}>
              <span>Message</span>
              <input className={"mt-3 w-full \x62order-0 \x62order-b \x62order-[#\x3213164]/\x330 px-0 pb-2 text-sm \x74ext-[#\x3213164] \x6futline-none \x70laceholder:\x74ext-[#\x3213164]/\x340 \x66ocus:\x62order-[#\x4160D0F] \x66ocus:\x72ing-0"} type="text" />
            </label>
            <div className="flex flex-wrap items-center justify-end gap-4 pt-2">
              <a className={"inline-flex items-center rounded-md \x62g-[#\x4160D0F] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors \x68over:\x62g-[#\x38f0b0d]"} href="mailto:info@murban-eng.com">Send us a message</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ImportedFooterMURBANENGINEERINGLTD() {
  const [onOpenPrivacy] = useState<() => void>(() => () => undefined);
  return (
    <footer className="bg-neutral-200">
      <div className="px-6 py-12 md:px-12 md:py-14 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.7fr_0.7fr_0.7fr]">
          <div>
            <h2 className="murban-engineering-wordmark text-2xl tracking-tight !text-black md:text-3xl">MURBAN ENGINEERING LTD</h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-black md:mt-8 md:text-base">Our operations are split into two divisions, MURBAN Inspection Services and MURBAN ENGINEERING LTD Services. We pick the best talent from the industry and continually invest in their development through rigorous external and internal training so they stay ahead of industry trends.</p>
            <div className={"mt-8 \x73pace-y-5 text-sm text-black md:mt-10 md:text-base"}>
              <div>
                <h3 className={"text-lg font-semibold \x74ext-[#\x4160D0F] md:text-xl"}>Office Details</h3>
                <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <address className="not-italic leading-relaxed">
                    <p className="font-semibold">Nairobi</p>
                    <div className={"mt-1 \x74ext-black/\x380"}>
                      <span className="block">P.O. Box 142-00502 Nairobi Karen</span>
                      <span className="block">Embakasi, Old North Airport Rd</span>
                      <span className="block">Next to Naivas Embakasi</span>
                    </div>
                    <p className="mt-2"><span className="font-medium">Tel:</span> <a className={"\x68over:\x74ext-black/\x370"} href="tel:+254203673821">+254203673821</a></p>
                    <p><span className="font-medium">Mob:</span> <a className={"\x68over:\x74ext-black/\x370"} href="tel:+254703041821">+254703041821</a></p>
                  </address>
                  <address className="not-italic leading-relaxed">
                    <p className="font-semibold">Mombasa</p>
                    <div className={"mt-1 \x74ext-black/\x380"}>
                      <span className="block">Off Airport Road, Port Reitz</span>
                      <span className="block">P.O. Box 99215-80107</span>
                      <span className="block">Mombasa, Kenya</span>
                    </div>
                    <p className="mt-2"><span className="font-medium">Tel:</span> <a className={"\x68over:\x74ext-black/\x370"} href="tel:+254202650618">+254202650618</a></p>
                    <p><span className="font-medium">Mob:</span> <a className={"\x68over:\x74ext-black/\x370"} href="tel:+254724966694">+254724966694</a></p>
                  </address>
                </div>
              </div>
              <div className={"\x73pace-y-2 \x62order-t \x62order-black/\x310 pt-5 leading-relaxed"}>
                <p><span className="font-semibold">Inspection enquiries:</span> <a className={"underline \x75nderline-offset-4 transition-colors \x68over:\x74ext-black/\x370"} href="mailto:info@murban-eng.com">info@murban-eng.com</a></p>
              </div>
            </div>
            <div className="mt-10 md:mt-14">
              <h3 className={"text-2xl font-semibold \x74ext-[#\x4160D0F] md:text-3xl"}>Follow Us</h3>
              <div className="mt-5 flex items-center gap-4 md:mt-6">
                <a className={"inline-flex h-12 w-12 items-center justify-center rounded-full \x62order \x62order-rose-200 text-foreground transition-colors hover:bg-white md:h-14 md:w-14"} aria-label="LinkedIn" href="https://ke.linkedin.com/company/murban-engineering" rel="noopener noreferrer" target="_blank">
                  <svg className="h-5 w-5 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h4 className={"text-2xl font-semibold \x74ext-[#\x4160D0F] md:text-3xl"}>Company</h4>
            <ul className={"mt-6 \x73pace-y-4 md:mt-8 \x6dd:\x73pace-y-5"}>
              <li>
                <a className={"text-sm leading-snug text-black transition-colors \x68over:\x74ext-black/\x370 md:text-base"} href="/#home">Home</a>
              </li>
              <li>
                <a className={"text-sm leading-snug text-black transition-colors \x68over:\x74ext-black/\x370 md:text-base"} href="/#about">About Us</a>
              </li>
              <li>
                <a className={"text-sm leading-snug text-black transition-colors \x68over:\x74ext-black/\x370 md:text-base"} href="/#industries">Industry Solutions</a>
              </li>
              <li>
                <a className={"text-sm leading-snug text-black transition-colors \x68over:\x74ext-black/\x370 md:text-base"} href="/#our-projects">Our Projects</a>
              </li>
              <li>
                <a className={"text-sm leading-snug text-black transition-colors \x68over:\x74ext-black/\x370 md:text-base"} href="https://www.murchem.com/" rel="noopener noreferrer" target="_blank">Murchem</a>
              </li>
              <li>
                <a className={"text-sm leading-snug text-black transition-colors \x68over:\x74ext-black/\x370 md:text-base"} href="/#contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={"text-2xl font-semibold \x74ext-[#\x4160D0F] md:text-3xl"}>Services</h4>
            <ul className={"mt-6 \x73pace-y-4 md:mt-8 \x6dd:\x73pace-y-5"}>
              <li>
                <a className={"text-sm leading-snug text-black transition-colors \x68over:\x74ext-black/\x370 md:text-base"} href="/services/alternating-current-field-measurement">Alternating Current Field Measurement</a>
              </li>
              <li>
                <a className={"text-sm leading-snug text-black transition-colors \x68over:\x74ext-black/\x370 md:text-base"} href="/services/api-570-piping-inspection-and-certification">API 570 Piping Inspection and Certification</a>
              </li>
              <li>
                <a className={"text-sm leading-snug text-black transition-colors \x68over:\x74ext-black/\x370 md:text-base"} href="/services/api-579-fitness-for-service">Fitness for Service</a>
              </li>
              <li>
                <a className={"text-sm leading-snug text-black transition-colors \x68over:\x74ext-black/\x370 md:text-base"} href="/services/api-580-risk-based-inspection">Risk Based Inspection</a>
              </li>
              <li>
                <a className={"text-sm leading-snug text-black transition-colors \x68over:\x74ext-black/\x370 md:text-base"} href="/services/boiler-inspection-services">Boiler Inspection</a>
              </li>
              <li>
                <a className={"text-sm leading-snug text-black transition-colors \x68over:\x74ext-black/\x370 md:text-base"} href="/services/lifting-equipment-thorough-examination-and-certification">Lifting Equipment Thorough Examination and Certification</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={"text-2xl font-semibold \x74ext-[#\x4160D0F] md:text-3xl"}>Services</h4>
            <ul className={"mt-6 \x73pace-y-4 md:mt-8 \x6dd:\x73pace-y-5"}>
              <li>
                <a className={"text-sm leading-snug text-black transition-colors \x68over:\x74ext-black/\x370 md:text-base"} href="/services/pressure-testing">Pressure Testing</a>
              </li>
              <li>
                <a className={"text-sm leading-snug text-black transition-colors \x68over:\x74ext-black/\x370 md:text-base"} href="/services/paint-coating-inspection">Paint Inspection</a>
              </li>
              <li>
                <a className={"text-sm leading-snug text-black transition-colors \x68over:\x74ext-black/\x370 md:text-base"} href="/services/positive-material-identification-testing">PMI Testing</a>
              </li>
              <li>
                <a className={"text-sm leading-snug text-black transition-colors \x68over:\x74ext-black/\x370 md:text-base"} href="/services/rt-radiographic-services">RT Service</a>
              </li>
              <li>
                <a className={"text-sm leading-snug text-black transition-colors \x68over:\x74ext-black/\x370 md:text-base"} href="/services/api-580-risk-based-inspection">Risk Based Inspection</a>
              </li>
              <li>
                <a className={"text-sm leading-snug text-black transition-colors \x68over:\x74ext-black/\x370 md:text-base"} href="/services/sphere-tank-inspections">Sphere Tank Inspection</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={"mt-10 \x62order-t \x62order-black/\x310 pt-8 md:mt-14 md:pt-10"}>
          <button className={"text-sm font-medium text-black underline \x75nderline-offset-4 transition-colors \x68over:\x74ext-black/\x370 md:text-base"} type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-_R_5lbrb_" data-state="closed" data-slot="dialog-trigger">Privacy Policy</button>
        </div>
      </div>
    </footer>
  );
}

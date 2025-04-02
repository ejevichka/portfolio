import PortfolioShell from "@/app/components/Portfolio";
import Link from "next/link";

export default function MainProjects() {
  return (
    <section>
    <div className="mt-20">
    <Link
      href="/"
      className="inline-block border border-[#2f2f2f] px-6 py-3 rounded-md text-sm text-[#a1a1a1] hover:bg-[#161616] transition"
    >
      ← Back to main
    </Link>
</div>
    <PortfolioShell>
       
    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
      Hi, I'm Nat
    </h1>
    <p className="text-lg text-[#a1a1a1] mb-6">
    Frontend Developer with 8+ years of experience in FinTech, E-commerce, interprise solutions. <br/>
    Specialized in React, TypeScript, NodeJS, BFF and micro-frontend architecture, with a strong focus on building scalable, high-performance web applications.<br/>
    On my last project I migrated a monolithic product to a micro-frontend architecture, reducing bundle size by 41%. <br/>
    Seeking opportunities to drive modern frontend solutions that enhance performance, maintainability, and user experience. <br/>
    Fully authorized to work in Germany<br/>
    Languages: fluent in English (IELTS B2)
    </p>

    <div className="mt-24 border-t border-[#2a2a2a] pt-10" id="about">
      <h2 className="text-2xl mb-4">KEY SKILLS</h2>
      <p className="max-w-prose">
      
React.js (19) – Next.js (14) – Redux – React Native – TypeScript (v5) – JavaScript – HTML5 <br/>
CSS3 / SASS – Styled-components – Tailwind – Material UI – Ant Design – Storybook<br/>
REST API – JWT – Micro Frontend Architecture – Docker – Jenkins – GitHub Actions<br/>
Communication – Decision-making – Stakeholder collaboration – negation - cross-functional collaboration  –  teamwork  –  problem solving

      </p>
    </div>

    <div className="mt-12 space-y-10" id="about">
    <div className="border border-[#2f2f2f] p-6 rounded-lg hover:bg-[#161616] transition">
  <h2 className="text-2xl mb-2">TAKKT Group / Kaiser + Kraft (Dec 2023 – Jun 2024)</h2>
  <p className="text-sm text-[#888]">
    Built admin panel with React, TypeScript, Next.js 14. Migrated to micro-frontends, reduced bundle size by 41%. Set up type-safe API, design tokens, and performance optimizations.
  </p>
</div>

<div className="border border-[#2f2f2f] p-6 rounded-lg hover:bg-[#161616] transition">
  <h2 className="text-2xl mb-2">EPAM Systems (Oct 2017 – Oct 2023)</h2>
  <p className="text-sm text-[#888]">
    Led frontend for South Pole (Next.js + Web Workers), built AST Viewer for Walmart, created microfrontend architecture at Schneider, and integrated web app with Alfa Bank’s mobile platform.
  </p>
</div>

<div className="border border-[#2f2f2f] p-6 rounded-lg hover:bg-[#161616] transition">
  <h2 className="text-2xl mb-2">Takeda – Digital Health (Oct 2023 – Mar 2024)</h2>
  <p className="text-sm text-[#888]">
    Led i18n/l10n strategy and built type-safe CMS architecture with Sanity for scalable multilingual content across digital health products.
  </p>
</div>

<div className="border border-[#2f2f2f] p-6 rounded-lg hover:bg-[#161616] transition">
  <h2 className="text-2xl mb-2">ROGII – Geospatial Tools (Jun 2024 – Sep 2024)</h2>
  <p className="text-sm text-[#888]">
    Improved map usability with custom Leaflet.js controls for geologists and engineers. Optimized performance for large GeoJSON datasets.
  </p>
</div>

<div className="border border-[#2f2f2f] p-6 rounded-lg hover:bg-[#161616] transition">
  <h2 className="text-2xl mb-2">Novaya Gazeta Europe (Sep 2024 – Jan 2025)</h2>
  <p className="text-sm text-[#888]">
    Built content creator admin panel with React, Vite, and Editor.js. Developed token-based design system using Ant Design and Figma variables.
  </p>
</div>

<div className="border border-[#2f2f2f] p-6 rounded-lg hover:bg-[#161616] transition">
  <h2 className="text-2xl mb-2">#Estonians888 – Web3 & AI (Jul 2024 – Present)</h2>
  <p className="text-sm text-[#888]">
    Built AI agents with Gemini API, Vertex AI, and Cloud Run. Integrated WalletConnect and managed decentralized identities on LUKSO blockchain.
  </p>
</div>



    </div>

  
  </PortfolioShell>
  <div className="absolute right-0 top-10 text-xs">
        <p className="mb-2 text-[#fff]">SIDE ACTIVITIES</p>
        <Link href="/projects/side" passHref>
        <div className="w-60 h-48 rounded-md flex items-end justify-center p-4 bg-cover bg-center"
            style={{ backgroundImage: "url('/laptop.jpg')" }}>
          <span className="text-[30px]">WEB3/AI</span>
        </div>
        </Link>
      </div>
  </section>
  );
}

import PortfolioShell from "@/app/components/Portfolio";
import Link from "next/link";

export default function SideProjects() {
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
    <p>
    Exploring the edges of Web3 and AI.<br/>
Built digital agents with Gemini API, Vertex AI, Cloud Run.<br/>
Experimented with LangChain, LlamaIndex, RAG, Genkit —
for intelligent automation, digital twins, and composable assistants.<br/>

Integrated WalletConnect, managed identity on LUKSO,<br/>
and shaped experiences in decentralized ecosystems.
    </p>

    <div className="mt-24 border-t border-[#2a2a2a] pt-10" id="about">
      <h2 className="text-2xl mb-4">KEY SKILLS</h2>
      <p className="text-[#999] max-w-prose">
      React.js (19) – Next.js (14) – Redux – React Native – TypeScript (v5) – JavaScript – HTML5 <br/>
      AI: LangChain, LlamaIndex, RAG, Gemini API, Vertex AI, vector database and vector search engine<br/>
      Web3: Wallets, Wagmi, Viem, Zod, TRPC<br/>
      </p>
    </div>

    <div className="mt-12 space-y-10" id="about">
    <div className="border border-[#2f2f2f] p-6 rounded-lg hover:bg-[#161616] transition">
  <h2 className="text-2xl mb-2">Takeda – Digital Health (Oct 2023 – Mar 2024)</h2>
  <p className="text-sm text-[#888]">
    Led i18n/l10n strategy for global health marketplace. Built type-safe Sanity CMS architecture for scalable multilingual content.
  </p>
</div>

<div className="border border-[#2f2f2f] p-6 rounded-lg hover:bg-[#161616] transition">
  <h2 className="text-2xl mb-2">ROGII – Geospatial Tools (Jun 2024 – Sep 2024)</h2>
  <p className="text-sm text-[#888]">
    Improved map usability for technical users using Leaflet.js. Built custom scale controls and optimized GeoJSON rendering.
  </p>
</div>

<div className="border border-[#2f2f2f] p-6 rounded-lg hover:bg-[#161616] transition">
  <h2 className="text-2xl mb-2">Novaya Gazeta Europe (Sep 2024 – Jan 2025)</h2>
  <p className="text-sm text-[#888]">
    Built an admin panel with React + Editor.js. Created a flexible token-based design system with Ant Design & Figma.
  </p>
</div>

<div className="border border-[#2f2f2f] p-6 rounded-lg hover:bg-[#161616] transition">
  <h2 className="text-2xl mb-2">#Estonians888 – Web3 & AI (Jul 2024 – Present)</h2>
  <p className="text-sm text-[#888]">
    Developed AI agents using Gemini API, Vertex AI, Cloud Run. Integrated WalletConnect and managed identities on LUKSO blockchain.
  </p>
</div>

    </div>

  
  </PortfolioShell>
  <div className="absolute right-0 top-10 text-xs">
  <p className="mb-2">RECENT WORK</p>
        <Link href="/projects/side" passHref>
        <div className="w-60 h-58 rounded-md flex items-end justify-center p-4 bg-cover bg-center"
            style={{ backgroundImage: "url('/past_projects.png')" }}>
          <span className="text-[30px]">EXPERIENCE</span> 
        </div>
        </Link>
      </div>
  </section>
  );
}

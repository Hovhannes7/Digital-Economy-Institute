export type Calculator = { title: string; description: string; href?: string; note?: string };
export type ExternalResource = { name: string; href: string };
export type Community = {
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  audience: string;
  focusAreas: string[];
  calculators: Calculator[];
  externalResources: ExternalResource[];
  hasChat: boolean;
  hasChatbot: boolean;
  hasVault: boolean;
  registrationFields: string[];
  governanceNote: string;
};

export const communities: Community[] = [
  {
    name: "Agriculture Community",
    slug: "agriculture",
    description: "A research and practice community for digital agriculture, food systems, and rural innovation.",
    longDescription: "The Agriculture Community connects researchers, agronomists, farmers, startups, policymakers, and data specialists who want to improve agricultural decisions through transparent data and expert validation.",
    audience: "Researchers, farmers, agronomists, food-system specialists, rural innovators, and policymakers.",
    focusAreas: ["Farm productivity", "Soil and water data", "Food-system resilience", "Rural digital transformation", "AI-supported advisory tools"],
    calculators: [{ title: "Farm and agriculture calculators", description: "External calculators for practical farm planning and agriculture-related calculations.", href: "https://calculator.farm/" }],
    externalResources: [
      ["AGRIVI", "https://www.agrivi.com/"],
      ["AgriFarming.in", "https://www.pollachifarmersmarket.com/top-10-agriculture-websites-every-farmer-should-follow-in-2025/"],
      ["Farming First", "https://www.pollachifarmersmarket.com/top-10-agriculture-websites-every-farmer-should-follow-in-2025/"],
      ["Modern Farmer", "https://www.pollachifarmersmarket.com/top-10-agriculture-websites-every-farmer-should-follow-in-2025/"],
      ["Agrarheute", "https://www.semrush.com/trending-websites/global/agriculture"]
    ].map(([name, href]) => ({ name, href })),
    hasChat: true, hasChatbot: true, hasVault: true, registrationFields: ["email", "phone"],
    governanceNote: "Agricultural recommendations require local expert judgment, field conditions, and certified professional advice where applicable."
  },
  {
    name: "Healthcare Community",
    slug: "healthcare",
    description: "A careful research community for biomedical evidence, clinical tools, and health-policy analysis.",
    longDescription: "The Healthcare Community supports responsible discussion of biomedical research, clinical calculators, digital health, and policy evidence while emphasizing professional review and patient safety.",
    audience: "Healthcare researchers, clinicians, public-health specialists, data scientists, and policy professionals.",
    focusAreas: ["Clinical research", "Biomedical evidence", "Digital health", "Clinical decision support", "Health policy"],
    calculators: [{ title: "MDCalc clinical calculators", description: "External clinical calculators and medical reference tools.", href: "https://www.mdcalc.com/#All", note: "External medical calculators are provided for reference. They do not replace professional medical judgment." }],
    externalResources: [
      ["Mayo Clinic", "https://www.flowninja.com/blog/healthcare-website-examples"],
      ["WebMD", "https://www.flowninja.com/blog/healthcare-website-examples"],
      ["PubMed", "https://3billion.io/blog/top-9-medical-websites-doctors-should-know"],
      ["UpToDate", "https://www.sermo.com/resources/websites-for-doctors/"],
      ["Medscape", "https://www.sermo.com/resources/websites-for-doctors/"]
    ].map(([name, href]) => ({ name, href })),
    hasChat: true, hasChatbot: true, hasVault: true, registrationFields: ["email", "phone"],
    governanceNote: "Medical discussions are informational and research-oriented. They do not replace licensed medical judgment, diagnosis, treatment, or emergency care."
  },
  {
    name: "Environment Community",
    slug: "environment",
    description: "A community for climate data, environmental monitoring, pollution analysis, and public-interest evidence.",
    longDescription: "The Environment Community brings together researchers, climate specialists, environmental engineers, public officials, and civic innovators to improve environmental data workflows.",
    audience: "Environmental researchers, climate analysts, engineers, community organizations, and policymakers.",
    focusAreas: ["Climate data", "Pollution monitoring", "Noise and air quality", "Environmental policy", "Open environmental datasets"],
    calculators: [
      { title: "Combined Noise Level Calculator", description: "External reference calculator for combining multiple sound levels.", href: "https://www.azcalculator.com/calculators/combined-noise-level-calculator" },
      { title: "Pollution Calculator", description: "Placeholder for a future calculator connected to air, water, or emissions datasets.", note: "A pollution calculator can later be connected to air, water, or emissions datasets." }
    ],
    externalResources: [
      ["Eartheasy", "https://mycodelesswebsite.com/environmental-websites/"],
      ["Treehugger", "https://mycodelesswebsite.com/environmental-websites/"],
      ["Earth911", "https://mycodelesswebsite.com/environmental-websites/"],
      ["Climate Reality Project", "https://www.greenmatch.co.uk/blog/2014/11/top-50-environmental-sites-2014"],
      ["Global Footprint Network", "https://www.footprintnetwork.org/resources/footprint-calculator/"]
    ].map(([name, href]) => ({ name, href })),
    hasChat: true, hasChatbot: true, hasVault: true, registrationFields: ["email", "phone"],
    governanceNote: "Local measurements, certified experts, and regulatory standards should guide final environmental decisions."
  },
  {
    name: "Jurisprudence Community",
    slug: "jurisprudence",
    description: "A legal research community for compliance, legal comparison, and digital governance analysis.",
    longDescription: "The Jurisprudence Community explores responsible legal research tools, treaty and national law comparison, compliance workflows, and expert-reviewed digital governance methods.",
    audience: "Legal researchers, lawyers, compliance specialists, public-sector officials, and governance experts.",
    focusAreas: ["Treaty comparison", "Compliance checklists", "Legal contradiction scoring", "Digital governance", "Regulatory research"],
    calculators: [{ title: "Legal Analysis Calculator", description: "Conceptual research tool for treaty vs national law comparison, compliance checklists, deadline/date calculation, legal contradiction scoring, and legal document comparison.", note: "This is a conceptual legal research calculator. It does not provide legal advice and requires expert legal review." }],
    externalResources: [
      ["WorldLII", "https://cglj.org/human-rights-law/research-advocacy-tools/jurisprudence-databases/"],
      ["Legal Information Institute LII", "https://www.law.gmu.edu/library/freelegalresearch"],
      ["Google Scholar Legal", "https://cglj.org/human-rights-law/research-advocacy-tools/jurisprudence-databases/"],
      ["BAILII", "https://cglj.org/human-rights-law/research-advocacy-tools/jurisprudence-databases/"],
      ["Justia", "https://www.law.gmu.edu/library/freelegalresearch"]
    ].map(([name, href]) => ({ name, href })),
    hasChat: true, hasChatbot: true, hasVault: true, registrationFields: ["email", "phone"],
    governanceNote: "Legal discussions and tools are informational and research-oriented. They do not provide legal advice and require qualified legal review."
  },
  {
    name: "AI & Blockchain Community",
    slug: "ai-blockchain",
    description: "A governance-focused community for AI, blockchain, provenance, smart contracts, and Web4 readiness.",
    longDescription: "The AI & Blockchain Community examines responsible adoption of AI and blockchain systems, with emphasis on governance, provenance, security, verification, and institutional value.",
    audience: "AI researchers, blockchain specialists, policymakers, product teams, compliance experts, and public-sector innovators.",
    focusAreas: ["AI governance", "Blockchain governance", "Data provenance", "Smart contract risk", "Web4 readiness"],
    calculators: [
      "Smart Contract Risk Checklist", "AI Model Governance Checklist", "Blockchain Use-Case Evaluation Tool", "Data Provenance Scorecard", "Web4 Readiness Assessment"
    ].map((title) => ({ title, description: "Backend-ready placeholder tool for responsible AI, blockchain, provenance, and Web4 governance assessment." })),
    externalResources: [
      ["ChainGPT", "https://www.index.dev/blog/ai-tools-for-blockchain-development"],
      ["Alchemy", "https://www.index.dev/blog/ai-tools-for-blockchain-development"],
      ["Arkham Intelligence", "https://beincrypto.com/top-picks/ai-crypto-projects-to-watch/"],
      ["SingularityNET", "https://todayforecast.com/?p=164"],
      ["Bittensor", "https://todayforecast.com/?p=164"]
    ].map(([name, href]) => ({ name, href })),
    hasChat: true, hasChatbot: true, hasVault: true, registrationFields: ["email", "phone"],
    governanceNote: "AI and blockchain discussions are for research and responsible evaluation. They do not replace security audits, legal review, or institutional risk assessment."
  }
];

export function getCommunityBySlug(slug: string) {
  return communities.find((community) => community.slug === slug);
}

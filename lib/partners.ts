export type Partner = {
  name: string;
  url: string;
  description: string;
  category: "Membership" | "Partner Organization" | "Reference Institution" | "Ecosystem Resource";
  label: string;
};
export const partners: Partner[] = [
  {
    name: "Global Trade and Innovation Policy Alliance",
    url: "https://www.gtipa.org/",
    description: "A network of think tanks and policy organizations focused on trade, innovation, and technology policy.",
    category: "Membership",
    label: "Membership statement — verify before public launch."
  },
  {
    name: "Information Technology and Innovation Foundation",
    url: "https://itif.org/",
    description: "A technology policy think tank and reference institution for publication-first technology policy communication.",
    category: "Reference Institution",
    label: "Reference / partner organization — verify relationship before public launch."
  }
];

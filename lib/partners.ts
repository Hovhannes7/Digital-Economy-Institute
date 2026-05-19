export type Partner = {
  name: string;
  url: string;
  description: string;
  category:
    | "Membership"
    | "Partner Organization"
    | "Reference Institution"
    | "Ecosystem Resource";
  label: string;
};

export const partners: Partner[] = [
  {
    name: "Information Technology and Innovation Foundation",
    url: "https://itif.org/",
    description:
      "A technology policy think tank and reference institution for publication-first technology policy communication.",
    category: "Reference Institution",
    label:
      "Reference institution and intellectual inspiration. Do not present as an official partnership unless formally confirmed.",
  },
  {
    name: "Global Trade and Innovation Policy Alliance",
    url: "https://www.gtipa.org/",
    description:
      "A global network of think tanks and policy organizations focused on trade, innovation, and technology policy.",
    category: "Ecosystem Resource",
    label:
      "Relevant international policy network. This is not a membership claim.",
  },
  {
    name: "HAPALAS",
    url: "https://hapalas.am/",
    description:
      "Armenian ecosystem organization added to the Institute of Digital Economy partner and ecosystem network.",
    category: "Partner Organization",
    label:
      "Added partner/resource. Confirm the exact relationship wording before public launch.",
  },
  {
    name: "EGEA",
    url: "https://egea.am/contactus/",
    description:
      "Organization added to the Institute of Digital Economy partner and ecosystem network.",
    category: "Partner Organization",
    label:
      "Added partner/resource. Confirm the exact relationship wording before public launch.",
  },
];

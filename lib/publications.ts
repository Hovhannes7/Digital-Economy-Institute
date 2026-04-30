import fs from "fs";
import path from "path";

export type PublicationType = "Report" | "Policy Brief" | "Commentary" | "Research Note" | "Technology Explainer" | "Working Paper" | "Testimonies and Submissions" | "Data Brief";
export type Publication = {
  title: string;
  slug: string;
  date: string;
  author: string;
  type: PublicationType;
  issueArea: string;
  summary: string;
  tags: string[];
  readingTime: string;
  subtitle?: string;
  body: string;
};

const dir = path.join(process.cwd(), "content", "publications");

function parse(file: string): Publication {
  const raw = fs.readFileSync(path.join(dir, file), "utf8");
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`${file} is missing frontmatter`);
  const data: Record<string, string | string[]> = {};
  match[1].split("\n").forEach((line) => {
    const i = line.indexOf(":");
    if (i < 0) return;
    const key = line.slice(0, i).trim();
    const value = line.slice(i + 1).trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value.slice(1, -1).split(",").map((v) => v.trim().replace(/^"|"$/g, "")).filter(Boolean);
    } else {
      data[key] = value.replace(/^"|"$/g, "");
    }
  });
  return {
    title: data.title as string,
    slug: data.slug as string,
    date: data.date as string,
    author: data.author as string,
    type: data.type as PublicationType,
    issueArea: data.issueArea as string,
    summary: data.summary as string,
    tags: Array.isArray(data.tags) ? data.tags as string[] : [],
    readingTime: data.readingTime as string,
    subtitle: data.subtitle as string | undefined,
    body: match[2].trim()
  };
}

export function getAllPublications() {
  return fs.readdirSync(dir).filter((file) => file.endsWith(".md")).map(parse).sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
export function getPublicationBySlug(slug: string) {
  return getAllPublications().find((p) => p.slug === slug);
}
export function getRelatedPublications(publication: Publication, limit = 3) {
  return getAllPublications().filter((p) => p.slug !== publication.slug).filter((p) => p.issueArea === publication.issueArea || p.tags.some((tag) => publication.tags.includes(tag))).slice(0, limit);
}

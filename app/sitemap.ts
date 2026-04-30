import type { MetadataRoute } from "next";
import { communities } from "@/lib/communities";
import { issueAreas } from "@/lib/issueAreas";
import { getAllPublications } from "@/lib/publications";
import { siteConfig } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["","/publications","/issues","/targeted-ai","/communities","/communities/general-chat","/partners","/centers","/about","/founders","/events","/newsletter","/contact"];
  return [
    ...staticRoutes.map(route => ({ url: `${siteConfig.url}${route}`, lastModified: new Date() })),
    ...getAllPublications().map(p => ({ url: `${siteConfig.url}/publications/${p.slug}`, lastModified: new Date(p.date) })),
    ...issueAreas.map(i => ({ url: `${siteConfig.url}/issues/${i.slug}`, lastModified: new Date() })),
    ...communities.map(c => ({ url: `${siteConfig.url}/communities/${c.slug}`, lastModified: new Date() }))
  ];
}

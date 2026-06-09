import type { MetadataRoute } from "next";

import { communities } from "@/lib/communities";
import { issueAreas } from "@/lib/issueAreas";
import { getAllPublications } from "@/lib/publications";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/publications",
    // "/issues",
    "/communities",
    "/communities/general-chat",
    // "/partners",
    "/about",
    "/founders",
    "/events",
    "/newsletter",
    "/contact",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
    })),
    ...getAllPublications().map((publication) => ({
      url: `${siteConfig.url}/publications/${publication.slug}`,
      lastModified: new Date(publication.date),
    })),
    ...issueAreas.map((issue) => ({
      url: `${siteConfig.url}/issues/${issue.slug}`,
      lastModified: new Date(),
    })),
    ...communities.map((community) => ({
      url: `${siteConfig.url}/communities/${community.slug}`,
      lastModified: new Date(),
    })),
  ];
}

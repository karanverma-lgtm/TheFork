import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.theforkluxurycatering.com";
  const routes = ["", "/about", "/services", "/features", "/pricing", "/blog", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/contact" ? 0.9 : 0.8,
  }));
}

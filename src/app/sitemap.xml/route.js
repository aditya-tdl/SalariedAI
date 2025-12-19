// app/sitemap.xml/route.js

export async function GET() {
  const baseUrl = "https://dummy.example.com"; // Replace later with real domain

  // ✅ Dummy product data (hardcoded)
  const products = [
    { slug: "product-1" },
    { slug: "product-2" },
    { slug: "product-3" }
  ];

  const productUrls = products
    .map(
      product => `
    <url>
      <loc>${baseUrl}/products/${product.slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `
    )
    .join("");

  const staticUrls = ["/", "/about", "/contact"]
    .map(
      path => `
    <url>
      <loc>${baseUrl}${path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
  `
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticUrls}
    ${productUrls}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}

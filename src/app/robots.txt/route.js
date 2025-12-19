// src/app/robots.txt/route.js

export function GET() {
  const content = `
User-agent: *
Disallow: /admin
Disallow: /api
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
`;

  return new Response(content.trim(), {
    headers: {
      "Content-Type": "text/plain"
    }
  });
}

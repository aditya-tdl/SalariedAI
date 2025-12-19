/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/SalariedAI",
  assetPrefix: "/SalariedAI/",
};

module.exports = nextConfig;

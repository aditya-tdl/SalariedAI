/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/REPO_NAME",
  assetPrefix: "/REPO_NAME/",
};

module.exports = nextConfig;

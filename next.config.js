/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const path = require("path");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    disable: process.env.NODE_ENV === "development"
  },
  reactStrictMode: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  images: {
    domains: [
      "career-utility.dedicateddevelopers.us",
      "shop.giftlist.com",
      "images.bloomingdalesassets.com",
      "storage.googleapis.com",
      "i5.walmartimages.com",
      "media.kohlsimg.com",
      "assets.basspro.com",
      "ak1.ostkcdn.com",
      "target.scene7.com",
      "prod-cdn-01.storenvy.com",
      "pisces.bbystatic.com",
      "store.storeimages.cdn-apple.com",
      "www.worldmarket.com",
      "images.thdstatic.com",
      "cdn.shopify.com",
    ]
  },
  swcMinify: true,
  compress: true,
  optimizeFonts: true,
  devIndicators: {
    autoPrerender: false,
    buildActivityPosition: "bottom-right"
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  },
  env: {
    NEXT_APP_BASE_URL: process.env.NEXT_APP_BASE_URL
  },
  typescript: { ignoreBuildErrors: false }
});

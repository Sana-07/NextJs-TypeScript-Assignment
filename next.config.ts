// 


// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // ✅ Static export ke liye
  images: {
    unoptimized: true, // ✅ Netlify ke liye zaroori
  },
};

module.exports = nextConfig;

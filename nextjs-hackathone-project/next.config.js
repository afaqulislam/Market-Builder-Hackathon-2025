/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      // Add the domains of your external image hosts
      domains: ['https://nextjs-hackathone-afaq1.vercel.app/'], // Replace with actual domain(s) if using external images
      domains: ["cdn.sanity.io"], // Allow Sanity images

    },
  };
  
  module.exports = nextConfig;
  
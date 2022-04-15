/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: process.env.NODE_ENV === 'development',  
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: { 
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], 
  },

}

module.exports = nextConfig

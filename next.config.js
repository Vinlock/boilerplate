const { withSuperjson } = require('next-superjson')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withSuperjson()(nextConfig)

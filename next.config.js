const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['arbiboard.vercel.app'],
  },
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
}

module.exports = nextConfig

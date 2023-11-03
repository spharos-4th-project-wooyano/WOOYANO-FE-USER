// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXTAUTH_SECRET:'mLwkryvhB60SjELI4g/xnIV/sq9VZznaRjhxTJ8zkI8=',
        NEXT_PUBLIC_API_URL:'http://10.10.10.155:8000'
        // 15.164.17.12
      }
}

module.exports = nextConfig

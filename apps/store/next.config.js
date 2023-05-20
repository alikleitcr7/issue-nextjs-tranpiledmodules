/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // experimental: {
    //     esmExternals: false
    // },
    transpilePackages: ["@products/common-ui"],
}

module.exports = nextConfig

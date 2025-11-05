/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  experimental: {
    turbo: false, // এটা যোগ করো, Turbopack বন্ধ করার জন্য
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // GitHub Pages 仍然服务根目录下的 legacy index.html / support.html，
  // Vercel 上的 Next.js 从 app/ 跑，互不冲突。
};

export default nextConfig;

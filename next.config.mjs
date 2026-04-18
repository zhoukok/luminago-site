/** @type {import('next').NextConfig} */
const nextConfig = {
  // 纯静态导出 —— 由 Cloudflare Workers Static Assets 直接服务 `out/` 目录。
  // 站点所有路由都是 `○ (Static) prerendered`，没有 SSR / API route / ISR，
  // 因此不需要 Next.js Server Runtime，直接静态文件分发即可。
  output: "export",
  reactStrictMode: true,
  images: {
    // 静态导出模式下 next/image 的动态优化不可用，必须关闭；
    // 继续保留 avif/webp 偏好仅作为未来切回 SSR 的占位。
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  // GitHub Pages 仍然服务根目录下的 legacy index.html / support.html，
  // 与本 Next.js 站点部署到 Cloudflare 的产物互不冲突。
};

export default nextConfig;

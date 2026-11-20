/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve AVIF first, WebP as fallback; all images are local (no remotePatterns needed).
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

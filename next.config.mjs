/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "dummyimage.com"
      }
    ]
  },
  redirects() {
    return [
      {
        source: '/',
        destination: '/properties',
        permanent: true,
      }
    ]
  }
};

export default nextConfig;

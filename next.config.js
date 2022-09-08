/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
 default-src 'self';
 script-src 'self' 'unsafe-eval';
 style-src 'self' 'unsafe-inline' fonts.googleapis.com;
 font-src 'self' fonts.gstatic.com;  
 img-src 'self' data:;
`;

const nextConfig = () => {
  return {
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
    swcMinify: true,
    async headers() {
      return [
        {
          source: '/programacion',
          headers: [{ key: 'Content-Security-Policy', value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim() }],
        },
        {
          source: '/about',
          headers: [{ key: 'Content-Security-Policy', value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim() }],
        },
        {
          source: '/api/:path',
          headers: [{ key: 'Access-Control-Allow-Methods', value: 'GET' }],
        },
      ];
    },
  };
};

module.exports = nextConfig;

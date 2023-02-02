/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
 default-src 'self';
 script-src 'self';
 media-src ${process.env.LOCOMOTION_URL} ${process.env.NEXT_PUBLIC_LOCOMOTION_STREAM};
 connect-src 'self' ${process.env.LOCOMOTION_URL};
 style-src 'self' 'unsafe-inline' fonts.googleapis.com;
 font-src 'self' fonts.gstatic.com;
 img-src 'self' data:;
`;

const nextConfig = () => {
  return {
    reactStrictMode: true,
    swcMinify: true,
    async headers() {
      return [
        {
          source: '/',
          headers: [{ key: 'Content-Security-Policy', value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim() }],
        },
        {
          source: '/:path',
          headers: [{ key: 'Content-Security-Policy', value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim() }],
        },
        {
          source: '/api/:path',
          headers: [
            { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS' },
            { key: 'Cache-Control', value: 's-maxage=21600' },
          ],
        },
      ];
    },
  };
};

module.exports = nextConfig;

/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = () => {
  return {
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
    async headers() {
      return [
        {
          source: '/api/:guide*',
          headers: [{ key: 'Access-Control-Allow-Methods', value: 'GET' }],
        },
      ];
    },
  };
};

module.exports = nextConfig;

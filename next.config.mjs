/** @type {import('next').NextConfig} */

const contentSecurityPolicy = `
  default-src 'self'; 
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://apis.google.com https://www.googletagmanager.com; 
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
  img-src 'self' data: https://www.google-analytics.com https://*.gstatic.com; 
  connect-src 'self' https://*.sentry.io https://*.sanity.io; 
  font-src 'self' https://fonts.gstatic.com; 
  frame-src 'self' https://www.youtube.com https://player.vimeo.com; 
  object-src 'none'; 
  base-uri 'self'; 
  form-action 'self'; 
  frame-ancestors 'self';
`;

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Content-Security-Policy",
            value: contentSecurityPolicy.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};

export default nextConfig;

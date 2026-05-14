const isDevelopment = process.env.NODE_ENV !== 'production';

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "object-src 'none'",
  "style-src 'self' 'unsafe-inline'",
  `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ''}`,
  `connect-src 'self'${isDevelopment ? ' ws: http:' : ''}`,
].join('; ');

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: contentSecurityPolicy,
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), geolocation=(), microphone=(), browsing-topics=()'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;

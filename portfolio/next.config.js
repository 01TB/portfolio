/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Ancien nom du CV (avec espace), pour ne pas casser les liens déjà partagés
      {
        source: '/CV_Tsitohaina%20Berthin_RAMANANKIRAHINA.pdf',
        destination: '/CV_Tsitohaina_Berthin_RAMANANKIRAHINA.pdf',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

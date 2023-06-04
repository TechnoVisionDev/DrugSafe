/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: '/donate',
        destination: 'https://www.patreon.com/drugsafely',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/s8CFunneAg',
        permanent: true,
      },
    ]
  },
}

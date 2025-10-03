export default defineNuxtConfig({
  extends: ['./woonuxt_base'],
  components: [{ path: './components', pathPrefix: false }],
  nitro: {
    prerender: {
      concurrency: 10,
      interval: 1000,
      failOnError: false,
    },
    minify: true,
    // Use netlify preset (not netlify-edge)
    preset: 'netlify'
  },
  image: {
    provider: 'netlify',
    domains: [
      'windowsupplydirectltd.co.uk',
      'secure.woonuxt.com'
    ]
  }
})
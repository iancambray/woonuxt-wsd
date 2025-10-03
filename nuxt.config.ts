export default defineNuxtConfig({
  extends: ['./woonuxt_base'],
  components: [{ path: './components', pathPrefix: false }],
  
  nitro: {
    prerender: {
      concurrency: 10,
      interval: 1000,
      failOnError: false,
    },
    minify: false
  },
  
  // Runtime config with string values
  runtimeConfig: {
    public: {
      gqlHost: 'https://windowsupplydirectltd.co.uk/graphql',
      gqlCredentials: 'omit' // String value instead of boolean
    }
  }
})
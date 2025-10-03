export default defineNuxtPlugin(() => {
  // Wait for Nuxt to be ready
  onNuxtReady(() => {
    console.log('Checking GraphQL clients...')
    
    // Check for various GraphQL clients that WooNuxt might use
    const clients = [
      '$graphql',
      '$gql',
      'GraphQLClient',
      'useQuery',
      'useMutation'
    ]
    
    clients.forEach(client => {
      if (useNuxtApp()[client]) {
        console.log(`✅ Found GraphQL client: ${client}`)
      }
    })
    
    // Monitor network requests
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.name.includes('graphql')) {
          console.log('📡 GraphQL Network Request:', entry)
        }
      })
    })
    
    observer.observe({ entryTypes: ['resource'] })
  })
})
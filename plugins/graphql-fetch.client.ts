export default defineNuxtPlugin(() => {
  console.log('🚨 EARLY GraphQL Fetch Interceptor loaded')
  
  const originalFetch = window.fetch
  
  window.fetch = function(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
    let url: string
    
    if (typeof input === 'string') {
      url = input
    } else if (input instanceof URL) {
      url = input.href
    } else {
      url = (input as Request).url
    }
    
    if (url && url.includes('/graphql')) {
      console.log('🚨 INTERCEPTING GraphQL request to:', url)
      console.log('🔍 Original options:', init)
      console.log('🔍 Original credentials:', init?.credentials)
      
      const newOptions: RequestInit = {
        ...init,
        credentials: 'omit'
      }
      
      console.log('🔍 New credentials:', newOptions.credentials)
      console.log('🔍 Full new options:', newOptions)
      
      const result = originalFetch.call(this, input, newOptions)
      
      // Log the result
      result.then(response => {
        console.log('📡 Response status:', response.status)
        console.log('📡 Response headers:', Object.fromEntries(response.headers.entries()))
      }).catch(error => {
        console.error('📡 Fetch error:', error)
      })
      
      return result
    }
    
    return originalFetch.call(this, input, init)
  }
})
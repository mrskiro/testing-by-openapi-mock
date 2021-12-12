import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { App } from './App'

import { worker } from './__mocks__/msw/browser'

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

const client = new QueryClient({
  defaultOptions: { queries: { retry: false } },
})

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

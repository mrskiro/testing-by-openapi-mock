import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import { handlers } from './__mocks__/msw/handlers'
import { App } from './App'

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
})
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('App', () => {
  it('should be displayed loading', () => {
    render(<App />, { wrapper })
    expect(screen.getByText('loading...')).toBeInTheDocument()
  })
  it('should be displayed error!', async () => {
    server.use(
      rest.get('/todo/:id', (req, res, ctx) => {
        return res(ctx.status(400))
      })
    )
    render(<App />, { wrapper })
    await waitFor(() => screen.getByText('error!'))
    expect(screen.queryByText('loading...')).not.toBeInTheDocument()
  })
})

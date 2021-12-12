import { rest, DefaultRequestBody } from 'msw'
import { mockTodo } from '../../todo'

export const handlers = [
  rest.get<DefaultRequestBody, { id: string }>('/todo/:id', (req, res, ctx) => {
    const { id } = req.params

    if (!id) return res(ctx.status(400))
    return res(ctx.status(200), ctx.json(mockTodo({ id })))
  }),
]

import { mockTodo } from '../../__mocks__/todo'
import { toTodo } from './dto'

describe('dto', () => {
  it('toTodo', () => {
    expect(toTodo(mockTodo())).toStrictEqual({
      id: 'testID',
      title: 'Todo title',
      body: 'Todo body',
      completed: false,
      isEmptyBody: false,
    })
  })
})

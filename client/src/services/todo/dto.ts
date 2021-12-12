import * as Oapi from '../../oapi'
import * as Domain from '../../domain'

export const toTodo = (todo: Oapi.Todo): Domain.Todo => ({
  id: todo.id,
  title: todo.title,
  body: todo.body,
  completed: todo.completed,
  isEmptyBody: todo.body === '',
})

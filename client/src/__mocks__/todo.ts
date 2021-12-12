import yaml from '../../../schema/schema.yaml'
import * as Oapi from '../oapi'
import * as Domain from '../domain'
import { toTodo } from '../services/todo'

export const mockTodo = (todo?: Partial<Oapi.Todo>): Oapi.Todo => ({
  ...yaml.components.schemas.Todo.example,
  ...todo,
})

export const mockTodoToDomain = (todo?: Partial<Domain.Todo>): Domain.Todo => ({
  ...toTodo(mockTodo()),
  ...todo,
})

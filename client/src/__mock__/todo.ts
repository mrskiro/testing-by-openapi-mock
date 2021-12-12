import yaml from '../../../schema/schema.yaml'
import * as Oapi from '../oapi'

export const mockTodo = (todo: Partial<Oapi.Todo>): Oapi.Todo => ({
  ...yaml.components.schemas.Todo.example,
  ...todo,
})

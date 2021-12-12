import yaml from '../../../schema/schema.yaml'

export const mockTodo = () => ({ ...yaml.components.schemas.Todo.example })

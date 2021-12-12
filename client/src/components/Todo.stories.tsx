import type { ComponentStoryObj } from '@storybook/react'
import { Todo } from './Todo'
import { mockTodoToDomain } from '../__mocks__/todo'

type Story = ComponentStoryObj<typeof Todo>

export default { component: Todo, title: 'Components/Todo' }

export const Default: Story = {
  args: { todo: mockTodoToDomain() },
}

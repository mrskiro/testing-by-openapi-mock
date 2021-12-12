import type { ComponentStoryObj } from '@storybook/react'
import { Todo } from './Todo'
import { mockTodo } from '../__mock__/todo'

type Story = ComponentStoryObj<typeof Todo>

export default { component: Todo, title: 'Components/Todo' }

export const Default: Story = {
  args: { todo: mockTodo() },
}

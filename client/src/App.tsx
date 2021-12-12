import * as React from 'react'
import { mockTodo } from './__mock__/todo'
import { useTodo } from './services/todo'

export const App = () => {
  const { data } = useTodo()
  console.log(data)
  return <div></div>
}

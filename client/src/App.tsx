import * as React from 'react'
import { useTodo } from './services/todo'
import { Todo } from './components/Todo'

export const App = () => {
  const { data, isLoading, isError } = useTodo()

  if (isLoading) {
    return <p>loading...</p>
  }

  if (isError || !data) {
    return <p>error!</p>
  }

  return (
    <div>
      <Todo todo={data} />
    </div>
  )
}

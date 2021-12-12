import * as React from 'react'
import * as Domain from '../domain'

type Props = {
  todo: Domain.Todo
}

export const Todo = (props: Props) => (
  <div>
    <h1>{props.todo.title}</h1>
    <p>{props.todo.body}</p>
    <label>completed</label>
    <input type="checkbox" checked={props.todo.completed} disabled />
  </div>
)

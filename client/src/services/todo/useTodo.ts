import { useQuery } from 'react-query'
import axios from 'axios'
import * as Oapi from '../../oapi'
import { toTodo } from './dto'

const apiInstance = Oapi.DefaultApiFactory(undefined, '', axios)

export const useTodo = () => {
  return useQuery('getTodo', async () => {
    const { data } = await apiInstance.getTodo('testID')
    return toTodo(data)
  })
}

import axios from 'axios'
import { CHANGE_LIST } from './constants'

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = () => {
  return (dispatch) => {
    axios.get('/mock/news.json')
      .then(res => {
        return res.data
      })
      .then(data => {
        dispatch(changeList(data.list))
      })
  }
}
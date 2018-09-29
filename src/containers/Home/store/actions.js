import axios from 'axios'
import { CHANGE_LIST } from './constants'

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = () => {
  return (dispatch) => {
    // axios.get('/mock/news.json')
    //   .then(res => {
    //     const list = res.data.list
    //     dispatch(changeList(list))
    //   })
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([{
          id: 1,
          title: 'news1'
        }])
      })
    }).then(list => {
      dispatch(changeList(list))
    })
  }
}
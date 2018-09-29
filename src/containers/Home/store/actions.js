import { CHANGE_LIST } from './constants'

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/mock/news.json')
      .then(res => {
        const list = res.data.list
        dispatch(changeList(list))
      })
  }
}
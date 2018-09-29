import express from 'express'
import { matchRoutes } from 'react-router-config'
import routes from '../Routes'
import { getStore } from '../store'
import { render } from './utils'

const app = express()
app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = getStore()

  // 遍历所有的组件，将命中当前路由的路径 push 到 matchRoutes 中
  // 然后调用该组件的 loadData 方法
  const matchedRoutes = matchRoutes(routes, req.path)

  const promises = []

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })

  Promise.all(promises)
    .then(() => {
      res.send(render(store, routes, req))
    })
    .catch(err => {
      res.send('something don\'t run')
    })
})

app.listen(3000, () => {
  console.log('the server is on port 3000')
})
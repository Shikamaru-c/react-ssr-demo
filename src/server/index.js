import express from 'express'
import proxy from 'express-http-proxy'
import { matchRoutes } from 'react-router-config'
import routes from '../Routes'
import { getStore } from '../store'
import { render } from './utils'

const app = express()
app.use(express.static('public'))

// 中间层代理
app.use('/api', proxy('http://47.95.113.63', {
  proxyReqPathResolver: function (req) {
    // 处理请求路径，代理到 服务器
    // 例：/api/news => /ssr/api/news
    return '/ssr/api' + req.url
  }
}))

app.get('*', (req, res) => {
  const store = getStore()

  // 遍历所有的组件，将命中当前路由的路径 push 到 matchRoutes 中
  // 然后调用该组件的 loadData 方法
  const matchedRoutes = matchRoutes(routes, req.path)

  const promises = []

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      // 这里再次包装是为了，让 请求 不论是 resolve 或是 reject
      // 在 Promise.all 里 都能执行到 .then 方法
      const promise = new Promise(resolve => {
        item.route.loadData(store).then(resolve, resolve)
      })
      promises.push(promise)
    }
  })

  Promise.all(promises)
    .then(() => {
      const context = {css: []}
      const html = render(store, routes, req, context)

      if (context.action === 'REPLACE') {
        res.redirect(301, context.url)
      } else {
        context.NotFound && (res.statusCode = 404)
        res.send(html)
      }

    })
    .catch(err => {
      console.log(err)
      res.send('something don\'t run')
    })
})

app.listen(3000, () => {
  console.log('the server is on port 3000')
})
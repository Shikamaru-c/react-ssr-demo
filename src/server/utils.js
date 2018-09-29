import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route, matchPath } from 'react-router-dom'
import routes from '../Routes'
import { Provider } from 'react-redux'
import getStore from '../store'

export const render = (req) => {

  const store = getStore()

  // 遍历所有的组件，将命中当前路由的路径 push 到 matchRoutes 中
  // 然后调用该组件的 loadData 方法
  const matchRoutes = []

  routes.some(route => {
    const match = matchPath(req.path, route)
    if (match) {
      matchRoutes.push(route)
    }
  })
  console.log(matchRoutes)

  matchRoutes.forEach(route => {
    route.loadData
    && route.loadData()
  })

  const html = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </div>
      </StaticRouter>
    </Provider>
  ))

  return `
  <html>
    <head>
      <title>SSR DEMO.</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/index.js"></script>
    </body>
  </html>
  `
}
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

export const render = (store, routes, req, context) => {
  const html = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>
          {renderRoutes(routes)}
        </div>
      </StaticRouter>
    </Provider>
  ))

  const cssStr = context.css.join('\n')
  console.log(cssStr)

  return `
    <html>
      <head>
        <title>SSR DEMO.</title>
        <style>${cssStr}</style>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src="/index.js"></script>
      </body>
    </html>
  `
}
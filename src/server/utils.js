import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../Routes'

export const render = (req) => {
  const html = renderToString((
    <StaticRouter location={req.path} context={{}}>
      {Routes}
    </StaticRouter>
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
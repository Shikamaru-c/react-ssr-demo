import express from 'express'
import { render } from './utils'

const app = express()
app.use(express.static('public'))

app.get('*', (req, res) => {
  res.send(render(req))
})

app.listen(3000, () => {
  console.log('the server is on port 3000')
})
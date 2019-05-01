const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.set('view engine', 'njk')

const users = ['']

app.get('/', (req, res) => {
  return res.render('list', { name: 'Hygor' })
})

app.listen(3000)

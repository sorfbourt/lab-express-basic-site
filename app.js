//https://github.com/Doomfang3/express-basics-jan23

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'))

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.use(expressLayouts)

app.get('/', (req, res) => {
  console.log(req.url)
  //res.sendFile(__dirname + '/views/index.html')
  res.render('index')
})

app.get('/about', (req, res) => {
  console.log(req.url)
  res.render('about')
})

app.get('/works', (req, res) => {
    console.log(req.url)
    res.render('works')
  })

  app.get('/gallery', (req, res) => {
    console.log(req.url)
    res.render('gallery')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
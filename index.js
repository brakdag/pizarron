const express = require('express');
const path = require('path')
const routes = require('./routes')
const app = express()
const port=3006

app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname,'static/css')))
app.use(express.static(path.join(__dirname, "static/js")))
app.use(express.static(path.join(__dirname, "static/img"))) 
app.use(express.static(path.join(__dirname, "node_modules"))) 

app.set('view engine', 'ejs')

app.use('/', routes)
app.listen(port, () => {
 console.log(` LAWIMET - Pizzarrón  \n\n Servidor corriendo en: \n http://localhost:${port}`)
})
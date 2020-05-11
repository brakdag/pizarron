const express = require('express')
const router = express.Router();

var bufer=""

router.get('/set', function (req, res) {
bufer = req.query.code
//console.log(bufer)
res.send(true)
});

router.get('/get', function (req, res) {
//console.log(bufer)
res.send(encodeURI(bufer))
});



router.get('/', (req, res) => { res.render('index.ejs') })
router.get('/pizarra', (req, res) => { res.render('pizarra.ejs') })
router.get('/md', (req, res) => { res.render('md.ejs') })
router.get('/output', (req, res) => { res.render('output.ejs') })


module.exports=router

const express = require('express')

const router = express.Router();

router.get('/intradiario', function (req, res) {
});

router.get('/', (req, res) => { res.render('index.ejs') })
router.get('/pizarra', (req, res) => { res.render('pizarra.ejs') })

module.exports=router

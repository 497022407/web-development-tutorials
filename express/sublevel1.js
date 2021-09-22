const express = require("express");
const router = express.Router()


router.get('/', (req, res) =>{
    res.send("sublevel");
})

router.get('/sublevel2', (req, res) =>{
    res.send("sublevel2");
})

module.exports = router;
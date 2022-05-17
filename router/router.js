const router = require('express').Router();

router.get("/", (req, res)=>{
    req.json({message: "Hello world"})
})

module.exports = router
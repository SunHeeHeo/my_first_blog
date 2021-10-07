const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    try {
        //res.send({result: "success"});
        res.render('write.ejs')
    } catch (error) {
        console.log(`${req.method} ${req.originalUrl} : 페이지를 불러올수 없습ㄴ디ㅏ`);
        res.render("err");
        return;
    }

});

module.exports = router;


const express = require("express");
const User = require("../schemas/user");
const router = express.Router();
const jwt = require("jsonwebtoken");

//회원가입 API

// router.post("/users", async(req,res) =>{
//     const {nickname, password, confirmPassword} = req.body;

//     if (password !== confirmPassword) {
//         res.status(400).send ({
//             errorMessage: "패스워드가 패스워드 확인란과 다릅니다."
//         });
//         return;
//     }
//     const existUsers = await User.findOne({nickname});
//     if (existUsers) {
//         res.status(400).send({
//             errorMessage: "입력하신 닉네임이 이미 사용 중입니다!"
//         });
//         return;
//     }
//     // const user = new User({nickname, password});
//     // await user.save(); //몽고디비 형식으로 바꾸기!
//         await User.create({nickname,password});
//         res.status(201).send({});
// })
//PATH 경로로 못읽어 오는 문제 
//api 제대로 연결되어 있는 제대로 

// 회원가입 API - POST
router.post("/", async (req, res) => {
    const { nickname, password, confirmPassword } = req.body;
  
    if (password !== confirmPassword) {
      res.status(400).send({
        errorMessage: "패스워드가 패스워드 확인란과 다릅니다.",
      });
      console.log("뿅!")
      return;
    }
  
    // email or nickname이 동일한게 이미 있는지 확인하기 위해 가져온다.
    const existsUsers = await User.findOne({nickname});
    if (existsUsers) {
      res.status(400).send({
        errorMessage: "이메일 또는 닉네임이 이미 사용중입니다.",
      });
      return;
    }
  
    const user = new User({ nickname, password });
    await user.save();
  
    res.status(201).send({});
  });

//로그인 API

router.post("/auth", async(req,res) => {
    const {nickname, password} = req.body;
    const user= await User.findOne({nickname});
    
    if (!user||password !== user.password) {
      console.log('ㅋ')
        res.status(400).send({
            errorMessage: "이메일 또는 패스워드가 틀렸습니다",
        });
        return;
    }
    res.send({
        token: jwt.sign({userId: user.userId}, "ellie-key"),
    });
});

module.exports = router;
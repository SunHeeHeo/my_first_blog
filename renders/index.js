const express =  require("express");
const viewRouter = require("./view");
const mainRouter = require("./main");
const writeRouter = require('./write');
const modifyRouter = require("./modify");
const signUpRouter = require('./signUp');
const signInRouter = require('./signIn');

const router = express.Router();

router.use("/", mainRouter);
router.use("/view", viewRouter);
router.use("/write", writeRouter);
router.use("/modify", modifyRouter);
router.use("/user", signUpRouter);
router.use("/auth", signInRouter);

module.exports = router;


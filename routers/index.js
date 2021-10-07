const express = require("express");
const Posts = require("./router_Posts");
const Users = require("./users");

const router = express.Router();

router.use('/posts/', Posts);
router.use('/users/', Users);


module.exports = router;
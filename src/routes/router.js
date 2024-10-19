const express = require("express");
const Router = express.Router;

const HelloController = require("../controller/hello");

const helloController = new HelloController

const router = Router();

router.route('/hello')
    .get(helloController.sendHello)

module.exports = router;
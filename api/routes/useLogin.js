const express = require("express");
const router = express.Router();
const UserController = require('../controllers/user');
const checkAuth = require('../middleware/check-auth');

router.post("/", UserController.user_login);
router.post("/accessKeyCreate", checkAuth.tokenVerify, UserController.accessKeyCreate);
router.post("/secretKeyCreate", checkAuth.tokenVerify, UserController.secretKeyCreate);
router.post("/accessKeyDecrypt", checkAuth.tokenVerify, UserController.accessKeyDecrypt);
router.get("/deleteSecretKey", checkAuth.tokenVerify, UserController.deleteSecretKey);


module.exports = router;
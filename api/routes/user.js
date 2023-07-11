const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");

router.post("/register", UserController.user_signup);
router.post("/login", UserController.user_login);

router.post("/addUser", UserController.add_user);
router.put("/editUser/:id", UserController.edit_user);
router.get("/getUser", UserController.get_user);
// router.get("/getUser", UserController.get_user);
router.delete("/deleteUser/:id", UserController.delete_user);

module.exports = router;
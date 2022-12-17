const express = require('express');
const router = express.Router();
const ProfileController = require("../controllers/ProfileController");
const ToDoListController = require("../controllers/ToDoListController")
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware")

router.post("/CreateProfile",ProfileController.CreateProfile);
router.post("/UserLogin",ProfileController.UserLogin)
router.get("/SelectProfile",AuthVerifyMiddleware,ProfileController.SelectProfile)
router.post("/UpdateProfile",AuthVerifyMiddleware,ProfileController.UpdateProfile)


router.post("/CreateToDo",AuthVerifyMiddleware,ToDoListController.CreateToDo);
router.get("/SelectToDo",AuthVerifyMiddleware,ToDoListController.SelectToDo);
router.get("/UpdateToDo",AuthVerifyMiddleware,ToDoListController.UpdateToDo);

module.exports = router;



const express = require("express");
const userController = require("../controllers/useController");

const router = express.Router();

router.post("/create", userController.create);
router.get("/viewall", userController.viewAll);
router.get("/profile/:id", userController.profileView);
router.put("/update/:id", userController.update);
router.delete("/delete/:id", userController.delete);

module.exports = router;
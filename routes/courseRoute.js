const express = require("express");
const courseController = require("../controller/courseController");
const router = express.Router();

router.get("/getAllCourse", courseController.getAllCourse);
router.get("/getCourse/:id", courseController.getCourse);
router.post("/addCourse", courseController.addCourse);
router.patch("/updateCourse/:id", courseController.updateCourse);

module.exports = router;
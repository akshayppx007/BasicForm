const express = require("express");
const { addForm, getAllForms } = require("../controller/formController");
const router = express.Router();

router.route("/add-form").post(addForm);
router.route("/forms").get(getAllForms);


module.exports = router;

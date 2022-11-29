const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const constant = require("../constants/constant.json");
const AS = require("../services/ArticleService");

router.get(constant.GET, AS.getById);

router.post(constant.POST, upload.single("CoverPage"), AS.addData);

router.delete(constant.DELETE, AS.deleteData);

router.put(constant.PUT, AS.updateData);

module.exports = router;

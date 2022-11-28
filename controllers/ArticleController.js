const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload")

const AS = require("../services/ArticleService");



router.get("/list/:ArticleId", AS.getById);

router.post("/add",upload.single('titleImage'),AS.addData);

router.delete("/delete/:ArticleId", AS.deleteData);

router.put("/update", AS.updateData);



module.exports = router;

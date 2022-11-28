const model = require("../models/ArticleModel");
// const upload = require("../middleware/upload")

exports.testData =
  ("/",
  (req, res) => {
    res.json({ message: "Greeting api" });
  });

exports.addData = (req, res) => {
  const newArticleModel = new model({
    ArticleId: req.body.ArticleId,
    Title: req.body.Title,
    Description: req.body.Description,
    AuthorFirstName: req.body.AuthorFirstName,
    AuthorLastName: req.body.AuthorLastName,
    AuthorEmailId: req.body.AuthorEmailId,
    ArticleCreatedDate: req.body.ArticleCreatedDate,
    ArticlePublishedDate: req.body.ArticlePublishedDate,
    AuthorPhoneNumber: req.body.AuthorPhoneNumber,

  });
  console.log(newArticleModel);

  newArticleModel.save((err) => {
    if (err) {
      console.error(err);
      // res.sendStatus(400);
    }
    res.send("Nem employee added.");
  });
};

exports.getById = (req, res) => {
  console.log(req.params.ArticleId);
  model.find(
    {
      ArticleId: parseInt(req.params.ArticleId),
    },
    (err, results) => {
      console.log(results);
      if (!err) {
        res.json(results);
      }
    }
  );
};

exports.deleteData = (req, res) => {
  model.deleteOne(
    {
      ArticleId: req.params.ArticleId,
    },
    (err, results) => {
      if (!err) {
        res.json({ message: "Record Deleted." });
      }
    }
  );
};

exports.updateData = (req, res) => {
  model.updateMany(
    {
      ArticleId: req.body.ArticleId,
    },
    {
      ArticleId: req.body.ArticleId,
      Title: req.body.Title,
      Description: req.body.Descriptio,
      AuthorFirstName: req.body.AuthorFirstName,
      AuthorLastName: req.body.AuthorLastName,
      AuthorEmailId: req.body.AuthorEmailId,
      ArticleCreatedDate: req.body.ArticleCreatedDate,
      ArticlePublishedDate: req.body.ArticlePublishedDate,
      AuthorPhoneNumber: req.body.AuthorPhoneNumber
    },
    (err, result) => {
      if (result.modifiedCount) {
        res.status(200);
        res.json({ message: "Record updated." });
      }
    }
  );
};

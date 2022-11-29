const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const constant = require("../constants/constant.json");

const ArticleSchema = new Schema(
  {
    ArticleId: {
      type: Number,
    },
    Title: {
      type: String,
    },
    Description: {
      type: String,
    },
    AuthorFirstName: {
      type: String,
    },
    AuthorLastName: {
      type: String,
    },
    AuthorEmailId: {
      type: String,
    },
    ArticleCreatedDate: {
      type: Date,
    },
    ArticlePublishedDate: {
      type: Date,
    },
    AuthorPhoneNumber: {
      type: Number,
      min : [10],
      max : [10]
    },
    CoverPage: {
      type: String,
    },
  },
  { timestamps: true },
  { versionKey: false }
);

module.exports = new mongoose.model(constant.collectionName, ArticleSchema);

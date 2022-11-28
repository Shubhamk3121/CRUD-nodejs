const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
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
    type: String,
  },
  ArticlePublishedDate: {
    type: String,
  },
  AuthorPhoneNumber: {
    type: Number,
  },
  titleImage: {
    typr:String
  },
});
// ,{timestamps:false}
module.exports = new mongoose.model("Articles", ArticleSchema);

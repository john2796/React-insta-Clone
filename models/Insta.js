const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InstaDataSchema = new Schema(
  {
    text: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("instadata", InstaDataSchema);

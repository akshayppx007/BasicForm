const mongoose = require("mongoose");

const formSchema = mongoose.Schema(
  {
    usage: {
      type: String,
    },
    appGoal: [
      {
        type: String,
      },
    ],
    userExperiance: {
      type: Number,
    },
    improvementSuggestion: {
        type: String
    },
    birthDate: {
        type: Date
    }
  },
  {
    timestamps: true,
  }
);

const Form = mongoose.model("Form", formSchema);
module.exports = Form;

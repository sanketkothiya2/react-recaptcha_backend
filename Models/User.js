const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    email: {
      type: String
    },
    phone: {
      type: String
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongoose.model("User", UserSchema);

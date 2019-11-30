const mongoose = require("mongoose");
const useRoleSchema = mongoose.Schema({
  role: String,
  projects: Number
});
mongoose.exports = mongoose.model("user", useRoleSchema);

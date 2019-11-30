const mongoose = require("mongoose");
const user = require("./models/user");
const userRole = require("./models/user_roles");

//connect to database
mongoose
  .connect(`mongodb://localhost:27017/task_1`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to database!!");
  })
  .catch(err => {
    console.log("db connection error");
  });

//entering user details

const user1 = new user({
  name: "Prakash",
  email: "prakash456@live.com",
  password: "prakash@123"
});
//entering user_roles

const role1 = new userRole({
  role: "Software developer",
  projects: 2
});

//save details to database
user1.save((err, res) => {
  if (err) console.log("error detected");
  console.log(res);
});
role1.save((err, res) => {
  if (err) console.log("error detected");
  console.log(res);
});

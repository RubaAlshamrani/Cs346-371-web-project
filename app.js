// to control our website
const http = require("http");
const express = require("express");
const app = express();
const port = 3000; //اي رقم عادي هنا
app.use(express.static("assets"));
app.use(express.urlencoded({ extended: true }));
const NewUser=require("./models/schema");
const User=require("./models/schema");


const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://ruba:mongo2023@cluster0.bxrb8kx.mongodb.net/all-data?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`); //تطلع ف   terminal or console
    });
  })

  .catch((err) => {
    console.log(err);
  });

app.readFile;

http.createServer(function (req, res) {
  app
    .readFile("./login.html", function (err, data) {
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    })
    .listen(port);
});

app.post("/login", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((result) => {  console.log(req.body);
    })//ابغى هنا يوديني الصفحة الرئيسية
    .catch((err) => {console.log(err)});
    res.end("DONE");
});

app.post("/signup", (req, res) => {
  const newuser = new NewUser(req.body);
  newuser
    .save()
    .then((result) => {  console.log(req.body);
    })//ابغى هنا يوديني الصفحة الرئيسية
    .catch((err) => {console.log(err)});
      res.end("DONE");
});
app.get("/main.html", (req, res) => {
  res.redirect("/project/main.html");

});

app.get("/signup", (req, res) => {
  console.log(req.body);
});
app.get("/login", (req, res) => {
  res.redirect("/project/main.html");
});

app.get("/a", (req, res) => {
  res.redirect("http://expressjs.com/en/4x/api.html#res"); //لو حطيت هذا المسار بيودينا هذا الرابط
});

app.use((req, res) => {
  res.status(404).send("Sorry can't find that");
});

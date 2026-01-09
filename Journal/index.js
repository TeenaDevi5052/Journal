import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
// main page
app.get("/", (req, res) => {
  res.render("home.ejs");
});

// go to blog form
app.post("/submit", (req, res) => {
  res.render("blog.ejs");
});

// handle blog post
app.post("/blog", (req, res) => {
  const content = req.body.thoughts;
  const topic = req.body.topic;

  if (content && topic) {
    res.render("home.ejs", { writtenValue: content, topicReturn: topic });
  } else {
    res.render("blog.ejs", { noReturn: "Expand Your Thoughts!" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

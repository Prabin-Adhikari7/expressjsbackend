const express = require('express');
const app = express();
const userRouter= require("../routes/userRoutes");
const noteRouter = require("../routes/noteRoutes");
const mongoose = require('mongoose');
const port = 3000
app.use(express.json());
app.use("/users", userRouter);
app.use("/note", noteRouter);


app.get('/', (req, res) => {
  res.send('Hello Sir!');
})

// app.get('/news', (req, res) => {
//     res.status(200).json(news);
//   })
//   app.get('/random', (req, res) => {
//     let index = Math.floor(Math.random() * news.length);
//     let randomNews = news[index]; // Rename the variable to avoid conflict
//     res.status(200).json(randomNews);
// });
// mongoose for the connection with database..
mongoose.connect("mongodb+srv://admin:admin@cluster0.kfrwhps.mongodb.net/?retryWrites=true&w=majority") 
.then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
})
.catch((error) => {
  console.error("Error occurred:", error);
});
const express = require("express");
const app = express();
const cors = require("cors");
const OpenAI = require("openai");
const bodyParser = require('body-parser')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Hello from our server!");
});

app.post("/images/create", async (req, res) => {
  const openai = new OpenAI({
    apiKey: "YOUR_API_KEY_HERE",
  });

  const image = await openai.images.generate({
    model: "dall-e-3",
    prompt: req.body.term,
  });

  res.send(image.data);
});

app.listen(5000, () => {
  console.log("server listening on port 8080");
});

const express = require("express");
const cors = require("cors");
const turtles = require("./data/turtles");

const app = express();
app.use(cors());

// Current index
let currentIndex = 0;

// Utility: build standard response
function buildResponse() {
  return {
    index: currentIndex,
    item: turtles[currentIndex],
    total: turtles.length
  };
}

// Message API : 
app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to the Sea Turtle API </h1>
    <p>This backend provides turtle information for your project.</p>
    <h3>Available endpoints:</h3>
    <ul>
      <li><b>/item</b> → Get the current turtle</li>
      <li><b>/item/next</b> → Get the next turtle</li>
      <li><b>/item/prev</b> → Get the previous turtle</li>
      <li><b>/item/<i>id</i></b> → Get turtle by index (0, 1, 2...)</li>
    </ul>
    <p>Example: <a href="/item">Click here to see the current turtle</a></p>
  `);
});


// Rooad : GET /item -> retourne the current item
app.get("/item", (req, res) => {
  res.json(buildResponse());
});

// Road : GET /item/next -> item next
app.get("/item/next", (req, res) => {
  currentIndex = (currentIndex + 1) % turtles.length;
  res.json(buildResponse());
});

// Road : GET /item/prev -> item previous
app.get("/item/prev", (req, res) => {
  currentIndex = (currentIndex - 1 + turtles.length) % turtles.length;
  res.json(buildResponse());
});

// Road : GET /item/:id -> access a specific item
app.get("/item/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id) || id < 0 || id >= turtles.length) {
    return res.status(400).json({ error: "Invalid index" });
  }

  currentIndex = id;
  res.json(buildResponse());
});

// Launch the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});



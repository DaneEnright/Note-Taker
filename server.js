const fs = require("fs");
const express = require("express");
const path = require("path");
const util = require("util");
// const db = require("./Develop/db/db.json");

const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 4000; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

//- `GET /notes` should return the `notes.html` file.

// - `GET *` should return the `index.html` file.

// The following API routes should be created:

// - `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

// - `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/index.html"))
);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/notes.html"))
);

app.get("/api/notes", (req, res) => res.readFile(db.json));

app.post("/api/notes", (req, res) => {
  const newNote = req.body;
});

class DB {
  read() {
    return readFileAsync();
  }
  write() {
    return writeFileAsync();
  }
}

// DB.read();
// DB.write();

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

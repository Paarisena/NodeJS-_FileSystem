import express from "express";
import fs from "fs";
import path from "path";
import os from "os";

const server = express();
const port = 8000;


const folderPath = path.join(os.tmpdir(), "timestamps");


server.use(express.json());

server.get("/", (req, res) => {
  const endpoints = server._router.stack
    .filter((r) => r.route)
    .map((r) => ({
      path: r.route.path,
      method: Object.keys(r.route.methods)[0].toUpperCase(),
    }));

  res.json({ endpoints });
});


server.get("/create-file", (req, res) => {

  const now = new Date();
  const timestamp = now.toLocaleString("en-GB", { timeZone: "UTC" });


  const message = `This file is created by the user ${
    os.userInfo().username
  } and created at ${timestamp}`;

  
  const filename = `${now.getDate().toString().padStart(2, "0")}${(
    now.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}${now.getFullYear()}_${now
    .getHours()
    .toString()
    .padStart(2, "0")}${now.getMinutes().toString().padStart(2, "0")}${now
    .getSeconds()
    .toString()
    .padStart(2, "0")}.txt`;

  
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }


  const filePath = path.join(folderPath, filename);

 
  fs.writeFile(filePath, message, (err) => {
    if (err) {
      return res.status(500).send("Error writing file");
    }
    res.send(`File created: ${filename} stored on ${folderPath}`);
  });
});


server.get("/list-all-files", (req, res) => {
  try {
   
    const files = fs.readdirSync(folderPath).map((filename) => {
      return path.join(folderPath, filename);
    });
   
    res.json({ files });
  } catch (err) {
    
    res.status(500).send("Error listing files");
  }
});


server.get('/file-contents/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(folderPath, filename);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }
    res.send(data);
  });
});


server.listen(port, () => {
  console.log(`${new Date().toString()}: Server listening on ${port}`);
});

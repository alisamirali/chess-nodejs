import express from "express";
import path from "path";
import cors from "cors";
import http from "http";
import wsChess from "./ws-chess.js";

const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Static files
app.use("/public", express.static(path.join(__dirname, "public")));

// API route
app.use("/api", (_req, res) => res.send({ info: "Server is running" }));

// Create HTTP server
const server = http.createServer(app);

// Start server
server.listen(PORT, () => {
  console.log(`---- Server started on port: ${PORT} ----`);
});

// WebSocket setup
wsChess(server);

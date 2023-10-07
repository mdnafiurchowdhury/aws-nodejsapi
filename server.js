import express from "express";
import router from "./routes/routes.js";
import bodyParser from 'body-parser';
import cors from 'cors';
import Connection from "./database/db.js";

const app = express();
app.use(cors());

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));  // Corrected the usage here

// Use router
app.use('/', router);

const PORT = process.env.PORT || 8000;

Connection();

app.listen(PORT, () => console.log(`SERVER is running on PORT ${PORT}`));

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import convertRoute from "./src/routes/convert.routes";
import bodyParser from "body-parser";

//For env File
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const projectName: string = "currency-converter";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.locals.appTitle = projectName;
app.use(express.static("public"));
app.use(cors());

// Routes
app.use("/fe", express.static("public"));
app.use("/api/convert", convertRoute);

app.listen(port, () => {
  console.log(`Server is Running at http://localhost:${port}`);
});

export default app;

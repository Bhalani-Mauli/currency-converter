import express from "express";
import dotenv from "dotenv";
import indexRoute from "./src/routes/convert.routes";

//For env File
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const projectName: string = "currency-converter";

app.locals.appTitle = projectName;
app.use(express.static("public"));

// Routes
app.use("/fe", express.static("../public"));
app.use("/api/convert", indexRoute);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

export default app;

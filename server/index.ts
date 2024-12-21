import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    console.log("Serving index.html")
    res.sendFile("assets/index.html", { root: __dirname });
});

app.get("/assets/*", (req: Request, res: Response) => {
    console.log(`Serving asset: ${req.path}`)
    res.sendFile(`${req.path}`, { root: __dirname });
});

app.get("/dist/client/*", (req: Request, res: Response) => {
    console.log(`Serving dist: ${req.path}`)
    res.sendFile(`${req.path}`, { root: `${__dirname}/..`});
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
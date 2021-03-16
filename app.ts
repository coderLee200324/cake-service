import app from "./src/index";

const host:string = "localhost";
const port:number = 3000;
app.listen(port, host, () => {
  console.log(`app started at http://${host}:${port}`);
});

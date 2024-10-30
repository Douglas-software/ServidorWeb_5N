import express, { Application } from "express";
import { idiomaRouter, instructorRouter, aprendizajeRouter, usuarioRouter, signRouter} from "./routes"
import { jwtMiddleware } from "./middleware/jwt";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/idiomaRoute", idiomaRouter);  
app.use("/instructorRoute", instructorRouter);
app.use("/aprendizajeRoute", aprendizajeRouter);
app.use("/usuarioRoute", jwtMiddleware,usuarioRouter);
app.use("/sign", signRouter);

app.listen(PORT, () => {
  console.log(`El servidor funcó en http://localhost:${PORT}`);
});
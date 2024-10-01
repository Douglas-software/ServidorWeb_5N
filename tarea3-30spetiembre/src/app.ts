import express, {Application} from 'express'
import { aprendizajeRoute } from './routes/aprendizaje.route'
import { idiomaRoute } from './routes/idioma.route'
import { instructirRoute } from './routes/instructor.route'

const app: Application = express()
const port = 3000


app.use(express.json())

app.use('/aprendiza.route',require("./routes/aprendizaje.route"))
app.use('/idioma.route', require("./routes/idioma.route"))
app.use('/instructor.route', require("./routes/instructor.route") )

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
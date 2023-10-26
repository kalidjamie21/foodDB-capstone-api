import express from 'express'
import axios from 'axios'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

const baseURL = 'https://api.edamam.com'
const API_ID = '85a188c7'
const APP_KEY = 'a8625290af811d0f10308ebce327e566'

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.post("/food-detail", async (req, res) => {
    
    try {
        const response = await axios.get(baseURL + )

    } catch (error) {
        console.log(error.response.data)
        res.status(404)
    }
})


app.listen(port, (req, res) => {
    console.log("Server running on port: " + port)
})
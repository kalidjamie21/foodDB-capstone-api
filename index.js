import express from 'express'
import axios from 'axios'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

const baseURL = 'https://api.edamam.com'
const APP_ID = '85a188c7'
const APP_KEY = 'a8625290af811d0f10308ebce327e566'

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.post("/food-detail", async (req, res) => {
    
    try {
        const response = await axios.get(baseURL + `/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${req.body.query}`)
        const result = response.data

        console.log(result)

        res.render("food-detail.ejs", {
            text: result.text,
            details: result.hints
        })
        
    } catch (error) {
        console.log(error.response.data)
        res.render("index.ejs", {
            errors: error.response.data
        })
    }
})

app.listen(port, (req, res) => {
    console.log("Server running on port: " + port)
})
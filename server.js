const express = require('express')
const dotenv = require('dotenv')
const { connectDB } = require('./src/db')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./src/graphql/schema')
const path = require('path')

dotenv.config()

const app = express()

connectDB()

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

// set the view engine to ejs
app.set('view engine', 'ejs');

// update location of views folder that res.render pulls from
app.set('views', path.join(__dirname, '/src/templates/views'));

/* Initialize Routes */
require("./src/routes")(app)

app.listen(process.env.PORT, () => {
    console.log(`Server now running on PORT ${process.env.PORT}`)
});
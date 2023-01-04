const express = require('express')
const dotenv = require('dotenv')
const { graphqlHTTP } = require('express-graphql')
const { connectDB } = require('./src/db')
const schema = require('./src/graphql/schema')

dotenv.config()

const app = express()

connectDB()

app.set('view engine', 'ejs')
app.set('views', './src/templates/views')

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/profile', (req, res) => {
    res.render('profile')
})
app.get('/register', (req, res) => {
    res.render('register')
})
app.get('/user', (req, res) => {
    res.render('user')
})

app.listen(process.env.PORT, () => {
    console.log(`Express server listening on port ${process.env.PORT}.`)
})
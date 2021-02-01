const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./blogRoutes/blogRoutes')

const { result } = require('lodash')

const app = express()

//connect to db
const dbUrl = 'mongodb+srv://kene:kene1234@cluster0.n6pqp.mongodb.net/node-tut?retryWrites=true&w=majority'
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => console.log('connected to database'))
.catch((err) => console.log(err))


//listen for app connection
app.listen(3000)

//set up ejs
app.set('view engine', 'ejs')

// middleware & static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(morgan('dev'))


app.get('/', (req, res) => {
  res.redirect('/blogs')
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'})
})

app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

//blog routes
app.use('/blogs', blogRoutes)
app.use((req, res) => {
    res.status(404).render('404', {title: '404'})
}) 

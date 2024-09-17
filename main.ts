import users from './routers/users'
import courses from './routers/courses'
import sections from './routers/sections'
import express from 'express'
import cors from 'cors'
import path from "path";

let app = express()

// Injects Access-control-allow-origin into server response header so website is accessible through any browser
app.use(cors())
// Parse incoming data into JSON format
app.use(express.json()) //Maybe redundant
// Handle PUT and POST requests data as strings or arrays from html forms
app.use(express.urlencoded({ extended: true }));

// Check for requests on this port
app.listen(9002)

// Express.static is used to serve static files. Path provided to express.static is relative to the app's
// launch directory.
// !!! app.use(express.static('front_end')) will also work if the file we serve is in the
// same directory as the app's launch location.
app.use(express.static(path.join(__dirname, './front_end')));

// Is this how we should access start page?
app.get("/", async (req, res) => {
    res.redirect('/start.html')
})

app.use('/users', users)
app.use('/courses', courses)
app.use('/sections', sections)


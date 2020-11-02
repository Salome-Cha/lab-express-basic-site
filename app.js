const { response } = require('express');
const express = require('express');
const app = express(); // app represents our server.

app.use(express.static('public'));

// Creating a "home" route
app.get('/home', (request, response) => {
    response.sendFile(__dirname + '/public/views/home.html');  
});

// Creating a "about" route.
app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/public/views/about.html' )
})

// Creating a "photo-gallery" route.
app.get('/photo-gallery', (request, response) => {
    response.sendFile(__dirname + '/public/views/photo-gallery.html' )
})

// Creating a "works" route.
app.get('/works', (request, response) => {
    response.sendFile(__dirname + '/public/views/works.html' )
})

// Make this server listening on port 3000.
app.listen(3000);
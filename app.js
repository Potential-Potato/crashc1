const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const blogRoutes = require('./routes/blogRoutes');


//express app kinda functions like the server.js
const app = express();

//connect to mongoDB
const dbURI = 'mongodb+srv://seer:seer@nodetuts.izam67r.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI)
  .then(function(result){
    app.listen(3000);
    console.log('Listening');
  })
  .catch(function(err){
    console.log(err);
  });


//register view engine
app.set('view engine', 'ejs');
app.set('views', 'view'); //directory



//middleware and static files(css img)
app.use(express.static('css')); //css is a folder
app.use(morgan('dev'));

//passes the data from the user inputs from *create.ejs*
app.use(express.urlencoded({ extended: true}));  


//response to request
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

//blog import
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
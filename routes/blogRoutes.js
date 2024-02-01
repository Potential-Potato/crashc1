const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();

//blogs route
  router.get('/', blogController.blog_index);
  
// '/blogs' is the request (url)
  router.post('/', blogController.blog_create_post);
  
  
  router.get('/create', blogController.blog_create_get);


  router.get('/:id', blogController.blog_details);

//delete
  router.delete('/:id', blogController.blog_delete);
  


  module.exports = router;
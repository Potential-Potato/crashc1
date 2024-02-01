//imports (3rd properties etc)
const http = require('http');
const fs = require('fs');
const _ = require('lodash');

//request and responds to server
const server = http.createServer(function(req, res){
    //lodash
    const num = _.random(1, 10);
    console.log(num);

    const greet = _.once(function(){
        console.log('hello');
    });

    greet();
    greet();

    //set header content type
    res.setHeader('Content-Type', 'text/html');


    //path the user visits
    let path = './html/';
    switch(req.url){ //req.url = link
        case '/':
            path = path + 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'About.html';
            res.statusCode = 200; //url is good
            break;
        case '/about-me': 
            res.statusCode = 301; //meaning the url is moved
            res.setHeader('Location', '/about'); //redirets the url
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404; //url is not found
            break;
    }



    //send an html file
    fs.readFile(path, function(err, data){
        if (err){
            console.log(err);
            res.end();
        }else{
            
            res.write(data);
            res.end();
        }
    });

});

server.listen(3000, 'localhost', function(){ //3000 is the port localhost is url
    console.log('listening for reqeust on port 3000');
});


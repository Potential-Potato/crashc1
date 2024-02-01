const fs = require('fs'); //anjing

/*
// Reading files

fs.readFile('./docs/blog12.txt', function(err, data) {
    if (err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log('hatdog'); //this will run first before fs.
*/

/*
// Writing files

fs.writeFile('./docs/blog2.txt', 'hello neil', function(){ //rewrites the content inside blog1 if theres no file it will create the file
    console.log('file was written');  
});
*/

/*
//Directories
if(!fs.existsSync('./assets')){ //checks if the assets folder already exist if yes it wont run
    fs.mkdir('./assets', function(err){
        if(err){
            console.log(err);
        }
        console.log('folder was created');
    });
} else{ //deletes folder if it already exist
    fs.rmdir('./assets', function(err){ 
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    });
}
*/

/*
//deleting files

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', function(err){
        if(err){
            console.log(err);
        }
        console.log('file is deleted');
    });
}
*/
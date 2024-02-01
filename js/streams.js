const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { //reads data
    encoding: 'utf8'//sets the chunk as it comes in (readable format)
});

const writeStream = fs.createWriteStream('./docs/blog4.txt'); //writes data 

// readStream.on('data', function(chunk){ code2
//     console.log('---New Chunk---');
//     console.log(chunk);
//     writeStream.write('\nNew Chunk\n');
//     writeStream.write(chunk); //writes the data in the chunk in blog4
// });


//piping
readStream.pipe(writeStream); //does the same thing as the code2
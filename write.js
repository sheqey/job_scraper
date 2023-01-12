var fs = require('fs');
 const path = require('path');





fs.mkdir('/project2', function() {
    fs.writeFile('/Output.txt', 'Hello world!\n', function() {
        fs.readFile('/Output.txt', 'utf-8', function(err, data) {
            console.log(data);
        });
    });



});
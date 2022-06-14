const fs = require('fs');
const csv = require('csv');

async function readCSV() {
    const fileName = "./retail_definitivo.csv";
    let data = [];

    var input = fs.createReadStream(fileName);
    var parser = csv.parse({
        columns: true,
        relax: true
    });

    parser.on('readable', () => {
        while(line = parser.read()) {
            //inserter.push(line);
            data.push(line);
            //console.log(line);
        }
    });

    parser.on('end', () => {
        console.log(data);
        /* inserter.drain = function() {
          doneLoadingCallback();
        } */
      });

    input.pipe(parser);
}

readCSV();

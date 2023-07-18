const fs = require('fs');

fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) console.error(err);
    const texts = JSON.parse(data);

    console.log(texts.menu[1]);
});




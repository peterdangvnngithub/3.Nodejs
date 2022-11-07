const fs = require('fs');

//const book = {
//	title: 'Ego is the Enemy',
//	author: 'Ryan Holiday',
//};

//const bookJSON = JSON.stringify(book);
//fs.writeFileSync('1-json.json', bookJSON);

//const dataBuffer = fs.readFileSync('1-json.json', 'utf-8');
//console.log(dataBuffer);

const info = fs.readFileSync('1-json.json');
const data = JSON.parse(info);

data.name = 'Peterdang';
data.age = 32;

const userJSON = JSON.stringify(data);

fs.writeFileSync('1-json.json', userJSON);

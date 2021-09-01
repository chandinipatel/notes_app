const fs = require('fs')
const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}
//converting javascript object to JSON 

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)
//console.log(bookJSON)

//converting JSON to javascript object

//const parsedData = JSON.parse(bookJSON)
//console.log(parsedData.author)

/*const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)
console.log(dataBuffer.toString())
*/

//load and parse JSON data
//first create a file

fs.readFileSync('JSON.json').toString();

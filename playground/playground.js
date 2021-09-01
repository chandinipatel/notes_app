const fs = require('fs')
const jsondata = fs.readFileSync('.\\playground\\JSON.json').toString()
// convert from json string to javascript object
const obj = JSON.parse(jsondata)
obj.name = 'chandini'
//converting from javascript object to json string


fs.writeFileSync('.\\playground\\JSON.json', JSON.stringify(obj))

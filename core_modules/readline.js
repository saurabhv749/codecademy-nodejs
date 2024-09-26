const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shopping_list.txt')
})

const printData = (data)=>{
  console.log(`Item: ${data}`)
}

myInterface.on('line',printData)
const fs = require('fs')

const filename='secret.txt'
const fileReaderCallback = (err,data)=>{
    if(err){
        console.log(`Something went wrong: ${err}`)
        process.exit(1)
    }
    console.log(`Secret: ${data}`)
}

fs.readFile(filename,'utf-8',fileReaderCallback)

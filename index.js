const Logger = require('./Logger')
const fs = require('fs')
const path = require('path')

// instantiate a new logger
const logger = new Logger()

logger.on('message', data => {
    console.log('Called Listener:', data)

//    fs.appendFile(path.join(__dirname, '/logger', 'logger.txt'), `\n ${data}`, err => {
//         if (err) throw err
//         console.log('file written...')
//     })
fs.appendFile(path.join(__dirname, '/logger', 'logger.txt'), `\n ${JSON.stringify(data)}`, err => {
    if (err) throw err
    console.log('file written...')
})
   
})


logger.log('Hello there')

// const Logger = require('./Logger')
// const fs = require('fs')
// const path = require('path')

// // instantiate a new logger 

// const logger = new Logger()

// // Create write stream
// const wstream = fs.createWriteStream(
//   path.join(__dirname, '/logger', 'logger.txt'), 
//   { 
//     flags: 'a', // append to file
//     autoClose: false // leave fd open for more writing after buffer empties
//   }
// );

// logger.on('message', data => {
//   console.log('Called Listener:', data)
//   wstream.write(`${data.uuid} - ${data.log}\n`); 
// })


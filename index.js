const Logger = require('./Logger')
const fs = require('fs')
const path = require('path')


const logger = new Logger()

logger.on('message', data => {
    console.log('Called Listener:', data)
    fs.appendFile(path.join(__dirname, '/logger', 'logger.txt'), `\n ${data}`, err=>{
        if(err) throw err
        console.log('file written...')
    })
})


logger.log('Hello there')




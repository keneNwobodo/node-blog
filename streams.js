const fs = require('fs') 

const reademestream =  fs.createReadStream('./docs/docs3.t', {encoding: 'utf8'})
const writestream = fs.createWriteStream('./docs/docs4.t')

// reademestream.on('data', (chunk) => {
//     console.log('----New chunk----')
//     console.log(chunk)
//     writestream.write('\n--your new chunk--\n')
//     writestream.write(chunk)
// })

reademestream.pipe(writestream)
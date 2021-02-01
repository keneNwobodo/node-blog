
const fs = require('fs')
const { people, ages } =  require('./module')

console.log(people , ages)
const os = require('os')
console.log(os.platform(), os.homedir())


//read file
fs.readFile('./docs/docs1.t', (err, data) => {
   if(err) {
       console.log(err)
   }
   console.log(data.toString())
})

//write file
// fs.writeFile('./docs/docs1.t', 'hello bro', () => {
//     console.log('file was written')
// })

//directories

if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if(err) {
            console.log(err)
        }
        console.log('folder created')
    })
} else {
    fs.rmdir('./assets', (err) => {
       if(err) {
           console.log(err)
       }
       console.log('folder removed')
    })
}

// deleting files
if(fs.existsSync('./docs/deleteme.t')){
    fs.unlink('./docs/deleteme.t', (err) => {
        if(err) {
            console.log(err)
        }
        console.log('file deleted')
    } )
} else {
    fs.mkdir('./docs/newfile.txt', (err) => {
      if(err) {
          console.log(err)
      }
      console.log('new file created')
    })
}

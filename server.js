const http =  require('http')
const fs = require('fs')
const _ = require('lodash')


const server = http.createServer((req, res) => {

    const num = _.random(4, 10)
    console.log(num)

    const greet = _.once(() => {
        console.log('hello baby')
    })

    greet()
    greet()
    //set header content type
    res.setHeader('Content-Type', 'text/html')
    
    let path = './views/'
    switch(req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break;
            case '/contact':
                path += 'contact.html'
                res.statusCode = 200
                break;
                case '/contact-me':
                    res.statusCode = 301
                    res.setHeader('Location', '/contact')
                    res.end()
                    break
                default:
                case '/404':
                    path += '404.html'
                    res.statusCode = 404
                    break;             
    }
    //read file from a directory
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err)
            res.end()
        } else {
            res.write(data)
            res.end()
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log('server is running on port 3000')
})
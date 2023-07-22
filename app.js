const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req, res){
    if(req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.readFile('AboutUs.html', function(error, data){
            if(error){
                res.writeHead(404)
                res.write('Error: File Not Found')       
            }else {
                res.write(data)
            }
            res.end()
        })
    } else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.readFile('ContactUs.html', function(error, data){
            if(error){
                res.writeHead(404)
                res.write('Error: File Not Found')       
            }else {
                res.write(data)
            }
            res.end()
        })
    } else if(req.url === '/ajax_info'){
        res.writeHead(200, {'Content-Type': 'text/plain'})
        fs.readFile('ajax_info.txt', function(error, data){
            if(error){
                res.writeHead(404)
                res.write('Error: File Not Found')       
            }else {
                res.write(data)
            }
            res.end()
        })
    } else {
        res.writeHead(404)
        res.write('Error: Page Not Found')
        res.end()
    }
})


server.listen(port, function(error) {
    if(error){
        console.log('Something went wrong', error)
    }else{
        console.log('Server is listening on port ' + port)
    }
})

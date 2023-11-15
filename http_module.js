
// HTTP module
const http = require('http');

// we have to read file index.html
const fs = require('fs')
const path = require('path')

const app = http.createServer((req, res) => {
    // res.end("Welcome") // it will send data from server to the browser
    // we can send html 
    // res.end('<h1>Hello from server and also from arvind<h1/>')
    // we will create html file and render it to browser


    // Text/plain se pura html page me show krega and Text.html se html render hoga page pr 
    // res.writeHead(200, {
    //     'Content-Type': 'Text/plain'
    // })

    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
    //         if (err) {
    //             throw err;
    //         }
    //         else {
    //             res.end(data);
    //         }
    //     })
    // }
    // else if (req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data) => {
    //         if (err) {
    //             throw err;
    //         }
    //         else {
    //             res.end(data);
    //         }
    //     })
    // }



    // other method to do this 
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

    // so we have to send Text/css but send Text.html ho rha isiliye color change nhi ho rha so use this for this issue
    let ext = path.extname(filePath); // tells ki is file ka extension kya hai
    if (!ext) {
        filePath += '.html'
    }

    let contentType = 'text/html';
    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break;
        case '.js':
            contentType = 'text/javascript'
            break;
        default:
            contentType = 'text/html'
    }


    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
                if (err) {
                    throw err;
                }
                else {
                    res.writeHead(404, {
                        'Content-Type': contentType
                    })
                    res.end(data);
                }
            })
        }
        else {
            res.writeHead(200, {
                'Content-Type': contentType
            })

            res.end(content);
        }
    })


})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
// // NPM modules

// // Node wrap all the function in module like structure and also it has a property called require which is like passed like this 

// (
//     function (name) {
//         console.log(name);
//         var age = 20;
//     }

// )("arvind")

// // so you cannot access the age although it is declared as var
// console.log(age); //CANNOT ACCESS


// // so same like this node is wrapped up some function which can be used to import some packages 
// (function (exports, requiere, module, __dirname, __filename) {

// })
// // this is not visible to us but done in background


const color = require('cli-color');
console.log(color.bgCyan("hello arvind")); //print in cyan color (see console)



// to use the auth.js file we have to import this
// const register = require('./auth');

// register("arvind"); // prints the thing written in auth.js


// so coming multiple function by export 
const auth = require('./auth');
// use this 
auth.register('arvind'); // User arvind is registered.
auth.login('arvind', 'arvindc') // User is arvind and password is arvindc.




// ***** node js core modules

// path module
// const path = require('path');
// to know folder name use dirname
// console.log("folder name =", path.dirname(__filename)); // folder name = D:\Node_JS

// file name
// console.log("file name =", path.basename(__filename)); // file name = module.js

// extension
// console.log("extension name =", path.extname(__filename)); // extension name = .js


// parse
// console.log("Parse =", path.parse(__filename));
/*
output :-
Parse = {
  root: 'D:\\',
  dir: 'D:\\Node_JS',
  base: 'module.js',
  ext: '.js',
  name: 'module'
}
*/


// join
// console.log("Join =", path.join(__dirname, 'order', 'app.jsx'));
//output - Join = D:\Node_JS\order\app.jsx


// File system

// // making a folder using file system
// const fs = require('fs');
// const { isUtf8 } = require('buffer');
// // make directory
// fs.mkdir((__dirname, 'arvind'), (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('file created');
//     }
// })


// making file using file system
// fs.writefile(path , content in file , handle error by arrow function)
// fs.writeFile(path.join(__dirname, 'arvind', 'test.txt'), 'hello arvind', (err) => {
//     if (err) {
//         throw err;
//     } else {

//         // if you want to append the file
//         fs.appendFile(path.join(__dirname, 'arvind', 'test.txt'), ' how are you', (err) => {
//             if (err) throw err;
//             else console.log('file added');
//         })

//         console.log('file created');
//     }
// })



// Read file
// it is asynchronous method also synchronous method is present
// fs.readFile(path.join(__dirname, 'arvind', 'test.txt'), "utf8", (err, data) => {
//     if (err) {
//         throw err;
//     }
//     else {
//         console.log(data);
//     }
// }) // readfile(path ,"utf8",  arrow function)







// ********* OS Module

// const os = require('os');

// // get os type
// console.log("os type = ", os.type()); // os type =  Windows_NT

// // get platform
// console.log("os platform", os.platform()); //os platform win32

// // get architecture
// console.log("cpu architecture", os.arch());//cpu architecture x64
// // cpu details
// console.log("cpu details", os.cpus());// see output

// // memory
// console.log("free memory", os.freemem());// free memory 1249435648
// console.log("total memory", os.totalmem());// total memory 6387544064

// // computer kitna time se start hai
// console.log("uptime", os.uptime());





// *************event modules

const Emitter = require('events');
const { register } = require('module');
// !emitter can be used after registration form like to store value in database or to send mail after registration this kind of work is done by emitter
// !and also here Emitter is class so create an object 
const myEmitter = new Emitter();

// example -> isme on method hota hai
myEmitter.on('someone', (data) => {
    console.log(data);
})

// to use the upper part it is listening the event called someone and you can pass data using the emit method
myEmitter.emit('someone', {
    Name: 'Arvind'
})
// this will execute the on method and log the object in terminal


// !practical example of upper code
// !to use Emitter just extend the class Auth 
class Auth extends Emitter {
    register(username) {
        console.log("registered successfully");
        this.emit('sendMail', username);
    }
}

const auth2 = new Auth();
// Listen the emit method
auth2.on('sendMail', (username) => {
    console.log(`Mail sent to ${username}`);
})
// register hone ke bad aur bhi kaam krwane hai then again use that upper code like this
auth2.on('sendMail', (username) => {
    console.log(`Welcome ${username}`);
})


auth2.register('arvind');
// registered successfully
// Mail sent to arvind





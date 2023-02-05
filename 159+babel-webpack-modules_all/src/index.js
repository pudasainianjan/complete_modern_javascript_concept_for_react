//importing dom file into the index
//import './dom';      //  ./ means current directory  //!also we dont need to specify .js webpack will auto know 
//*when we import file, first it runs dom file and index js.. 
//when we use module like this to import a file like this, it runs the code inside that file (eg:dom.js) but //! it doesnt automatically share functions and variable with other (with the filee where imported)..
//so if we want to run particular function or var from dom,js here, we export them individyally
//now we have also added export in dom.js to addTitle and styleBody functions and contact variable, so we can import only them here like:
import {styleBody,addTitle,contact} from './dom'; 
import test, { getPremUsers } from './data';    //!note: test is default export so no braces

console.log('index file');
addTitle('testing..')  //now we can call addTitle function as we imported here...
styleBody();
addTitle(contact);


console.log('Users array from data.js',test);  //here test is users data
const premUsers = getPremUsers(test); //test contains users form data.js
console.log(test,premUsers);
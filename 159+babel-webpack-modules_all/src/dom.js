//responsible for interacting with the dom
console.log('dom file');

const body = document.querySelector('body');

/*export*/ const styleBody = () =>{ //exported to use it inside another file

    body.style.background = 'peachpuff';
};

/*export*/ const addTitle = (text) =>{     //just add export keyword at front to export
    const title =document.createElement('h1');
    title.textContent = text;
    body.appendChild(title);
};

// styleBody();          //wee will call these functions from index.js now
// addTitle('hello world from DOM file');

//*we can export any kind of data like strings,arrays,ojbects,classes etc....
/*export*/ const contact = 'anjan@gmail.com';


//TODO: so..instead of exporting again and again to individual we may also export them at once like this...
export { styleBody, addTitle, contact };

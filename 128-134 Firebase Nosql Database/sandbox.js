const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');    //unsub button



//1.1) function create html snippet
const addRecipe = (recipe, id) =>{
    let time = recipe.created_at.toDate();  //toDate() is provided by created_at timestamp proto method
    let html = `                                
    <li data-id="${id}">   
        <div> ${recipe.title} </div>
        <div> Created at: ${time} </div>
        <button class="btn btn-danger btn-sm my-2"> delete </button>
    </li>
    `;                                                                  //?taking data-id attribute to pass id we get from doc...for deleting

    // console.log(html);
    list.innerHTML += html;
}


// todo: 1.) Getting Collections --> get all recipes scollection data and show to our frontend

/*(when there was no real time listener)
db.collection('recipes')                                      //*reference to recipes collection created inside my app 
.get()                                                         //*get() gets the document inside recipe  
.then(snapshot=>{                                               //!Note: this is async task, returns promise.....                                                              
    snapshot.docs.forEach(doc => {                               // *(snapshot) gives picture of how data looks at that moment of time
        // console.log(doc.data());                                    //snapshot.docs[0].data()  --> one document only
        // console.log(doc.id);  id of each doc
        addRecipe(doc.data(),doc.id);
        
    })
}).catch(err=> console.log(err));
*/
// todo: 5.) Remove document from UI if change.type === 'removed'
const deleteRecipe = (id) =>{
    const allRecipes = document.querySelectorAll('li');   //all li tags
    allRecipes.forEach(recipe=>{
        if(recipe.getAttribute('data-id')===id){
            recipe.remove();
        }
    });
}

// todo 4.) Real time listeners --> listen to real time and check added or removed and update UI
//i removed above code snippet because we get updated data only after refreshing page...so now we use onSnapshot function instead of get() which
//!which returns the type of activity either added or removed type, if added call addRecipe else call deleteReecipe()
//const unsub = is added later for todo 6.)
const unsub = db.collection('recipes').onSnapshot(snapshot=>{  //!snapshot represents the collection at that moment of time, evrytime changes, fires callback
 //console.log(snapshot.docChanges()[0].doc.data());           //everytime data changes, sends this snapshot and adds type to 'removed' or 'added'
    snapshot.docChanges().forEach(change => {      //docChanges() storing collection of documents     //!at first page load doc changes sets all to added as default
    const doc = change.doc;   //actual document
    if(change.type === 'added'){     //same as doc[0].type
        addRecipe(doc.data(), doc.id);      //here we re just adding UI in real time
    }
    else if(change.type === 'removed'){
        //call delete recipe and remove form UI //todo 5.) Make function to remove element from dom when snapshot senses removed
        deleteRecipe(doc.id);
    }
    });

});


// todo: 2.) saving documents --> send our data inside document of recipe collection
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    

    const now = new Date();  //because we have timestamp property to add
    
    //we pass javascript object to document ....and firebase saves it as document
    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)        //as we need to store data as it is on firebase timestamp format so accessing firebase library
        // author is not specified so leaves this empty
    };
    
    db.collection('recipes')
    .add(recipe)    //recipe is object we made and this is also async
    .then(()=>{
        console.log('recipe added');
    }).catch(err=>console.log(err));


    form.reset();
});


// todo: 3.) DELETING documents --> delete our data inside document of recipe collection
list.addEventListener('click',(e)=>{
    // console.log(e);
    if(e.target.tagName === 'BUTTON'){
        // console.log(e.target.parentElement);
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('recipes').doc(id).delete().then(()=>{
            console.log('recipe deleted');
        });
    }
    
});


//todo: 6) unsubscribe from real time changes
button.addEventListener('click', () => {
    if(button.getAttribute('class') === 'btn btn-danger btn-lg my-2 disabled'){
    button.setAttribute('class','btn btn-primary btn-lg my-2');
    // button.textContent.replace('Unsubscribe','Subscribe');
    // alert(button.innerText.replace('Unsubscribe','Subscribe'));
    button.innerText =  button.textContent.replace('Unsubscribe','Subscribe');
    }
    else{
        button.setAttribute('class','btn btn-danger btn-lg my-2 disabled');
        button.innerText =  button.textContent.replace('Subscribe','Unsubscribe');
    }
    unsub();    //see above real time listener is assigned to this...
    console.log('unsubscribed from collection changes...');
});
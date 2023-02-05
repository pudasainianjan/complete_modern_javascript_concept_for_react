const getTodos = (callback) =>{
const request = new XMLHttpRequest();  //this is used before json came but can work with any kind of data now xml,json.plain text
request.addEventListener('readystatechange', ()=>{
    if(request.readyState == 4 && request.status === 200){
        const data = JSON.parse(request.responseText);
        callback(undefined, data);
    }
    else if(request.readyState === 4){
        console.log("could not fetch the data");
        callback('could not fetch data', undefined); 
    }
});

request.open('GET','https://jsonplaceholder.typicode.com/todos/');
request.send();

}  //gettods end

console.log(1);
console.log(2);

getTodos((err,data)=>{  //callback fires once the network req has completed
    console.log('callback fired!!');
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});

console.log(3);
console.log(4);

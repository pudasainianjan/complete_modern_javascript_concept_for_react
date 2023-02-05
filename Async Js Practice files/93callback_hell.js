const getTodos = (resource, callback)=>{
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        }
        else if(request.readyState === 4){
            callback('could not fetch file',undefined);
        }
    });
    request.open('GET',resource);
    request.send();
    
}
//rem,shyam and hari data fetched in order..but we can use promises to make it even simpler
getTodos('ram.json',(err,data)=>{
    console.log(data);
    getTodos('shyam.json',(err,data)=>{
        console.log(data);
        getTodos('hari.json',(err,data)=>{
            console.log(data);
        });
    });
});


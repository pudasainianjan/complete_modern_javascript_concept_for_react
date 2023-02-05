//responsible for manipulating data
const users = [
    {name:'ram', premium:true},
    {name:'sita', premium:false},
    {name:'hari', premium:true},
    {name:'john', premium:true},
    {name:'mario', premium:false},
    
];

export const getPremUsers = () =>{
    return users.filter(user => user.premium);  //only keep if user.premium is true
}

//*DEFAULT EXPORT
    //! only one in a file
export default users;  //deefault value that wee eexport from this filee
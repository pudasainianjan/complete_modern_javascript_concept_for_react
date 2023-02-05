
const users = [
                {name:'shaun',premium:true},
                {name:'Thaun',premium:false},
                {name:'Uhaun',premium:false},
                {name:'Vhaun',premium:true},
];

const  premiumMembers = users.filter(user=>{
    if(user.premium === true){
        return user.premium;
    }
    
});

const con = document.querySelector('#content');
const ul = document.querySelector('ul');
// ul.children.style.fontSize = '20px';

premiumMembers.map(user=>{
    const con = document.querySelector('#content');
    
    const li = document.createElement('li');
    
    li.textContent = `{name:'${user.name}', premium:${user.premium}}`;
    ul.append(li);
});

const scores = [50,20,30,40,10];
//we want to keep scores >30 only
const filteredScores = scores.filter(score => score>30);
const h4 = document.createElement('h4');
h4.textContent = 'The filtered scores '+filteredScores;
con.prepend(h4);



//reduce method
const scores1 = [10,20,60,40,70,90,30];
const result = scores.reduce((acc,curr)=>{
    if(curr>50){
        acc++;
    }
    return acc;
},0);

con.innerHTML += `Reduce:</br><h4>There a ${result} numbers greater than 50..</h4>`;


//find method
const firstHighScore = scores1.find(score =>{
    return score > 50;  //when it finds something greater than 50 stops loop
});
con.innerHTML += `Find:</br><h4>first highscore i.e > 50 is ${firstHighScore} ..</h4>`;



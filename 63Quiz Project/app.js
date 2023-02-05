const correctAnswers = ['B','A','A','B','A','B','A','A','A','A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');


form.addEventListener('submit', e=>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];

    //check answers
    const allMessages = document.querySelectorAll('.badge-success');
    //console.log(allMessages[0]);
    userAnswers.forEach((answer,index)=>{
        if(answer === correctAnswers[index]){
            score += 10;
            allMessages[index].textContent = 'Correct';
        }
        else{
            allMessages[index].textContent = 'Incorrect';
        }
    });

    //showing result on the page\
    window.scrollTo(0,0);
   
    result.classList.remove('d-none');

    let output = 0;
    const timer =setInterval(()=>{
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }
        else{
            output++;
        }
    },30);

});


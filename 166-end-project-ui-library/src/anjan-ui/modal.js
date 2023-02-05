import './styles/modal.css';

class Modal{
    init(){
        const loginModal = document.querySelector('.login-modal');
        const modalX = document.querySelector('.login-modal i');

        loginModal.style.display = 'block';

        modalX.addEventListener('click',() => {  /*when * is clicked, hiding our box*/
            loginModal.style.display = 'none';
        });
    }
}

export { Modal as default };
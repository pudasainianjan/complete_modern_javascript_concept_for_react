import './styles/tabs.css';

class Tabs {
    constructor(container){     //we pass tabs here
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
    }
    init(){
        this.tabs.forEach(tab => {
            tab.addEventListener('click', e=>{
                this.toggleTabs(e);
                this.toggleContent(e);
            });
        });
    }

    toggleTabs(e){
        //removee current active classes
        this.tabs.forEach(tab => tab.classList.remove('active'));       //remove active class from every single tab
        //add new active class to clicked tab
        e.target.classList.add('active');
    }

    toggleContent(e){
        //remove current active classes from the content
        this.container.querySelectorAll('.content').forEach(item => {
            item.classList.remove('active');
        });
        //add new active class to the content
        const selector = e.target.getAttribute('data-target');
        const content = this.container.querySelector(selector);
        content.classList.add('active');
    }
}

export { Tabs as default};
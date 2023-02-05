import './styles/tooltip.css';  //now webpack runs the css through those loaders
class Tooltip{          //class for tooltip component
    constructor(element){           //we want to use tooltip in this element passed
        this.element = element;
        this.message = element.getAttribute('data-message');
    }
    init(){     //*we call this function to initialize our component
        
        const tip = document.createElement('div');
        tip.classList.add('tip');
        tip.textContent = this.message;
        this.element.appendChild(tip);

        this.element.addEventListener('mouseenter',()=>{
            tip.classList.add('active');
        });

        this.element.addEventListener('mouseleave',()=>{
            tip.classList.remove('active');
        });
    }
}

export { Tooltip as default };
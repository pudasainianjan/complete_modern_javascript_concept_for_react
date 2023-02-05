import './styles/dialogBox.css';
class Copycode{
    constructor(headingElement){
        this.headingElement = headingElement;
        this.modalWrappeer = document.querySelector('.modal-wrapper');
        this.modal = document.querySelector('.modal');
    }
    init(){
        this.headingElement.addEventListener('click',e=>{
            const componentId = e.target.getAttribute('id');
            this.showCode(componentId);

            const closeBtn = document.querySelector('.close');
            closeBtn.addEventListener('click',()=>{
                this.hideBox();
            });

        });
    }

    showCode(componentId){ 
        const htmlTextarea = document.querySelector('#html');
        const cssTextarea = document.querySelector('#css');
        const copyBtn = document.querySelector('.copycode');

        switch (componentId) {
            case 'tooltip':
                
                htmlTextarea.textContent=`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ullam magni beatae officiis 
<span class="tooltip" data-message="I'm a tooltip!!">hover me!</span>
not me, perferendis quasi delectus consequuntur.</p>`;
                cssTextarea.textContent=
                `
.tooltip{
    position: relative;
    display: inline-block;
    color: #ff6565;
    border-bottom: 1px dotted #ff6565;
    cursor: help;
  }

  .tip{
    visibility: hidden;
    width: 150px;
    font-size: 24px;
    background-color: #ff6565;
    color: #fff;
    text-align: center;
    border-radius: 10px;
    padding: 5px 0;
    position: absolute;
    bottom: 120%;
    left: 50%;
    margin-left: -75px;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .tip.active{
    visibility: visible;
    opacity: 1;
  }
  .tip::after{  
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -4px;
    /* border-width: 4px;
    border-style: solid;
    border-color: transparent; */
    border: 4px solid transparent;
    border-top-color: #ff6565;
                  }`;

                break;


            case 'dropdown':
                 
                htmlTextarea.textContent=`
<!-- DROPDOWN -->
<h2 id="dropdown" data-message="Click To Copy Code!!">DROPDOWN:</h2>
<!-- dropdowns -->
<div class="dropdown">
  <div class="trigger">Awesome Designs</div>
  <div class="content">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptates laudantium qui corporis iusto vero cum non nemo dignissimos eligendi,
      quae molestias cumque voluptas sapiente pariatur sit odit tempore possimus.
    </p>
  </div>
</div>
<div class="dropdown">
  <div class="trigger">latest Offers</div>
  <div class="content">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptates laudantium qui corporis iusto vero cum non nemo dignissimos eligendi,
      quae molestias cumque voluptas sapiente pariatur sit odit tempore possimus.
    </p>
  </div>
</div>
                `;
                cssTextarea.textContent=`
.dropdown .trigger{
  border-bottom: 1px solid #ddd;
  padding: 10px;
  position: relative;
  cursor: pointer;
}
.dropdown .trigger::after{            /*add content after the text inside triggeer*/
  content: ">";
  display: inline-block;
  position: absolute;
  right: 15px;
  transform: rotate(90deg) scale(0.5, 1);
  font-weight: bold;
  transition: transform 0.3s;
}
.dropdown .trigger.active::after{
  transform: rotate(-90deg) scale(0.5, 1);
}
.dropdown .content{
  display: none;
  
}
.dropdown .content.active{
  display: block;
  animation: slide-down .5s ease-out;
}

@keyframes slide-down {
  0% { opacity: 0; transform: translateY(100%); }
  100% { opacity: 1; transform: translateY(0); }
}
                `;
                break;
            
            case 'tabs':
                
                htmlTextarea.textContent=`
<h2 data-message="Click To Copy Code!!">TABS:</h2>
<!-- TABS -->
<div id="tabs" class="tabs">
  <ul>
    <li class="trigger" data-target="#about">About</li>
    <li class="trigger active" data-target="#delivery">Delivery info</li>
    <li class="trigger" data-target="#returns">Returns info</li>
  </ul>
  <div id="about" class="content">
    <h3>about</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima suscipit assumenda mollitia nostrum atque facilis neque, non blanditiis deleniti, ab numquam similique eligendi soluta necessitatibus, ex quibusdam illum eaque voluptate.</p>
  </div>
  <div id="delivery" class="content active">
    <h3>delivery</h3>
    <p>Non blanditiis deleniti, ab numquam similique eligendi soluta necessitatibus, ex quibusdam illum eaque voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima suscipit assumenda mollitia nostrum atque facilis neque.</p>
  </div>
  <div id="returns" class="content">
    <h3>returns</h3>
    <p>Adipisicing elit. Minima suscipit assumenda mollitia nostrum atque facilis neque, non blanditiis deleniti, lorem ipsum dolor sit amet consectetur ab numquam similique eligendi soluta necessitatibus, ex quibusdam illum eaque voluptate.</p>
  </div>
</div>
<!-- tabs end  -->
                `;
                cssTextarea.textContent=`
.tabs > ul{     /*all ul tags inside tabs*/
  padding: 0;
}
.tabs .trigger{   /*all the triggers*/
  list-style-type: none;
  padding: 10px;
  background: #f2f2f2;
  margin: 4px;
  border-radius: 6px;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.tabs .trigger.active{        /*?when a trigger is active*/
  background: #ff6565;
  color: white;
}
.tabs .content{
  max-width: 100%;
  padding: 1rem 0 1rem 1rem;
  background-color: #d6e1e9;
  border: .1rem solid #eee;
  border-radius: 1.5rem;
  font-size: 1.6rem;
  text-align: start;
  display: none;
}
.tabs .content.active{    
  display: block;
  animation: slide-down .4s ease-out;
}

@keyframes slide-down {
  0% { opacity: 0; transform: translateY(100%); }
  100% { opacity: 1; transform: translateY(0); }
}
                `;
                break;

            case 'snackbar':
            
                htmlTextarea.textContent=`
<h2 id="snackbar snackbar.active" data-message="Click To Copy Code!!">SNACKBAR:</h2>
    <div class="snackbar active">Hello I am snackbar...</div>
      <div>
        <button class="snackbar-trigger">Snackbar Click</button>
      </div>
                `;
                cssTextarea.textContent=`
.snackbar{
  width: 200px;
  padding: 20px;
  position: fixed;
  left: 50%;
  margin-left: -120px;
  top: 0;
  border-radius: 0 0 5px 5px;
  box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
  background: #ff6565;
  text-align: center;
  color: #fff;
  margin-top: -100%;
  transition: all 0.2s;
  z-index: 1;
}
.snackbar.active{
  margin-top: 0;
}
                `;
                break;

            case 'dialog':
                htmlTextarea.textContent=`
<div class="modal-body">       
        
  <div id="showTab" class="tabs">
    <ul>
      <li class="trigger active" data-target="#one">One</li>
      <li class="trigger" data-target="#two">Two</li>    
    </ul>
  
    <textarea id="one" class="modal-input content active" rows="4" cols="80">This is tab one content...TAB-1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, similique dolores aliquid vel illum iste fugiat porro, suscipit tempora corporis nemo quasi, facere culpa iusto laudantium unde inventore veniam officia ad. Ab, ex. Quam velit porro, tempora in sapiente iste. Culpa in iste repellendus sed obcaecati molestias amet pariatur esse.</textarea>
    <textarea id="two" class="modal-input content" rows="4" cols="80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga quidem provident, excepturi eos voluptate dolor autem ipsa temporibus voluptatem.</textarea>
   </div>
</div>
                `;
                cssTextarea.textContent=`
.modal-body{
  display: flex;
  padding: 2rem 1.5rem 1rem 1.5rem;
}

.modal-input{
  width: 100%;
  
  padding: .5rem 0 1rem 1rem;
  background-color: #d6e1e9;
  border: .1rem solid #eee;
  border-radius: 1.5rem;
  font-size: 1rem;
}
.modal-input:focus{
  background-color: #fff;
  border-color: #1aa1f5;
  outline: none;  /*outline borders none*/
}
                  
                `;
                break;


                case 'modal':
                    htmlTextarea.innerHTML=`
<div class="login-modal">
    <i class="">Close</i>
    <p>This is modal content....you can write suggestion and messages here...</p>
</div>
              `;
                cssTextarea.textContent=`
.login-modal{
    display: block;  /*default hidden*/
    position: relative;
    background-color: #fff;
    width: 70rem;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 0 .7rem rgba(0, 0, 0, .3);
    border-radius: 0 0 1rem 1rem;  /*top-left top-right bottom-right bottom-left corners*/
}
.login-modal i{
    position: absolute;
    top:1rem;
    right: 2rem;
    font-size: 1.3rem;
    color: red;
    cursor: pointer;
}
.login-modal p{
    margin: 2rem 1rem 0 1rem;
    font-size: 1.6rem;
    color: #868383;
}
                `;
                break;
            
                
        
            default: console.log('no code to show');
                break;
        }
        this.modal.style.display = 'block';
        this.modalWrappeer.classList.add('modal-wrapper-display');
        
        //copy to clipboard
        let elementsArray = [htmlTextarea,cssTextarea];
        elementsArray.forEach(function(elem) {
            elem.addEventListener("click", function(e) {
                // console.log(e.target.id);
                
                if(e.target.id === "html" || "css"){
                    console.log('htmlsssss')
                e.target.select();
                e.target.setSelectionRange(0, 99999)
                document.execCommand("copy");
                copyBtn.textContent= `Copied ${e.target.id}!`;
                copyBtn.style.backgroundColor = '#1aa1f5';
                }
            });
        });
        

    }
    hideBox(){
        const copyBtn = document.querySelector('.copycode');
            this.modal.style.display = 'none';
            console.log(this.modalWrappeer);
            this.modalWrappeer.classList.remove('modal-wrapper-display'); 
            copyBtn.textContent= `Copy`;
    }

    
    
}

export { Copycode as default };
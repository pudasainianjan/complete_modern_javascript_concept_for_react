
import Tooltip from './anjan-ui/tooltip';       //wee can import like this beecause of webpack
import Dropdown from './anjan-ui/dropdown';
import Tabs from './anjan-ui/tabs';
import Snackbar from './anjan-ui/snackbar';
import Copycode from './anjan-ui/copyCode';
import sidebarOpen from './anjan-ui/sidebar';
import Modal from './anjan-ui/modal';

//cratee a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

//create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();    //setup the constructor for each dropdown and setup event listener for each trigger itself for all
});

//create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

//create snackbar
const snackbar =  new Snackbar();
snackbar.init();

const button = document.querySelector('.snackbar-trigger');
button.addEventListener('click',()=>{
    snackbar.show("you clicked me :)");
});

//for copying codes
const allheading = document.querySelectorAll('h2');
allheading.forEach(element => {
    const tooltipCopy = new Tooltip(element);
    tooltipCopy.init();    //setup the constructor for each dropdown and setup event listener for each trigger itself for all
    const copyCode = new Copycode(element);
    copyCode.init();
});

const codeTab = new Tabs(document.querySelector('#codeTab'));
codeTab.init();



// SIDEBAR

const user = document.querySelector('.user');
    const sidebar = document.querySelector('.sidebar');
    const sidebarWrapper =document.querySelector('.sidebar-wrapper');
    const xBtn = document.querySelector('.sidebar-header i');
    const clickUl = document.querySelector('.clickUl');

user.addEventListener('click', ()=>{
    sidebar.classList.add('sidebar-display');
    sidebarWrapper.classList.add('sidebar-wrapper-display');
    
});

xBtn.addEventListener('click', ()=>{
    sidebar.classList.remove('sidebar-display');
    sidebarWrapper.classList.remove('sidebar-wrapper-display');
});

clickUl.addEventListener('click',()=>{
    sidebar.classList.remove('sidebar-display');
    sidebarWrapper.classList.remove('sidebar-wrapper-display');
})




//for MODAL
const modal = new Modal();
modal.init();

//dialog
const showTab = new Tabs(document.querySelector('#showTab'));
showTab.init();







    











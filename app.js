// select items (selecciona articulos)
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.querySelector('grocery');
const submtBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

//opcion de editar
let editElement;
let editFlag = false;
let editID = "";
//
// submit form
form.addEventListener("submit", addItem);
//
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;

    const id = new Date().getTime().toString();
    if(value && !editFlag) {
        const element = document.createElement('article');
        //class
        element.classList.add('grocery-item');
        //id
        const attr = document.createAttribute('data-id');
    }
    else if(value && editFlag) {
        console.log('editing');
    } else {
        displayAlert("please enter value", "danger");
    }
}
//display alert
function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

//remove alert
setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
}, 1000);
}
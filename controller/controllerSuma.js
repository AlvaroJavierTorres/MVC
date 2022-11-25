import {numbers} from "../model/modelSuma.js"
import {insertTitleLIst, numbersView2, respuesta} from "../view/viewSuma.js";
import {numbersView} from "../view/viewSuma.js";

const buttonCall = document.getElementById("btnListar");



buttonCall.addEventListener("click", ()=>{

    numbers();
    insertTitleLIst();
    numbersView();
    numbersView2();
    respuesta();

});
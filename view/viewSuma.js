const numbersView = () =>{
    const numeros1 = document.getElementById("addNumber1");
    const number = document.createElement("h3");
    number.innerHTML = "El primer numero es:";
    numeros1.insertAdjacentElement("afterbegin",number);

}

const numbersView2 = () =>{
    const numeros2= document.getElementById("addNumber2");
    const number2 = document.createElement("h3");
    number2.innerHTML = "El segundo numero es:";
    numeros2.insertAdjacentElement("afterbegin",number2);

}

const respuesta = () =>{
    const res = document.getElementById("respuesta");
    const result = document.createElement("h3");
    result.innerHTML = "La suma de los 2 numeros es:";
    res.insertAdjacentElement("afterbegin",result);

}

const insertTitleLIst = () =>{
    const suma = document.getElementById("additionNumber");
    const title = document.createElement("h2");
    title.innerHTML = "<strong>La suma de los dos numeros es</strong>";
   suma.insertAdjacentElement("afterbegin",title);
}

export {
    insertTitleLIst, numbersView, numbersView2, respuesta
}
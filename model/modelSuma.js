const calSuma = () =>{
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let sumaT = ((num1)+(num2));
    document.getElementById("respuesta").innerHTML = `${sumaT}`
    document.getElementById("number1").innerHTML = ` ${num1}`
    document.getElementById("number2").innerHTML = ` ${num2}`

    console.log(num1,num2,sumaT);

}




export{
    calSuma as numbers
}
const price = document.getElementById("price");
const tipInput = document.getElementById("tip-input");
const output = document.getElementById("output");
const btn = document.getElementById("calc");


function percentageCalc(){
    let tip = (tipInput.value / 100) * price.value;
    let total = Number(price.value) + Number(tip);
    output.innerHTML = "Total Price: " + total;
    price.value = "";
    tipInput.value = "";
}
btn.addEventListener("click", () => percentageCalc());
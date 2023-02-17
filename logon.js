

const submit = document.getElementById("submitButton");

function toggleBuySell() {
    const buyerSignUp = document.getElementById("buy");
    const sellerSignUp = document.getElementById("sell");
    

    sellerSignUp.onclick = function changeBackground(){
       document.body.style.backgroundColor = "red";
    }
    buyerSignUp.onclick = function changeBackgroundBack(){
      document.body.style.backgroundColor = "white";
    }
const buyButton = document.getElementById("buy-button");
const sellButton = document.getElementById("sell-button");

buyButton.addEventListener("click", function() {
buyButton.classList.add("is-active");
sellButton.classList.remove("is-active");
});

sellButton.addEventListener("click", function() {
sellButton.classList.add("is-active");
buyButton.classList.remove("is-active");
});
}

document.addEventListener("DOMContentLoaded", toggleBuySell);


const cancel = document.getElementById("cancel");
function cancelItem (){
window.open("homepage.html");
}


const submission = () =>{
    if(changeBackgroundColor === true){
        window.open("sellerpage.html");
    }else{
        window.open("index.html");
    }
}

submit.onclick = submission;

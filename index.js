const form = document.querySelector(".form");
const input = document.querySelector(".input");
const btnSubmit = document.querySelector(".btn");
const msgError = document.querySelector(".msgError");

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(input.value.match(regEx)){
        console.log("Valid");
        msgError.classList.remove("error");
        input.style.border = "2px solid hsl(223, 100%, 88%)";
    } else {
        console.log("Error");
        input.style.border = "1px solid hsl(354, 100%, 66%)";
        msgError.classList.add("error");
    }
})
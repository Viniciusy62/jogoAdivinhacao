const btnVerify = document.querySelector("#btn-verify");
const btnAgain = document.querySelector("#btn-again");
const randomNumber = Math.round(10 * Math.random());

let score = 1

function changeScreen() {
  const screen01 = document.querySelector(".screen01");
  const screen02 = document.querySelector(".screen02");
  
  screen01.classList.toggle("hide");
  screen02.classList.toggle("hide");
}

function finalResult(e) {
  e.preventDefault();
  const num = document.querySelector("#number");

  const txtValidate = document.querySelector("#txt-validate");
  const result = document.querySelector("#result");

  if (!num.value || num.value < 0 || num.value > 10) {
    txtValidate.textContent = "*Digite um número válido";

  } else if(randomNumber == num.value) {
    result.textContent = `Parabéns, você acertou em ${score} tentativas! O número é ${randomNumber}!`;
    changeScreen()
    score = 1
    txtValidate.textContent = ""
  } else {
    txtValidate.textContent = `Infelizmente você errou, tente novamente!`;
    score++
  }
  console.log(score)
  num.value = "";
}

btnVerify.addEventListener("click", finalResult);
btnAgain.addEventListener("click", changeScreen);
let btnVerify = document.querySelector("#btn-verify");

function randomNumber() {
  let random = 10 * Math.random();
  let numberValid = Math.round(random);
  if(numberValid < 0) {
    numberValid = 0;
  }
  return numberValid;
}

function comparateNumber(num) {
  num = document.querySelector("#number");
  let numberValid = randomNumber();
  
  console.log(numberValid);

  if(numberValid == num.value) {
    console.log("Acertou")
  } else {
    console.log("Errou!")
  }
  num.value = ""
}

btnVerify.addEventListener("click", comparateNumber)
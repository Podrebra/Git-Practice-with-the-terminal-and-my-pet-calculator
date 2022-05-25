window.onload = () => {
  const input = document.querySelector(".output");
  const btn1 = document.querySelectorAll(".number");
  const btnSign = document.querySelectorAll(".sign");

  let firstNum = "";
  let SecondNum = "";
  let signFunc = "";
  let sum = '';
  let difference = '';

  const resInput = () => {
    if (firstNum && !SecondNum == '' && signFunc) {
      input.value = SecondNum;
    }
  };

  const calculate = () => {
    switch (signFunc) {
      case "+":
        if (firstNum && SecondNum || !firstNum) {
          sum = Number(firstNum) + Number(SecondNum);
          input.value = sum;
          firstNum = sum;
          SecondNum = "";
          
        } else if (firstNum && SecondNum && signFunc) {
          input.value = SecondNum;
        }
        return;
        case "-":
          if (firstNum && SecondNum || !firstNum) {
            difference = Number(firstNum) - Number(SecondNum);
            input.value = difference;
            firstNum = difference;
            SecondNum = "";
          } else if (firstNum && SecondNum && signFunc) {
            input.value = SecondNum;
            console.log(firstNum, SecondNum,signFunc);
          }
          else if (!firstNum && SecondNum && signFunc) {
            input.value = SecondNum;
          };
        return;
      case '=':
        input.value = Number(firstNum) + Number(SecondNum);
        firstNum = '';
        SecondNum = '';
        break;
      case "AC":
        input.value = "";
        firstNum = "";
        SecondNum = "";
        signFunc = "";
        break;
      case "+/-":
        if (SecondNum) {
          SecondNum *= -1;
          input.value = SecondNum;
        } else {
          firstNum *= -1;
          input.value = firstNum;
        }
        break;
      default:
        return "";
    }
  };

  btn1.forEach((element) => {
    element.addEventListener("click", (event) => {

      input.value += event.target.innerText;
      if (signFunc) {
        SecondNum += event.target.innerText;
      } else {
        firstNum += event.target.innerText;
      }
      resInput();
    });
  });

  btnSign.forEach((element) => {
    element.addEventListener("click", (event) => {
      //   input.value += event.target.innerText;
    signFunc = event.target.innerText;
    console.dir (signFunc)

    calculate();
    });
  });
};

let input1 = document.querySelector(`#one`);
let input2 = document.querySelector(`#two`);
let button = document.querySelector(`.btn`);
let answer = document.querySelector(`.alert`);

button.addEventListener(`click`, function () {

    let result = ``;

    if (input1.value == `smart` && input2.checked == false) {
        result = `брокколи`;
    } else if (input1.value == `smart` && input2.checked == true) {
        result = `помидор`;
    } else if (input1.value == `beautiful` && input2.checked == false) {
        result = `огурец`;
    } else {
        result = `болгарский перец`;
    }

    answer.innerHTML = `Ты ${result}`;
    answer.classList.remove(`d-none`);

})
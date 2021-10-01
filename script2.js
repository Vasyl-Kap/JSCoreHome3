// #2

function getSqrt(number) {
    return (Math.sqrt(number))
}
let number = prompt('Введіть число для визначення квадратного кореня.');
if (number > 0) {
    let sqrt = getSqrt(number);
    alert("Квадратний корінь з" + " " + number + " " + "дорівнює" + " " + sqrt +".");
}
else if (isNaN(number)) {
    alert("Повинно бути числове значення.");
}
else if (number === "" || number === undefined || number === null) {
    alert("Будь ласка, введіть число!");
}
else if (number <= 0) {
    alert("Введіть додатнє число.");
}

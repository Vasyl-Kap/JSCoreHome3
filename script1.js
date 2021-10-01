// #1

function getArea(number) {
    return (Math.pow(number, 2) * Math.PI)
}
let number = prompt('Введіть радіуc круга в см');
if (parseInt(number)) {
    let area = getArea(number);
    alert("Площа дорівнює" + " " + area + " " + "квадратних сантиметрів.");
}
else if (isNaN(number)) {
    alert("Повинно бути числове значення.");
}
else {
    alert("Будь ласка, введіть радіус!");
}


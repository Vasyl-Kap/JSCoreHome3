// #3

let myMath = {
    num: 3.141592653589793,
    PI() {
        alert("Число PI = " + this.num)
        console.log(this.num)
    },
    powFunction(number, degree) {
        let result = number;
        for (let i = 1; i < degree; i++) {
            result *= number;
        }
        return result;
    },
    pow() {
        let number = prompt('Введіть число, яке потрібно підняти до степеня');
        let degree = prompt('Введіть степінь')
        if (parseInt(number)) {
            alert("Число " + number + " в степені " + degree + " рівне " + this.powFunction(number, degree))
            console.log(this.powFunction(number, degree))
        }
        else if (isNaN(number)) {
            alert('Повинно бути числове значення')
        }
        else {
            alert('Будь ласка, введіть число!')
        }
    },
    absFunction(number) {
        return number < 0 ? -number : number;
    },
    abs() {
        let number = prompt('Введіть число, яке потрібно вивести по модулю');
        if (parseInt(number)) {
            alert("Модуль числа " + "|" + number + "|" + " рівний " + this.absFunction(number))
            console.log(this.absFunction(number))
        }
        else if (isNaN(number)) {
            alert('Повинно бути числове значення')
        }
        else {
            alert('Будь ласка, введіть число!')
        }
    },
    maxFunction(array) {
        let max_num = 0;
        let a = array.length;
        for (i = 0; i < a; i++) {
            if (array[i] > max_num) {
                max_num = array[i];
            }
        }
        return max_num;
    },
    max() {
        let arr = prompt("Введіть через кому декілька чисел для визначення максимального");
        array = (arr || "").split(`,`).map(Number);
        if (parseInt(array)) {
            alert("Максимальне число рівне " + this.maxFunction(array))
            console.log(this.maxFunction(array))
        }
        else if (isNaN(arr)) {
            alert('Повинні бути числові значення')
        }
        else {
            alert('Будь ласка, введіть числа!')
        }
    },
    minFunction(array) {
        let min_num = array[0];
        let a = array.length;
        for (i = 0; i < a; i++) {
            if (array[i] < min_num) {
                min_num = array[i];
            }
        }
        return min_num;
    },
    min() {
        let arr = prompt("Введіть через кому декілька чисел для визначення мінімального");
        array = (arr || "").split(`,`).map(Number);
        if (parseInt(array)) {
            alert("Мінімальне число рівне " + this.minFunction(array))
            console.log(this.minFunction(array))
        }
        else if (isNaN(arr)) {
            alert('Повинні бути числові значення')
        }
        else {
            alert('Будь ласка, введіть числа!')
        }
    }
};
myMath.PI()
myMath.pow()
myMath.abs()
myMath.max()
myMath.min()

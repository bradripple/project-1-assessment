let count = document.querySelector('#count');
count.value = 0;
count.textContent = count.value;
console.log(count.value);

let plus = document.querySelector('#plusButton');

plus.addEventListener('click', function() {
    let count = document.querySelector('#count');
    let input = document.querySelector('#number');
    let results = addNumber(input.value);
    count.value = results;
    count.textContent = count.value;
    if (count.value < 0) {
        count.style.color = "red";
    } else if (count.value >= 0) {
        count.style.color = "black";
    }
})

function addNumber(num) {
    let count = document.querySelector('#count');
    return parseInt(num) + parseInt(count.value);
}

let minus = document.querySelector('#minusButton');

minus.addEventListener('click', function() {
    let count = document.querySelector('#count');
    let input = document.querySelector('#number');
    let results = subNumber(input.value);
    count.value = results;
    count.textContent = count.value;
    if (count.value < 0) {
        count.style.color = "red";
    } else if (count.value >= 0) {
        count.style.color = "black";
    }
})

function subNumber(num) {
    let count = document.querySelector('#count');
    console.log(count.value);
    console.log(num);

    return parseInt(count.value) - parseInt(num);
}
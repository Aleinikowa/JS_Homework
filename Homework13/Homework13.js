// Задание 1:
var array = ['Polina', 'Juli', 'Max', 'Vasya'];

function changeNames(arr) {
    
    var newArray = arr.map(function(names) {
        var object = {};
        object.name = names;
        return object;
    });

    return newArray;
}

changeNames(array);


//Задание 2:
var array = ['00', '13', '24'];

function stringFromArray(arr) {

    var result = arr.reduce(function(element, number) {
        return element + ' : ' + number;
    }, 'Текущее время ');

    return result;
}

stringFromArray(array);


// Задание 3:
var string = 'полина';

function howManyVowels(str) {
    var arrayVowels = ['а', 'е', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    var arrayFromString = str.toLowerCase().split('');
    var amount = 0;

    var vowels = arrayFromString.forEach(function(item) {
        if (arrayVowels.indexOf(item) !== -1) {
            amount ++;
        }
    });

    return amount;
}

howManyVowels(string);


// Задание 4:
function splitSentence(sentence) {
    var arrayFromString = sentence.split(/[!...]+/);

    arrayFromString.forEach(function(item) {
        var splitArray = [];
        splitArray.push(item);
        var newSentence = item.trim();

        splitArray.forEach(function(elem) {
            var string = elem.split(/[!... ?,  ]+/).join('');
            var stringLength = string.length;
            console.log( newSentence + ': ' + ' Letters quantity is: ' + stringLength);
        });
    });
}

splitSentence('Привет, студент! Студент... Как дела, студент?');
// Привет, студент: Letters quantity is: 13
// Студент: Letters quantity is: 7
// Как дела, студент: Letters quantity is: 14
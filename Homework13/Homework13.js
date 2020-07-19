// Задание 1:
var array = ['Polina', 'Juli', 'Max', 'Vasya'];

function changeNames(arr) {
    var newArray = [];

    arr.map(function (names) {
        var object = {};
        object.name = names;
        newArray.push(object);
        return newArray;
    });

    return newArray;
}

changeNames(array);


//Задание 2:
var array = ['00', '13', '24'];

function stringFromArray(arr) {

    var result = arr.reduce(function(element, number) {
        return element + ' : ' + number;
    }, ' ');

    return 'Текущее время ' + result;
}

stringFromArray(array);


// Задание 3:

var string = 'полина';

function howManyVowels(str) {
    var arrayVowels = ['а', 'е', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    var arrayFromString = str.toLowerCase().split('');

    var vowels = arrayFromString.reduce(function(sum, item) {
        if (arrayVowels.indexOf(item) !== -1) {
            sum ++;
        }
        return sum;
    }, 0); 

    return vowels;
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
            var string = elem.replace(/[? ,]/g,"");
            var stringLength = string.length;
            console.log( newSentence + ': ' + ' Letters quantity is: ' + stringLength );
        });
    });
}

splitSentence('Привет, студент! Студент... Как дела, студент?');
// Привет, студент: Letters quantity is: 13
// Студент: Letters quantity is: 7
// Как дела, студент: Letters quantity is: 14


//Задание 5 *:
var text = 'Привет всем! Меня зовут Сара. Еще раз, привет всем всем! Также отдельный привет моим друзьям.';

function splitSentence(sentence) {
    var arrayFromText = sentence.toLowerCase().split(/[, !.]+/);
    var objectCount = {};

    arrayFromText.forEach(function(item) {
        objectCount[item] = (objectCount[item] || 0) + 1;
    });

    var arraySort = [];

    for (var key in objectCount) {
        arraySort.push([key, objectCount[key]]);
    }

    arraySort.sort(function(a, b) {
        return b[1] - a[1];
    });

    var finalArray = arraySort[0];
    var finalWord = finalArray[0];
    var finalValue = finalArray[1];

    return 'Максимальное число повторений у слова "' + finalWord + '" - ' + finalValue;

}

splitSentence(text);
    
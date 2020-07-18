//Задание 1:
var arr = [-1, 0, 2, 34, -2];

function filterNumbersArr(numbers) {

    return numbers.filter(function (item) {
        return item > 0;
    });
}

filterNumbersArr(arr);

//Задание 2:
var arr = [-1, 0, 2, 34, -2];

function firstPositiveNumber(array) {

    var positiveNumber = array.find(function(item) {
        return item > 0;
    });

    return positiveNumber;
}

firstPositiveNumber(arr);

// //Задание 3:
function isPalindrome(word) {
    var string =  word.toLowerCase();
    var stringReverse = word.toLowerCase().split('').reverse().join('');

    function same(str, str2) {
        if (str != str2) return false;
        return true;    
    }

    return same(string, stringReverse);
}

isPalindrome('шалаШ'); // true
isPalindrome('привет'); // false


// // Задание 4:
function areAnagrams(word1, word2) {
    var string =  word1.toLowerCase().split('').sort().join('');
    var string2 = word2.toLowerCase().split('').sort().join('');

    if (string != string2) return false;

    return true;
}

areAnagrams('кот', 'отк'); // true
areAnagrams('кот', 'атк'); // false
areAnagrams('кот', 'отко'); // false

// Задание 5:
function divideArr(arr, amount) {
    var newArray = [];

    for (var i = 0; i < arr.length; i++) {
        var temp =  arr.splice(0, amount);
        newArray.push(temp);
    }

    return newArray;
}

divideArr([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
divideArr([1, 2, 3, 4, 5, 6, 7, 8 ], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]

//Задание 1:
var arr = [-1, 0, 2, 34, -2];

var positiveNumbers = arr.filter(function(numbers) {
    return numbers > 0;
})

positiveNumbers;


//Задание 2:
var arr = [-1, 0, 2, 34, -2];

var firstPositiveNumber = arr.find(function(numbers) {
    return numbers > 0;
})

firstPositiveNumber;


// Задание 3:
function isPalindrome(word) {
    var array =  word.toLowerCase().split('');
    var arrayReverse = word.toLowerCase().split('').reverse();

    function same(arr, arr2) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === arr2[i]) {
                continue;
            } else {
                return false;
            }
        }

        return true;    
    }

    return same(array, arrayReverse);
}

isPalindrome('шалаШ'); // true
isPalindrome('привет'); // false


// Задание 4:
function areAnagrams(word1, word2) {
    var array1 =  word1.toLowerCase().split('');
    var array2 = word2.toLowerCase().split('');

    function same(letter) {
        for (var i = 0; i < array2.length; i++) {
            return (letter === array2[i] && array1.length === array2.length);
        }
    }

    var result = array1.some(same);
    return result;
}

areAnagrams('кот', 'отк'); // true
areAnagrams('кот', 'атк'); // false
areAnagrams('кот', 'отко'); // false

// Задание 5:
function divideArr(arr, amount) {
    var array = arr;
    var length = arr.length;
    var newArray = [];

    for (var i = 0; i < length; i++) {
        var temp =  array.splice(0, amount);
        newArray.push(temp);
        if (!array.length) break;
    }

    return newArray;
}

divideArr([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]
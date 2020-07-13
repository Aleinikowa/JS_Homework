//Задание 1:
function Animal(name) {
    this.name = name;
    this._foodAmount = 50;
}

Animal.prototype._formatFoodAmount = function() {
    return this._foodAmount  + 'гр.';
};

Animal.prototype.dailyNorm = function(amount) {

    if (amount < 50) {
        alert ('Корма мало');
    } else if (amount == undefined) {
        return this._formatFoodAmount();
    } else if (amount > 500) {
        alert ('Корма много');
    } else {
        this._foodAmount  = amount;
    }
};

Animal.prototype.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm()  + ' корма.');
};

function Cat(name) {
    Animal.apply(this, arguments);
}    

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function() {
    Animal.prototype.feed.apply(this);
    console.log('Кот доволен ^_^');
    return this;
};

Cat.prototype.stroke = function () {
    console.log('Гладим кота');
    return this;
}

var smoke = new Cat('Smoke');
smoke.dailyNorm(70);
smoke.feed().stroke().feed().stroke();


//Задание 2:
function deepClone(some) {
    var clone;
    
    if ( Array.isArray(some) ) {
        clone = [];
    } else {
        clone = {};
    }

    for (var key in some) {
        var element = some[key];
        if ( typeof(element) != 'array' &&  typeof(element) != 'object' || key == 'null') {
            clone[key] = element;
        } else if (typeof(element) == 'array' || typeof(element) == 'object') {
            clone[key] = deepClone(element);
        }
    }

    return clone;
}

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);


//Задание 3:
function compare(object1, object2) {
    var keys1 = Object.keys(object1);
    var keys2 = Object.keys(object2);

    if (keys1.length != keys2.length) {
        return false;
    }

    for ( var key in object1 ) {
        if ( ! (object1.hasOwnProperty(key) && object2.hasOwnProperty(key)) ) {
            return false;
        }

        if ( typeof(object1[key]) != 'object' && typeof(object1[key]) != 'array' && typeof(object1[key]) == 'null' ) {
            if (object1[key] != object2[key]) {
                return false;
            }
        } 

        if ( typeof(object1[key]) == 'function' && typeof(object2[key]) == 'function' ) {
            var func1 = object1[key];
            var func2 = object1[key];
            var stringFunc1 = func1.toString();
            var stringFunc2 = func2.toString();

            if (stringFunc1 != stringFunc2) {
                return false;
            } 
        } else if (typeof(object1[key]) == 'object' && typeof(object2[key]) == 'object' && key != 'null' && key != 'null') {
            return compare(object1[key], object2[key]);
        } else if (typeof(object1[key]) == 'array' && typeof(object2[key]) == 'array') {
            var array1 = object1[key];
            var array2 = object2[key];
            if (array1.length == array2.length) {
                for (var i = 0; i < array2.length; i++) {
                    var element1 = array1[i];
                    var element2 = array2[i];
                    if (element1 != element2) {
                        return false;
                    }
                }
            } else {
                return false;
            }
        }
    }

    return true;
}

console.log(compare(initialObj, clonedObj));
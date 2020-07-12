//Задание 1:
function Animal(name) {
    this._name = name;
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

    var keysString1 = keys1.join('');
    var keysString2 = keys2.join('');

    if (keysString1 !== keysString2) {
        return false;
    }    

    for (var i = 0; i < keys1.length; i++) {
        var key = keys1[i];
        var element = object1[key];
        var key2 = keys2[i];
        var element2 = object2[key2];

        if (typeof(element) != typeof(element2)) {
            return false;
        }
        
        if ( (typeof(element) == 'object' && typeof(element2) == 'object') || (typeof(element) != 'null' && typeof(element2) != 'null') ) {
            compare(element, element2);
        }    
    }

    return true;
}

console.log(compare(initialObj, clonedObj));
//задание 2
function Cat(name) {
    this.name = name;
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + 'гр.';
    }

    this.feed = function() {
        console.log('Насыпаем в миску ' + formatFoodAmount()  + ' корма.');
    }
}

var smoke = new Cat('Smoki');
smoke.feed();

//задание 3 
function Cat(name) {
    this.name = name;
    var foodAmount = 50;

    this.dailyNorm = function(amount) {
       
        if (amount < 50) {
            alert ('Корма мало');
        } else if (amount == undefined) {
            return formatFoodAmount();
        } else if (amount > 500) {
            alert ('Корма много');
        } else {
            foodAmount = amount;
        }        
    }

    function formatFoodAmount() {
        return foodAmount + 'гр.';
    }

    this.feed = function() {
        console.log('Насыпаем в миску ' + this.dailyNorm()  + ' корма.');
    }
}

var smoke = new Cat('Smoke');
smoke.dailyNorm(70);
smoke.feed();

//задание 4 - 5

function Animal(name) {
    this.name = name;
    var foodAmount = 50;
    var self = this;

    this.dailyNorm = function(amount) {
    
        if (amount < 50) {
            alert ('Корма мало');
        } else if (amount == undefined) {
            return formatFoodAmount();
        } else if (amount > 500) {
            alert ('Корма много');
        } else {
            foodAmount = amount;
        }
    }

    function formatFoodAmount() {
        return foodAmount + 'гр.';
    }

    self.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm()  + ' корма.');
    }
}

function Cat(name) {
    Animal.apply(this, arguments);

    var animalFeed = this.feed;

    this.feed = function() {
        animalFeed();
        console.log ('Кот доволен ^_^');
        return this; 
    }

    this.stroke = function () {
        console.log('Гладим кота');
        return this;
    }
}    

var smoke = new Cat('Smoke');
smoke.dailyNorm(60);
smoke.feed().stroke().feed().stroke();
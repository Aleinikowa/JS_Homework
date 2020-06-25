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
    var self = this;

    this.dailyNorm = function(check) {
       
        if (check < 50) {
            alert ('Корма мало');
            return foodAmount;
        } else if (check == undefined) {
            return foodAmount;
        } else if (check > 500) {
            alert ('Корма много');
            return foodAmount;
        } else {
            foodAmount = check;
            return foodAmount;
        }        
    }

    function formatFoodAmount() {
        return self.dailyNorm() + 'гр.';
    }

    this.feed = function() {
        console.log('Насыпаем в миску ' + formatFoodAmount()  + ' корма.');
    }
}

var smoke = new Cat('Smoki');
smoke.dailyNorm(67);
smoke.feed();

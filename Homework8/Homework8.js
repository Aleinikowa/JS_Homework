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

    this.dailyNorm = function(amout) {
       
        if (amout < 50) {
            alert ('Корма мало');
        } else if (amout == undefined) {
            return formatFoodAmount();
        } else if (amout > 500) {
            alert ('Корма много');
        } else {
            foodAmount = amout;
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

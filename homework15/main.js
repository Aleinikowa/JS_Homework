var divTable = document.getElementById('add-tableJS');
    inputArray = document.getElementsByClassName('add-value__input'),
    inputX = document.getElementById('input__xJS'),
    inputY = document.getElementById('input__yJS'),
    btn = document.getElementById('input__btnJS');

for (var i = 0; i < inputArray.length; i++) {
    var element = inputArray[i];
    element.onkeyup = checkInputs;
}

function checkInputs() {
    var xValue = +inputX.value,
    yValue = +inputY.value; 

    if ( (xValue != '' && yValue != '') || (xValue == 0 || yValue == 0) ) {
        btn.removeAttribute('disabled');
    } else {
        btn.setAttribute('disabled', 'true');
    }

    btn.onclick = function checkValue() {
        if (isNaN(xValue) || xValue > 10 || xValue < 1) {
            alert('Невернные данные в поле X');
            inputX.value = '';
            inputY.value = '';
            btn.setAttribute('disabled', 'true');
            return;          
        }
        if (isNaN(yValue) || yValue > 10 || yValue < 1) {
            alert('Невернные данные в поле Y');
            inputY.value = '';
            inputX.value = '';
            btn.setAttribute('disabled', 'true');
            return;
        }

        divTable.innerHTML = '<table class = "table" id = "tableJS"></table>';
        var table = document.getElementById('tableJS');
        
        for (var j = 0; j < yValue; j++) {
            var tr = document.createElement('tr'); 

            for (var k = 0; k < xValue; k++) {
                var td = document.createElement('td');
                tr.appendChild(td);
                td.classList.add('td-size'); 

                if ( !(j%2 != 0) && !(k%2 != 0) ) {
                    td.classList.add('td-color'); 
                }
                if ( !(j%2 == 0) && !(k%2 == 0) ) {
                    td.classList.add('td-color');
                }
            }
            table.appendChild(tr);
        }

        table.onclick = function () {
            var tdСollection = document.getElementsByClassName('td-size');
            
            for (var h = 0; h < tdСollection.length; h++) {
                var everyTd = tdСollection[h];
                everyTd.classList.toggle('td-color');
            }
        }
        
    }
}


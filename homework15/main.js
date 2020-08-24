var divTable = document.getElementById('add-tableJS');
    inputX = document.getElementById('input__xJS'),
    inputY = document.getElementById('input__yJS'),
    btn = document.getElementById('input__btnJS');

inputX.addEventListener('keyup', checkInputs);
inputY.addEventListener('keyup', checkInputs);
btn.addEventListener('click', addingTable);

function checkInputs() {
    var xValue = +inputX.value,
    yValue = +inputY.value;
    (xValue != '' && yValue != '' && xValue != ' ' &&  yValue != ' ')  ?  btn.removeAttribute('disabled') :  btn.setAttribute('disabled', 'true');
}

function addingTable() {
    var xValue = +inputX.value,
    yValue = +inputY.value;

    if ((isNaN(xValue) || xValue > 10 || xValue < 1) || (isNaN(yValue) || yValue > 10 || yValue < 1)) {
        alert('Невернные данные');
        inputX.value = '';
        inputY.value = '';
        btn.setAttribute('disabled', 'true');
        var table = document.getElementById('tableJS');
        if (table) {
            table.remove();
        }
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



var table = document.getElementById('tableJS');
var btn = document.getElementById('addRowJS');

btn.addEventListener('click', addRow);

function addRow() {
    btn.insertAdjacentHTML('beforeBegin', '<tr class="table__tr"><td></td><td></td><td></td></tr>');
}

table.onclick = function(event) {
    var target = event.target;
    if (target.tagName == 'TD' && !(target.classList.contains('colspanJS')) ) {
        target.innerHTML = '<input id ="inputJS" type="text" value=" ' + target.textContent + ' ">';
        var input = document.getElementById('inputJS');
        input.focus();
        
        input.addEventListener('blur', function() {
            target.innerHTML = this.value;
        })

        input.addEventListener('keydown', function(event) {
            if(event.keyCode == 13){
                target = event.target;                
                this.parentNode.innerHTML = this.value;
            }
        });
    }    
}




var table = document.getElementById('tableJS');
var btn = document.getElementById('addRowJS');

btn.addEventListener('click', addRow);

function addRow() {
    btn.insertAdjacentHTML('beforeBegin', '<tr class = "table__tr"><td></td><td></td><td></td></tr>');
}

table.onclick = function(event) {
    var target = event.target;
    if (target.tagName == 'TD' && !(target.classList.contains('colspanJS')) ) {
        var content = target.textContent;
        target.innerHTML = '<input id = "inputJS" type="text" value = " ' + content + ' ">';
        var input = document.getElementById('inputJS');
        input.focus();

        function clicked () {
            var text = input.value;
            target.innerHTML = '<p class = "text" >' + text + '</p>';
        }

        document.onkeydown = function (evt) {
            var keyCode = evt.keyCode;
            if(keyCode == 13) {
                clicked();
            }
        };

        input.onblur = clicked;
    }    
}




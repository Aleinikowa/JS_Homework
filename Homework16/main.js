var btn = document.getElementById('btnJS'),
    blockBtn = document.getElementsByClassName('btn')[0],
    blockUsers = document.getElementById('users'),
    anyUser = document.getElementById('anyUser'),
    dataUsers;

btn.addEventListener('click', loadData);    

window.onload = function() {
    if ((localStorage.getItem('arrayUsers')) ) {
        addInputs();
    }
}

function loadData() {
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://reqres.in/api/users?page=2');
    xhr.send();

    xhr.onload = function() {
        var status = +String(this.status)[0];

        if (status == 2) {
            dataUsers = JSON.parse(this.response).data;
            localStorage.setItem('arrayUsers', JSON.stringify(dataUsers));
            addInputs();
        }
        if (status == 4) {
            err();
        }
    }

    xhr.onerror = function() {
        err();
    }
}

function addInputs() {
    dataUsers = localStorage.getItem('arrayUsers');
    var data = JSON.parse(dataUsers);

    blockBtn.style.display = 'none';
    blockUsers.style.display = 'block';

    data.forEach(function(obj,counter) {
        var i = ++counter;
        blockUsers.innerHTML += '<input type="radio" name="dataUser" id="' + i + '"class="users__radio">';     
        blockUsers.innerHTML += '<label for="' + i + '" class="users__label">User  ' + i + ' </label>'; 

        var first = document.getElementsByTagName('input')[0],
            item = first.getAttribute('id');
        
        first.setAttribute('checked', true);    
        anyUser.classList.add('anyUser');
        anyUser.innerHTML = createHtml(data, item);
    })

    blockUsers.onclick = function(event) {
        var target = event.target;
        if (target.tagName == 'LABEL') {
            var item = target.htmlFor;
            anyUser.classList.add('anyUser');
            anyUser.innerHTML = createHtml(data, item);
        }
    }
}

function createHtml(array, counter) {
    var object =  array[--counter],
        fNameUser = object.first_name,
        lNameUser = object.last_name,
        avatarUser = object.avatar,
        emailUser = object.email,
        idUser = object.id,
        html = '<img src=" ' + avatarUser + ' " alt="avataruser' + --counter + ' ">' +
            '<h2><span>First Name:</span> ' + fNameUser + '</h2>' +
            '<h2><span>Last Name:</span> ' + lNameUser + '</h2>' +
            '<h3><span>email:</span> ' + emailUser + '</h3>' +
            '<h3><span>id:</span> ' + idUser + '</h3>';

    return html;
}

function err () {
    var blockErr = document.getElementById('error');
    blockErr.classList.add('error');
    blockErr.style.display = 'block';

    function showEror() {
        blockErr.style.display = 'none';
    }
    setTimeout(showEror, 1000); 
}
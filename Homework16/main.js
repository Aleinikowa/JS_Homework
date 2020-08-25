var btn = document.getElementById('btnJS'),
    blockBtn = document.getElementsByClassName('btn')[0],
    blockUsers = document.getElementsByClassName('users')[0];

btn.addEventListener('click', addUsers);    

window.onload = function() {
    if ( !(localStorage.getItem('arrayUsers')) ) {
        var xhr = new XMLHttpRequest;
        xhr.open('GET', 'https://reqres.in/api/users?page=2');
        xhr.send();
    
        xhr.onload = function() {
            var status = +String(this.status)[0];
    
            if (status == 2) {
                dataUsers = JSON.parse(this.response).data;
                localStorage.setItem('arrayUsers', JSON.stringify(dataUsers));
            }
            if (status == 4) {
                err();
            }
        }

        xhr.onerror = function() {
            err();
        }
    } 
}

function err () {
    var blockErr = document.getElementsByClassName('error')[0];
    blockErr.style.display = 'block';

    function showEror() {
        blockErr.style.display = 'none';
    }
    setTimeout(showEror, 1000); 
}

function addUsers() {
    var dataUsers = localStorage.getItem('arrayUsers'),
        data = JSON.parse(dataUsers);

    blockBtn.style.display = 'none';
    blockUsers.style.display = 'block';

    data.forEach(function(object, counter) {
        var fNameUser = object.first_name,
            lNameUser = object.last_name,
            avatarUser = object.avatar,
            emailUser = object.email,
            idUser = object.id,
            i = ++counter,
            divUser = document.createElement('div');
        
        blockUsers.innerHTML += '<input type="radio" name=FOLDER id="user' + i + '"class="users__radio">';     
        blockUsers.innerHTML += '<label for="user' + i +'">User  ' + i + '</label>'; 
        divUser.classList.add('users__div');
        divUser.innerHTML += '<img src=" ' + avatarUser + ' " alt="avataruser' + i + ' ">';
        divUser.innerHTML += '<h2><span>First Name:</span> ' + fNameUser + '</h2>';
        divUser.innerHTML += '<h2><span>Last Name:</span> ' + lNameUser + '</h2>';
        divUser.innerHTML += '<h3><span>email:</span> ' + emailUser + '</h3>';
        divUser.innerHTML += '<h3><span>id:</span> ' + idUser + '</h3>';
        blockUsers.appendChild(divUser);
    })
   document.getElementById('user1').setAttribute('checked', true);
}

 

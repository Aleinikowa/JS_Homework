localStorage.clear();

var container = document.getElementById('container'),
    firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var btn = document.getElementsByTagName('button')[0],
    linkFirstPar = firstPar.children;

btn.onclick = function() {
    for (var i = 0; i < linkFirstPar.length; i++) {
        var link = linkFirstPar[i];
        link.classList.add('link');
    }
}

var linkSecondPar = secondPar.children;

function preventDef() {
    event.preventDefault();
    var link = event.target,
        linkText = link.textContent,
        linkHref = link.getAttribute('href'),
        objectHref = {path : linkHref};
    if (localStorage.getItem(linkText) === null) {
        localStorage.setItem(linkText, JSON.stringify(objectHref));
        link.setAttribute('href', '#');
        alert ('Ссылка была сохранена в localStorage');
    } else {
        var objHref = JSON.parse(localStorage.getItem(linkText));
        alert(objHref.path);
    } 
}

for (var i = 0; i < linkSecondPar.length; i++) {
    var item = linkSecondPar[i];
    item.addEventListener('click', preventDef);
}

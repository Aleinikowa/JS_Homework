let text = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    reset = document.getElementById('reset'),
    save = document.getElementById('save'),
    msec = document.getElementById('msec'),
    sec = document.getElementById('sec'),
    min = document.getElementById('min'),
    mseconds = +msec.dataset.msec,
    seconds = +sec.dataset.sec,
    minutes = +min.dataset.min,
    body = document.body,
    html,
    timerId; 

start.onclick = function() {
    let dataText = start.dataset.s;
    if (dataText == 'start') {
        timer();
        start.textContent = 'Stop';
        start.dataset.s = 'stop';
        reset.classList.remove('display');
        save.classList.remove('display');
    }
    if (dataText == 'stop') {
        stop();
        start.textContent = 'Run';
        start.dataset.s = 'start';
    }
}
     
function addValue() {
    mseconds++;
    if (mseconds >= 100) {
        mseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes == 2) {
            clearTimeout(timerId);
            start.classList.add('display');
            save.classList.add('display');
            return;
        }
    }
    text.innerHTML = creatTime();
    timer();
}

function timer() {
    timerId = setTimeout(addValue, 10);
}

function stop() {
    clearTimeout(timerId);
}

reset.onclick = function() {
    text.innerHTML = '<span id="min" data-min="0">00</span>:<span id="sec" data-sec="0">00</span>:<span id="msec" data-msec="0">00</span>';
    reset.classList.add('display');
    save.classList.add('display');
    mseconds = 0;
    seconds = 0;
    minutes = 0;
    stop();
    start.textContent = 'Start';
    start.dataset.s = 'start';
    start.classList.remove('display');
    if (document.getElementById('list')) {
        let div = document.getElementById('divList');
        body.removeChild(div);
    }
}

save.onclick = function() {
    if (document.getElementById('list')) {
        creatLi();
        return;
    }
    let div = document.createElement('div'),
        ol = document.createElement('ol');
    div.setAttribute('id', 'divList');
    ol.setAttribute('id', 'list');
    ol.classList.add('list');
    div.appendChild(ol);
    body.appendChild(div);
    creatLi();
}

function creatLi() {
    let ol = document.getElementById('list'),
        li = document.createElement('li');
    li.innerHTML = creatTime();
    ol.appendChild(li);
}
function creatTime() {
   html = '<span id="min" data-min="' + minutes + '">' + (minutes ? (minutes == 1 ? minutes : '0' + minutes) : '00') + '</span>:<span id="sec" data-sec="' + seconds + '">' + (seconds ? (seconds > 9 ? seconds : '0' + seconds) : '00') + '</span>:<span id="msec" data-msec="' + mseconds +'">' + (mseconds > 9 ? mseconds : '0' + mseconds) + '</span>';
   return html;
}

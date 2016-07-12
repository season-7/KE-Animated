$(document).foundation()
document.getElementById('button').onclick = (function() {
    document.getElementsByTagName('audio')[0].play();
    document.getElementsByTagName('span')[0].innerHTML = 'The Best!';
    return false;
});


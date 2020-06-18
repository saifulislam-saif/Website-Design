
document.getElementById('pot').style = 'justify-content:' + pot_value;

var user = document.getElementById('user');
var output = document.getElementById('output');
var link_next = document.getElementById('link_next');

function result() {
    output.style = 'justify-content:' + (user.value);

    if (user.value == pot_value) {
        link_next.innerHTML = 'Next';
    } else if (user.value != pot_value) {
        link_next.innerHTML = '';
    }
    return false;
}
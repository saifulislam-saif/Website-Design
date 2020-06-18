var item_number = 2;

for (i = 1; i <= item_number; i++) {
    document.write('<div class="apple"><img src="images/apple.png"></div>');
}
document.write('<div id="pot">');

for (i = 1; i <= item_number; i++) {
    document.write('<div class="pot_item"><img src="images/pot.png"></div>');
}
document.write('</div>');

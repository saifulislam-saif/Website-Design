var values = [
    'center',
    'flex-end',
    'flex-start',
    'space-around',
    'space-between'
]

var values_mean = [
    'Items align at the center of the container.',
    'Items align to the right side of the container.',
    'Items align to the left side of the container.',
    'Items display with equal spacing around them.',
    'Items display with equal spacing between them.'
]

for (i = 0; i < 5; i++) {
    document.write('<li>' + ' ( ' + (i + 1) + ' ) ' + '<span>' + values[i] + '</span>' + ' : ' + values_mean[i] + '</li>');
}

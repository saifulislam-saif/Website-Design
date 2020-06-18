document.write('<label>display: <span>flex</span>;<br></label>' +
    '<label>justify-content: </label>' +
    '<select class="select_css" id="user">' +
    '<option> -- -- -- -- -- -- -- </option>');

for (i = 0; i < 5; i++) {
    document.write('<option>' + values[i] + '</option>');
}

document.write('</select>' +
    '<label>; &lArr;Click to select and submit.<br><br></label>' +
    '<button type="submit" onclick="return result()">Submit</button>');

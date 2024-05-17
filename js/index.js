console.log('Hello from index.js');
// Attach a click handler to the button within the JS file

function getNameAndDisplay() {
  let name = prompt("Name Please: ");
    $('#title').html('Hello, ' + Name);
}

$('#my-button').click(getNameAndDisplay);
 
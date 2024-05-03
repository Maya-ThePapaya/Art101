// *
//*
//* 
 //*Functions
 //* coding functions that take user inpus and manipulate strings
 //*
 //* @author Harlow Knott and Maya Pahre
//* @since  May 2024
 //* liscense: public domain
 
// this is an example function and this comment tells what it doees and what parameters are passed to it.
function sortUserName() {
  var userName = window.prompt("Excusez-Moi! What name doth you use?");
console.log("userName =", userName);
var nameArray = userName.split('')
console.log("nameArray =", nameArray);
var nameArraySort = nameArray.sort();
console.log("nameArraySort =", nameArraySort);
var nameSorted = nameArraySort.join('');
console.log("nameSorted =", nameSorted);
return nameSorted;
}

//output
document.writeln("Lovely name you've got there, dont worry I made it even better!: ",
sortUserName(), "</br>");

var original_string = "ovely name you've got there, dont worry I made it even better!";
var padded_string = original_string.padStart(20);
console.log(padded_string); // Output: "   
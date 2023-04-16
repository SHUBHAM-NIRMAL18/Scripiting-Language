/*var i;
 var nick = new Array(3);
 nick[0] = "Shubham";
 nick[1] ="Nabin";
 nick[2] ="Shrish";
 nick[3] = "Manish";
 for(i=0;i<nick.length;i++){
  document.write(nick[i]+"<br>");
 }
alert('test');*/

let n = parseInt(prompt("Enter number of students: "));
let students = [];
for (let i = 0; i < n; i++) {
  students.push(prompt("Enter student name: "));
}
console.log(students.join());


const Scripting = Number(prompt("Enter marks for Scripting:"));
const DBMS = Number(prompt("Enter marks for DBMS:"));
const Numerical = Number(prompt("Enter marks for Numerical:"));

const totalMarks = Scripting + DBMS + Numerical;
const percentage = (totalMarks / 300) * 100;

console.log('Marks of Scripting Language:'+ Scripting);
console.log('Marks of DBMA:'+ DBMS);
console.log('Marks of Numerical Method:'+ Numerical);
console.log('Total Marks:'+ totalMarks);
console.log('Obtained Percentage:'+ percentage +'%');

if(percentage >=80)
{
    console.log('Division:Distinction');
    console.log('Result:Pass');
}
else if(percentage >=70)
{
    console.log('Division:First');
    console.log('Result:Pass');
}
else if(percentage >=50)
{
    console.log('Division:Second');
    console.log('Result:Pass');
}
else if(percentage >=40)
{
    console.log('Division:Third');
    console.log('Result:Pass');
}
else
{
    console.log('Division:Fail');
    console.log('Result:Fail');
}



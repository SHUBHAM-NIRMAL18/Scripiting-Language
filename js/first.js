var num1 = prompt('Enter the first number:');
var num2 = prompt('Enter the second number');
var oper = prompt('Choose any operation:(+ - * /)');

if(oper =="+")
    {
        var sum = parseInt(num1)+parseInt(num2);
        alert('The sum of two number is:'+ sum);
    }

if(oper == "-")
{
    var diff= num1-num2;
    alert('The difference of two number is:'+ diff);

}

if(oper == "*")
{
    var prod= num1*num2;
    alert('The product of two number is:'+ prod);

}

if(oper == "/")
{
    var div= num1/num2;
    alert('The division of two number is:'+ div);

}
else{
    alert('Invalid Choice');
}


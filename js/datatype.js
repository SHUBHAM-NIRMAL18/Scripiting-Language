let weight = 56;
console.log(weight == '56');
console.log(weight === '56');

//array

 let toys = ['bat', 'ball', 'whistle', 'puzzle', 'doll'];

 console.log(toys[3]);

 let rolls = new Array(23, 45, 67, 78, 88, 65);

 console.log(rolls[5]);
 delete rolls[1];
 console.log(rolls);


 //for in loop

 let stock = {pen:567, laptop:78, mouse:89};
 console.log(stock);
 console.log(stock.pen);

 for( var item in stock){
    console.log(`${item} : ${stock[item]}`);
 }function DisplayName(fname,mname,lname)
 {
   document.write(fname+" "+mname+" "+lname);
 }
 
 DisplayName('Ram','Kumar','Shrestha');
 
 /*function sum(a,b){
   document.write(a+b);
 }
 */
 /*
 function sum(a,b){
   return a+b;
 }
 
 function avg(total,count){
   return total/count;
 }*/
 
 function sum(a=20,b){
   console.log(a+b);
 }
 
 var total = sum(20);
 //
 console.log(total);
 //console.log(av);
 
 
 /*function add(a=10, b=20)
 {
   return a+b;
 }
 */
 // var add = function(a=10, b=20){
 //   return a+b;
 // }
 
 
 let add = (a=10, b=20) => { return a+b; }
 
 console.log(" Sum is : " + add());   // No argument
 console.log(" Sum is : " + add(1));   // with one argument
 console.log(" Sum is : " + add(5,6));   // with both argument
 
 
 function test(a, ...someMore) 
 {
   sum = a;
 
   for (var i = 0; i < someMore.length; i++) {
     sum += someMore[i];
   }
   document.write('Total sum is ' + sum);
     document.write("First parameter: " + a);
     document.write("<br/>More parameters: " + someMore);
 }
 // calling the function
 test(1, 42, 73, 4, 55);
 
 /*
 // this part creates a new object
 ret = new makeSimpleObject();
 
 // this part defines the object
 function makeSimpleObject() {}
 
 ret.name = "Hello Ram";
 console.log(ret);
 console.log(typeof ret);*/
 
 customer = new makeCustomer("Fred", "123 Main Street", "555-1212");
 alert (customer.name);
 
 function makeCustomer(Name, Address, Phone) {
     this.name = Name;
     this.address = Address;
     this.phone = Phone;
 }

  

 var i;
 var name = new Array[5];
 name[0] = "Shubham";
 name[1] ="Nabin";
 name[2] ="Shrish";
 name[3] = "Manish";
 for(i=0;i<5;i++){
  document.write(name[i]+"<br>");
 }

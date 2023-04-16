
function checkregisterform(){
    let registerform = document.forms.register;
    let username = registerform.username.value;
    let phone = registerform.phone.value;
    let password = registerform.password.value;
    let email = registerform.email.value;
    let address = registerform.address.value;
    let year = registerform.year.value;
    let month = registerform.month.value;
    let day = registerform.day.value;
    let country = registerform.country.value;
    
    

    let usernamePattern = /^([a-zA-Z][a-z0-9]{7,19})$/;
    let phonePattern = /^([9][7-8][0-9]{8})$/;
    let passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    var emailpattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var yearpattern = /^([0-9]{4})$/;
    var monthdaypattern = /^([0-9]{2})$/;
    
    

   /* if(username == ''){
       document.getElementById('error_username').innerHTML='*Enter username';
        registerform.username.style.border = '1px solid red';
        registerform.username.focus();
        return false;
       
    }
    else if(username.length < 8) {
        document.getElementById('error_username').innerText = 'Username must be 8 character';
        registerform.username.style.border = "1px solid red";
        registerform.username.focus();
        return false;
      } 
    else if(!usernamePattern.test(username)) {
        document.getElementById('error_username').innerText = 'Username must be valid (a-z,0-9)';
        registerform.username.style.border = "1px solid red";
        registerform.username.focus();
        return false;
      }
    else{
        document.getElementById('error_username').innerHTML='';
        registerform.username.style.border = '1px solid green';
    }
    if(phone == ''){
        document.getElementById('error_phone').innerHTML='*Enter phone';
        registerform.phone.style.border = '1px solid red';
        registerform.phone.focus();
        return false;
    }
    else if(!phonePattern.test(phone)) {
        document.getElementById('error_phone').innerText = 'Phone must be 10 digit starting with 98';
        registerform.phone.style.border = "1px solid red";
        registerform.phone.focus();
        return false;
    }
    else{
        document.getElementById('error_phone').innerHTML='';
        registerform.phone.style.border = '1px solid green';
    }
    if(password == ''){
        document.getElementById('error_password').innerHTML='*Enter password';
        registerform.password.style.border = '1px solid red';
        registerform.password.focus();
        return false;
    }
    else if(password.length < 8) {
        document.getElementById('error_password').innerText = '*Password must be 8 character';
        registerform.password.style.border = "1px solid red";
        registerform.password.focus();
        return false;
      } 
    else if(!passwordpattern.test(password)) {
        document.getElementById('error_password').innerText = 'password must contain at least one uppercase, lowercase and a numberic character';
        registerform.password.style.border = "1px solid red";
        registerform.password.focus();
        return false;
      }
    else{
        document.getElementById('error_password').innerHTML='';
        registerform.password.style.border = '1px solid green';
    }
    if(email == ''){
        document.getElementById('error_email').innerHTML='*Enter email';
        registerform.email.style.border = '1px solid red';
        registerform.email.focus();
        return false;
    }
    else if(!emailpattern.test(email)){
        document.getElementById('error_email').innerText= 'enter a valid email';
        registerform.email.style.border = "1px solid red";
        registerform.email.focus();
        return false;

    }
    else{
        document.getElementById('error_email').innerHTML='';
        registerform.email.style.border = '1px solid green';
    }
    if(address == ''){
        document.getElementById('error_address').innerHTML='*Enter address';
        registerform.address.style.border = '1px solid red';
        registerform.address.focus();
        return false;
    }
    else{
        document.getElementById('error_address').innerHTML='';
        registerform.address.style.border = '1px solid green';
    }
    if(year == '')
    {
        document.getElementById('error_year').innerHTML='*Enter full dob';
        registerform.year.style.border= '1px solid red';
        registerform.year.focus();
        return false;

    }
    else if(year.length < 4) {
        document.getElementById('error_year').innerText = 'enter valid year';
        registerform.year.style.border = "1px solid red";
        registerform.year.focus();
        return false;
      } 
    else if(!yearpattern.test(year)) {
        document.getElementById('error_year').innerText = 'year must be valid';
        registerform.year.style.border = "1px solid red";
        registerform.year.focus();
        return false;
      }
    else{
        document.getElementById('error_year').innerHTML='';
        registerform.year.style.border = '1px solid green';
    }
    if(month == '')
    {
        document.getElementById('error_month').innerHTML='*Enter full dob';
        registerform.month.style.border= '1px solid red';
        registerform.month.focus();
        return false;

    }
    else if(month.length < 2) {
        document.getElementById('error_month').innerText = 'enter valid month';
        registerform.month.style.border = "1px solid red";
        registerform.month.focus();
        return false;
      } 
    else if(!monthdaypattern.test(month)) {
        document.getElementById('error_month').innerText = 'month must be valid';
        registerform.month.style.border = "1px solid red";
        registerform.month.focus();
        return false;
      }
    else{
        document.getElementById('error_month').innerHTML='';
        registerform.month.style.border = '1px solid green';
    }
    if(day == '')
    {
        document.getElementById('error_day').innerHTML='*Enter full dob';
        registerform.day.style.border= '1px solid red';
        registerform.day.focus();
        return false;

    }
    else if(day.length < 2) {
        document.getElementById('error_day').innerText = 'enter valid day';
        registerform.day.style.border = "1px solid red";
        registerform.day.focus();
        return false;
      } 
    else if(!monthdaypattern.test(day)) {
        document.getElementById('error_day').innerText = 'day must be valid';
        registerform.day.style.border = "1px solid red";
        registerform.day.focus();
        return false;
      }
    else{
        document.getElementById('error_day').innerHTML='';
        registerform.day.style.border = '1px solid green';
    }*/
    
    if(country == '')
    {
        document.getElementById('error_country').innerHTML='select country';
        registerform.country.focus();
        return false;
    }

}
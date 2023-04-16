function displayClock(){
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let date = today.getDate();
    let day = today.getDay();
    let hour = today.getHours();
    let am_pm = hour<12?'AM':'PM';
    hour = hour%12;
    let minute = today.getMinutes();
    let second = today.getSeconds();
    second = (second<10)?'0' + second:second;
    let mili = today.getMilliseconds();
  
    const months = ['Jan','Feb','Mar','April','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  
    //console.log(`${year} - ${month}-${date} ${day} ${hour}:${minute}:${second}`);
    //April 12 2023 Wednesday 11:56:03 AM
    document.getElementById('clock').innerText = `${months[month]} ${date} ${year} ${days[day]} ${hour}:${minute}:${second} ${am_pm}`;
    
    let i = 0;
        let colors = ['yellow','blue', 'red', 'orange'];

        
        function changeColor(){
            document.body.style.backgroundColor = colors[second%4];
            i++;
            if(i>=colors.length){
                i=0;  
            }
        }

        setInterval(changeColor, 1000);
        setTimeout(displayClock,1000);
  }
  
  displayClock();
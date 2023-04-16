function findKeyword() {
    let keyword = document.forms.search_form.keyword.value;
    let data = document.getElementById('search_data').innerText;
  
    let count = 0;
    let index = data.indexOf(keyword);
  
    while(index !== -1){
      count++;
      index = data.indexOf(keyword,index+1);
      
    }
    
    let searchRegex = new RegExp(keyword,"g");
    console.table(searchRegex);
    document.getElementById("search_data").innerHTML= data.replace(searchRegex,`<mark>${keyword}</mark>`);
    console.log("Total match is " + count);
  }
function countOccurrences(str, search) {
    let count = 0;
    let index = str.indexOf(search);
    while (index !== -1) {
      count++;
      index = str.indexOf(search, index + 1);
    }
    return count;
  }
  
  let inputString = prompt("Enter a string:");
  let searchTerm = prompt("Enter a search term:");
  
  let numOccurrences = countOccurrences(inputString, searchTerm);
  
  console.log(`The search term "${searchTerm}" appears ${numOccurrences} times in the input string "${inputString}".`);
  
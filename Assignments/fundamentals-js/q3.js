function searchCharacters(str, pattern) {
    const regex = new RegExp(pattern, 'g');
    return str.match(regex) || [];
  }
  
  console.log(searchCharacters('Hello World 123!', '\\d')); 
  console.log(searchCharacters('Hello World 123!', '[A-Z]')); 
  console.log(searchCharacters('Hello World 123!', '[a-z]')); 
  console.log(searchCharacters('Hello World 123!', '\\W')); 
  
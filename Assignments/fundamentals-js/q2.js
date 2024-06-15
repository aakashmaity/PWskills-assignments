function testPattern(pattern, str) {
    const regex = new RegExp(pattern);
    return regex.test(str);
  }
  
  console.log(testPattern('hello', 'hello world')); 
  console.log(testPattern('^hello', 'say hello')); 
  console.log(testPattern('\\d+', '123abc')); 
  console.log(testPattern('\\bword\\b', 'a word of advice')); 

  
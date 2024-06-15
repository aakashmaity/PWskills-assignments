function outerFunction(outerParam) {
    let outerVar = 'I am from outerFunction';
  
    function innerFunction() {
      console.log('Outer Variable:', outerVar);
      console.log('Outer Parameter:', outerParam);
    }
  
    return innerFunction;
  }
  

  let example = outerFunction('outer parameter');
  example(); 
  
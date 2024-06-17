if (!Array.prototype.customIncludes) {
  Array.prototype.customIncludes = function (searchElement, fromIndex) {
    var start = fromIndex || 0;
    
    for(var i=start; i<this.length; i++){
        if(this[i]===searchElement){
            return true;
        }
    }
    return false;
  };
}

const array = [1, 2, 3, 4, 5];
console.log(array.customIncludes(3));
console.log(array.customIncludes(6));

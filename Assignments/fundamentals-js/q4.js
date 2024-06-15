function matchAndExtract(pattern, string) {
    const regex = new RegExp(pattern);
    const matches = string.match(regex);
    
    if (matches) {
      return matches.groups; 
    } else {
      return false;
    }
  }
  
  const datePattern = /(?<day>\d{2})-(?<month>\d{2})-(?<year>\d{4})/;

  console.log(matchAndExtract(datePattern, '15-06-2024')); // { day: '15', month: '04', year: '2024' }
  
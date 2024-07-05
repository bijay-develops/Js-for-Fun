function checkForProperty(object, property) {
    return object.hasOwnProperty(property);
  }
  
  console.log(
    checkForProperty({ top: 'hat', bottom: 'pants' }, 'top')
    ); // true
  console.log(
    checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle')
    ); // false
  console.log(
    checkForProperty({ top: 'hat', bottom: 'pants' }, 'hat')
    ); // false
  console.log(
    checkForProperty({ top: 'hat', bottom: 'pants' }, 'bottom')
    ); // true
    
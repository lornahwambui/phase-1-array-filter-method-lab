// Code your solution here
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }

function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }

  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
  }
  const drivers = [
    { name: 'John', hometown: 'New York' },
    { name: 'Alice', hometown: 'Los Angeles' },
    { name: 'Bob', hometown: 'Chicago' },
    { name: 'Mary', hometown: 'Houston' },
  ];
  
  console.log(findMatching(drivers, 'alice')); 
  console.log(fuzzyMatch(drivers.map(driver => driver.name), 'b')); 
  console.log(matchName(drivers, 'Mary'));

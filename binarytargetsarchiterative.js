function binarySearch(array, target) { let left = 0;
  let right = array.length - 1;
  
  
  while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  
  
  if (array[mid] === target) { return mid;
  } else if (array[mid] < target) { left = mid + 1;
  } else {
  right = mid - 1;
  }
  }
  
  
  return -1;
  }
  
  
  const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
  const target = 11;
  
  
  const index = binarySearch(array, target);
  
  
  if (index === -1) {
   
  console.log('Element not present in array');
  } else {
  console.log(`Element found at index ${index}`);
  }
  
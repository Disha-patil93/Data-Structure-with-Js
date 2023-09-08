function binarySearch(array, target, left, right)
 { if (left > right) 
    {
    return -1;
    }
    const mid = Math.floor((left + right) / 2);
    
    if (array[mid] === target)
    { return mid;
    } 
    else if (array[mid] < target) 
    {
    return binarySearch(array, target, mid + 1, right);
    }
     else 
     {
    return binarySearch(array, target, left, mid - 1);
    }
    }
    
    const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
    const target = 13;
    const index = binarySearch(array, target, 0, array.length - 1); if (index === -1) 
    {
    console.log('Element not present in array');
    } 
    else 
    {
    console.log(`Element found at index ${index}`);
    }
    
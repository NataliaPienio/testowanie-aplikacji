//sortowanie bąbelkowe
const test = require('node:test');
const assert = require('assert');

function bubbleSort(arr) { 
  
    var x, y; 
    var len = arr.length; 
  
    var isSwapped = false; 
  
    for (x = 0; x < len; x++) { 
  
        isSwapped = false; 
  
        for (y = 0; y < len; y++) { 
            if (arr[y] > arr[y + 1]) { 
                var temp = arr[y] 
                arr[y] = arr[y + 1]; 
                arr[y + 1] = temp; 
                isSwapped = true; 
            } 
        } 

        if (!isSwapped) { 
            break; 
        } 
    } 
    return(arr);

} 

test('testing bubbleSort',()=>{

    let arr = [5,42,24,100,2,123,7,111]; 
    let expectedResult = [2,5,7,24,42,100,111,123];

    let result = bubbleSort(arr);

    assert.notStrictEqual(result, expectedResult);
  });
function mergeSort(arr) {
    // YOUR CODE HERE
    if(arr.length <= 1){
      return arr
    }

    let mid = Math.floor(arr.length / 2)

    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)
  }
  console.log(mergeSort([1,3,2,6,4,3,-2]))
  
  
  // HELPER FUNCTION: merge two sorted arrays
  function merge(arr1, arr2) {
    var result = [];
  
    while (arr1.length && arr2.length) {
      if(arr1[0] <= arr2[0]) {
        result.push(arr1.shift());
      } else {
        result.push(arr2.shift());
      }
    }
  
    return result.concat(arr1, arr2);
  }
  
  
  function quickSort(arr){
    // YOUR CODE HERE
    if(arr.length <= 1){
      return arr
    }
    let pivot = arr[arr.length - 1]
    const low = []
    const high = []
    for(let i = 0; i < arr.length - 1; i++){
      if(arr[i] <= pivot){
        low.push(arr[i])
      } else {
        high.push(arr[i])
      }
    }
    return [...quickSort(low), pivot, ...quickSort(high)]
  }
  console.log(quickSort([1,3,2,6,4,3,-2]))
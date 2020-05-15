let array = [1, 2, 3, 4, 5, 5, 5, 5, 5, 6, 7, 8, 9, 10]; 
  
  function removeBelowFive(arr) {
    let minIdex = 0;
    let maxIdex = arr.length -1;
    let currentIndex;
    let currentElement;
    while (minIndex < maxIndex) {
      currentIndex = math.floor((minIndex + maxIndex) / 2);
      
      currentElement arr[currentIndex];
      console.log("currentIndex:" + currentIndex)
      console.log("maxIndex:" + maxIndex)
      console.log("currentElement:" + currentElement)
        if (currentElemt < 5) {
          minIndex = currentIndex + 1:
          console.log("minIndex:" + minIndex)
     }
     else if(currentElement > 5) {
     maxIndex = currentIndex -1;
     }
     else if (currentElement === 5) {
      while(arr[currentIndex -1] === 5) {
        currentIndex --;
        console.log(currentIndex);
     }
     arr.splice(0, currentIndex);
     }
    }
    return arr;
  }
  
  removeBelowFive(array);

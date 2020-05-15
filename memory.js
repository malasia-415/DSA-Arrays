class Memory {
  constructor() {
    this.memory = new Float64Array(1024);
    this.head = 0;
  }

  allocate(size) {
    if (this.head + size > this.memory.length) {
      return null;
    }

    let start = this.head;

    this.head += size;
    return start;
  }

  free(ptr) {}

  copy(toIdx, fromIdx, size) {
    if (fromIdx === toIdx) {
      return;
    }
    
class Array {
    constructor() {
        this.length = 0;
        this.ptr = memory.allocate(this.length);
    }
 function main(){

    Array.SIZE_RATIO = 3;
      arr.push(5);
      arr.push(15);
      arr.push(19);
      arr.push(45);
      arr.push(10);
   // The length, capacity and memory of this array is 0(n2), 45, because the ending result would be 
   //45, and free(ptr).
  var main = [" ", " ", " "];
   arr.pop();
   arr.pop();
   arr.pop();
   //The capacity, length and address of this array O(n), length is 1 because their all empty strings,
   //memory get(ptr).
    
    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
   //Length capacity and memory address for this array is O(n) and allocate(size).
   var main = ["5", "15", "19", "45", "10"];
    arr.push(3);

    console.log(arr);
}
    
    if (fromIdx > toIdx) {
      // Iterate forwards
      for (let i = 0; i < size; i++) {
        this.set(toIdx + i, this.get(fromIdx + i));
      }
    } else {
      // Iterate backwards
      for (let i = size - 1; i >= 0; i--) {
        this.set(toIdx + i, this.get(fromIdx + i));
      }
    }
  }
  _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
    }

  get(ptr) {
    return this.memory[ptr];
  }

  set(ptr, value) {
    this.memory[ptr] = value;
  }
}

module.exports = Memory;

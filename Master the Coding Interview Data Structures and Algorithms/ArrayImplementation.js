// Arrays in JavaScript are just objects with integer based keys that act like indexes.
// Different languages have different ways to impelemnt data structures.

class MyArray{
  constructor(){
    this.length = 0;
    this.data = {};
  }

  get(index){
    return this.data[index]
  }

  push(item){
    this.data[this.length] = item
    this.length++; // array size increases
    return this.length
  }

  pop(){
    const lastItem = this.data[this.length -1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  delete(index){
    const item = this.data[index]
    this.shiftItems(index);
    return item
  }

  shiftItems(index){
    for (let i = index; i < this.length-1; i++){
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length-1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
// newArray.pop();
// newArray.pop();
newArray.delete(1);
console.log(newArray);

//console.log(newArray.get(0)); // undefined.

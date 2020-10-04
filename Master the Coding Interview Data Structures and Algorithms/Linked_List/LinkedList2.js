
// This instantiate a new linkedList that is empty and has a size of 0.
var LinkedList = function(){
  this.head = null;
  this.size = 0;
}

// A node is a point in a linked list. This will make the node have a value and a next pointer that is initially empty until we
// decide to add a node to the linkedlist.
}
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

// getting the value of teh index-th node in the linked list If index is invalid, return -1.
LinkedList.propototype.get = function(index){
  // LinkedLists has no negative index as the index starts with the 0-th index.
  // If index is equal to the size or greater than the size of the linkedlist, there is no value. A size of 5 will have a max index of 4 (n-1)
  if (index < 0 || index >= this.size){
    return -1;
  }
  // this grabs the 0th index automatically so if index = 0, it will return this as the current.
  let cur = this.head;
  for (let i = 0; i < index; i++){
    cur = cur.next;
  }
  return cur.val;
}

LinkedList.prototype.addAtHead = function(val){
  // this creates an instance of a node that is ready to be added to the linkedlist.
  const newNode = new Node(val);
  // makes the next vaklue of the new node, the current head.
  newNode.next = this.head;
  // changes the head to the new node.
  this.head = newNode;
  // increases size of linkedlist.
  this.size++;
}

LinkedList.prototype.addAtTail = function(val){
  // this creates an instance of a node that is ready to be added to the linked list.
  const newNode = new Node(val);
  // if head is not null, go to the end of the linked list to add a value
  if (this.head !== null){
    //starts traversal setting cur node to the head.
    let cur = this.head;
    while (cur.next !== null){
      //loops through linked list until cur.next is empty.
      cur = cur.next;
    }
    // once an empty cur.next value is found, sets the cur.next value to the new node.
    cur.next = newNode;
  } else{
  // if linkedlist has no head, add at tail is basically add at head as well.
    this.head = newNode;
  }
  // increases size of linkedlist.
  this.size++;
}

LinkedList.prototype.addAtIndex = function(index, val){
  // if index is greater than 0 or larger than the size of the linkedlist, it's not possible to add the index.
  if (index < 0 || index > this.size){
    return;
  }
  // if index == 0, use the add at head function.
  if (index === 0){
    this.addAtHead(val);
    return;
  }
  if (index === this.size){
    //if index is 5 but size is 5, the last index will be 4, so adding a value to the 5th index is just extending the tail.
    this.addAtTail(val);
    return;
  }
  let cur = this.head;
  //loop through until the index before wanted index since we're inserting in that area.
  for (let i =0; i < index -1;i++){
    cur = cur.next;
  }
  // sets the next value of the current next's value as a temp
  const curIndexNext = cur.next;
  //creates a new value
  const newNode = new Node(val);
  cur.next = newNode;
  newNode.next = curIndexNext;
  this.size++
}

LinkedList.prototype.deleteAtIndex = function(index){
  if (index < 0 || index >=this.size){
    return;
  }
  if (index === 0){
    this.head = this.head.next;
    this.size--;
    return;
  }
  let cur = this.head;
  for (let i =0; i< index-1;i++){
    cur = cur.next;
  }
  cur.next = cur.next.next;
  this.size--;
  
}

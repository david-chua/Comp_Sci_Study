class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value){
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1
  }

  append(value){
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList(){
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null){
      array.push(currentNode.value)
      currentNode = currentNode.next;
    }
    console.log(array)
    return array;
  }

  traverseToIndex(index){
    // check param
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  insert(index, value){
    // check params
    if (index >= this.length){
      // You can also choose to make this an error, otherwise add to end of linkedlist
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    this.printList();
  }

  remove(index, value){
    if (index >= this.length || index < 0){
      return "index does not exist"
    }
    const leader = this.traverseToIndex(index-1)
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  reverse(){
    if (!this.head.next){
      return this.head
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while(second){
      const temp = second.next
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null
    this.head = first;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2,99);
myLinkedList.insert(20,88);
myLinkedList.printList();
myLinkedList.remove(2);
myLinkedList.printList();
myLinkedList.reverse();

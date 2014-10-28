function LinkedList() {
  this.tail = null;
  this.head = null;
  this.length = 0;
};

LinkedList.prototype.newNode = function(data) {
    var node = {
      data: data,
      next: null,
      prev: null
    };
    return node;
};


LinkedList.prototype.insert = function(data) {
    var node = this.newNode(data);

    if (this.length == 0) {
      this.head = node;
      this.tail = node;
    }  else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return node.data + ' added successfully';
  };

LinkedList.prototype.size = function(node){
  return this.length
};

LinkedList.prototype.traverse = function() {
  index = this.length
  if (index >= 0 && index < this.length) {
    var node = this._head;
    while (index--) {
      node = node.next;
    }
    return node;
  }
};

LinkedList.prototype.search = function(val) {
  index = this.length
  if (index >= 0) {
    var node = this.head;
    while (index-- && node.data != val) {
      node = node.next;
    }
    return node;
  }
};

LinkedList.prototype.showAll = function() {
  index = this.length
  val = this.tail.data
  if (index >= 0) {
    var node = this.head;
    while (index-- && node.data != val) {
      console.log(node.data);
      node = node.next;
    }
    console.log(node.data);
    return '';
  }
};


LinkedList.prototype.remove = function(val){
  index = this.length
  if (index >= 0) {
    var node = this.head;
    while (index-- && node.data != val) {
      node = node.next;
    }
    if (node == this.head) {
      this.head = node.next
      node.next.prev = null
    }
    if (node == this.tail) {
      this.tail = node.prev
      node.prev.next = null
    } else {
      node.next.prev = node.prev
      node.prev.next = node.next
    }
  }
};

LinkedList.prototype.to_s = function(){
  index = this.length
  array = []
  if (index >= 0) {
    var node = this.head;
    while (index-- && index != 0) {
      array.push(node)
      node = node.next;
    }
    stringArray = []
    for (var i = 0; i < array.length; i++) {
      stringArray.push(array[i].data);
    }
    console.log(stringArray.toString())
    return '';
  }

};

var list = new LinkedList()

list.insert('data');
list.insert('data2');
list.insert('data3');
list.insert('data4');
list.insert('data5');
// console.log(list)
//console.log('Testing size, (should be 5) list size: ' + list.size())
console.log('')
console.log(list.insert('data6'))
console.log('')
console.log('Testing search, (should be data6 that we just inserted) data: ' + list.search('data6').data)
list.remove('data4')
console.log('')
console.log('Testing remove, the list should be lacking data4:')
console.log(list.showAll())
console.log('(should not have data4) Test to_s:')
console.log(list.to_s())

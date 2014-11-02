function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype = {
  constructor: BinarySearchTree,

    contains: function(value){

      var found = false,
      current = this.root
      while(!found && current){
        if (value < current.value){
          current = current.left;
        }else if (value > current.value){
          current = current.right;
        }else {
          found = true;
          }
        }
        return found;
    },

    depth: function(){

      var pointer1 = this.root,
        pointer2 = this.root,
        leftHeight = 0,
        rightHeight = 0

      while(pointer1){
        pointer1 = pointer1.right;
        rightHeight++;
      };
      while(pointer2){
        pointer2 = pointer2.left;
        leftHeight++;
      };
      return Math.max(rightHeight, leftHeight);
    },

    size: function(){

      var length = this.inOrder().length;
      return length;
    },

    insert: function(value){

        var node = {
          value: value,
          left: null,
          right: null
          },

        current;

        if (this.root === null){
          this.root = node;
        } else {
            current = this.root;

            while(true){
              if(value < current.value){
                if(current.left === null){
                  current.left = node;
                  break;
                } else {
                    current = current.left;
                    }

                } else if (value > current.value){
                    if(current.right === null){
                      current.right = node;
                      break;
                } else {
                    current = current.right;
                    }
                } else {
                    break;
                }
            }
        }
    },

        preOrder: function(){

        value = [];
        current = this.root;

        function traversing(current){
          if (current){

            value.push(current.value);

            if (current.left !== null){
              traversing(current.left);
            }

            if (current.right !== null){
              traversing(current.right);
            }
          }
        }
        traversing(current);
        return value;
    },

    breadthFirst: function(func){

      var queue = [this.root];
      var list = [];
      while(queue.length!=0) {
        var node = queue.shift();
        list.push(node.value);
        if (node.left) {
          queue.push(node.left);
        };
        if (node.right) {
          queue.push(node.right);
        };
      }
      return list;
    },

    postOrder: function(){
      value = [];
      current = this.root;

        function traversing(current){
          if (current){

            if (current.left !== null){
              traversing(current.left);
            }

            if (current.right !== null){
              traversing(current.right);
            }

            value.push(current.value);
          }
        }
        traversing(current);
        return value;
    },

    inOrder: function(){
        value = [];
        current = this.root;

        function traversing(current){
          if (current){

            if (current.left !== null){
              traversing(current.left);
            }

            value.push(current.value);

            if (current.right !== null){
              traversing(current.right);
            }
          }
        }
        traversing(current);
        return value;
    },

    balance: function(){
      var pointer1 = this.root,
        pointer2 = this.root,
        leftHeight = 0,
        rightHeight = 0
      while(pointer1){
        pointer1 = pointer1.right;
        rightHeight++;
      };
      while(pointer2){
        pointer2 = pointer2.left;
        leftHeight++;
      };
      return leftHeight - rightHeight;
    }
}

var searchTree = new BinarySearchTree;

searchTree.insert(7);
searchTree.insert(3);
searchTree.insert(9);
searchTree.insert(10);
searchTree.insert(18);

console.log('')
console.log('Testing contains (should be true):')
console.log(searchTree.contains(18));
console.log('Testing size (should be 5)')
console.log(searchTree.size());
console.log('Testing depth (should be 4)')
console.log(searchTree.depth());
console.log('Testing balance (should be -2)')
console.log(searchTree.balance());

        //     10
        //    /  \
        //   5    20
        //  / \     \
        // 3   7     30


class Node{
    constructor(value){
        this.value =  value;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(10);
 root.left =  new Node(5);
 root.right = new Node(20);
 root.left.left =  new Node(3);
 root.left.right = new Node(7);
 root.right.right = new Node(30);

//  Tree Object Representation
const root = {
    value : 10,
    left: {
        value : 5,
        left :{ value:3, left: null, right: null},
        right : { value: 7, left: null, right: null},
    },
    right:{
        value:20,
        left: null,
        right: {value:30, left: null, right: null }
    }
}
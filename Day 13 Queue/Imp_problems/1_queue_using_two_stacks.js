// Implement Queue Using Two Stacks

// 1. Meaning (Concept)
        // A Queue follows FIFO:
        //             First In → First Out

        // A Stack follows LIFO:
        //             Last In → First Out

        //             The challenge is:
        // How do we achieve FIFO behavior (Queue) using only LIFO structures (Stacks)?

// 2. Core Idea:
//             We use two stacks:
//             ==>Stack 1 (inputStack) → used for enqueue
//             ==>Stack 2 (outputStack) → used for dequeue

//============================================================================================
// problem====> enqueue(1), enqueue(2), dequeue() → 1

class Queue {
    constructor(){
        this.s1 = [];
        this.s2 = [];
    }

    enqueue(value){
        this.s1.push(value);
    }

    enqueue(){

        if(!this.s1.length){
            while(this.s1.length) {
                this.s2.push(this.s1.pop)
            }
        }
        return this.s1.pop()  || null
    }

}


let queue = new Queue();
queue.enqueue(1); // [1]
queue.enqueue(2); // [1,2] after pop {2,1}
queue.dequeue(); [2] //remove 1
console.log(queue.s1); // []
console.log(queue.s2); [2]


// this.s1 = [1,2]
// this.s2= []

// this.s2.push(this.s1.pop());
// Because of this:
//                 No data moves from s1 to s2
//                 Queue behavior is broken
//                 dequeue() removes nothing


// What SHOULD Have Happened (Concept Only):
                                            // s1 → []
                                            // s2 → [2, 1]
                                            // pop() → 1





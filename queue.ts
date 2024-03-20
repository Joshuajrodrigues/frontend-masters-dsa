

class NodeElememt<T>{
    data:T
    next:NodeElememt<T>|null
    constructor(data:T){
        this.data = data
        this.next = null
    }
}


export class Queue<T>{
    head:NodeElememt<T>|null;
    tail :NodeElememt<T>|null;
    length:number
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    enqueue(item:T){
        const newNode = new NodeElememt(item)
        if(!this.tail){
            this.tail = this.head = newNode
            //n
        }
        //n-> new node
        this.tail.next = newNode // create a new item in the end
        this.tail = newNode // point tail to new item
        this.length++
    }
    deque(){
        if(!this.head){
            throw new Error("No head")
        }
        this.length--
        const head = this.head
        this.head = this.head.next // head is the next one as we remove the currect head
        
        return head.data
    }
    peek(){
        return this.head?.data
    }

}

const newQ = new Queue()

newQ.enqueue(1)
newQ.enqueue(2)
console.log(newQ.peek())

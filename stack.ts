


class NodeElement<T>{
    data: T
    next: NodeElement<T> | null
    constructor(data: T) {
        this.data = data
        this.next = null
    }
}


export default class Stack<T>{
    head: NodeElement<T> | null
    tail: NodeElement<T> | null
    length: number

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }


    pop() {
        // []
        if (!this.tail) {
            throw new Error("empty")
        }
        this.length--
        //d->d->null
        //h  t
        const head = this.head
        this.head = this.head?.next || null
        if (!this.head) {
            this.tail = null
        }
        return head?.data

    }
    push(data: T) {
        const newNode = new NodeElement(data)
        if (!this.head) {
            this.head = this.tail = newNode
            //d->null
            //ht
        } else {

            //n->d
            newNode.next = this.head
            this.head = newNode

        }
        this.length++
    }
    peek() {
        return this.head?.data
    }

}

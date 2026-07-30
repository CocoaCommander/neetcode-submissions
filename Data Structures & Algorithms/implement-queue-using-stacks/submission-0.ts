class MyQueue {
    private pushStack: number[];
    private popStack: number[];
    
    constructor() {
        this.pushStack = [];
        this.popStack = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */

    private distribute(): void {
        if (this.popStack.length === 0) {
            while (this.pushStack.length > 0) {
                this.popStack.push(this.pushStack.pop());
            }
        }
    }

    push(x: number): void {
        this.pushStack.push(x);
    }

    /**
     * @return {number}
     */
    pop(): number {
        this.distribute();
        return this.popStack.pop();
    }

    /**
     * @return {number}
     */
    peek(): number {
        this.distribute();
        return this.popStack[this.popStack.length - 1];
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return this.popStack.length === 0 && this.pushStack.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

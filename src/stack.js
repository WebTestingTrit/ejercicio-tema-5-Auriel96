export class Stack {
  constructor() {
    this.elements = [];
  }
  size() {
    return this.elements.length;
  }
  push(input) {
    this.elements.push(input);
    return this.size();
  }
  pop() {
    return this.elements.pop();
  }
  peek() {
    return this.elements[this._lastInsertedItem()];
  }
  _lastInsertedItem() {
    return this.elements.length - 1;
  }
}

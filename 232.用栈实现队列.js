// push peek/pop size isEmpty

function MyQueue() {
  this.stack = []
  this.temp = []
}
MyQueue.prototype.push = function(item) {
  this.stack.push(temp)
}
MyQueue.prototype.peek = function () {
  if (this.temp.length <= 0) {
    while(this.stack.length !== 0) {
      this.temp.push(this.stack.pop())
    }
  }
  const tempLen = this.temp.length
  return templen && this.temp[tempLen - 1]
}
MyQueue.prototype.pop = function () {
  if (this.temp.length <= 0) {
    while(this.stack.length !== 0) {
      this.temp.push(this.stack.pop())
    }
  }
  return this.temp.pop()
}
MyQueue.prototype.empty = function () {
  return !this.stack.length && !this.temp.length
}
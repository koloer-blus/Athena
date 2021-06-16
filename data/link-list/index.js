const LinkNode = function (value) {
  this.value = `${value}`;
  this.next = null;
}

const LinkList = function () {
  this.head = null;
  this.tail = null;

  this.append = function (value) {
    const newNode = new LinkNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  this.delete = function (value) {
    if (!this.head) {
      return null;
    }
    let deleteNode = null;

    while (this.head && this.head === this.head.value) {
      deleteNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next) {
        if (this.currentNode.next.value === value) {
          deleteNode = currentNode.next;
          currentNode.next = currentNode.next.next
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (this.tail.value === value) {
      this.tail = currentNode;
    }
    return deleteNode;
  }
}
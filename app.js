var SingleLinkedList = function(nodes) {
    for(i = 0; i < nodes.length; i++) {
        this.addNode(nodes[i]);
    }
};

SingleLinkedList.prototype.tracker = {
    storage: [],
    nextId: 0    // same as number of elements
};

SingleLinkedList.prototype.addNode = function(value) {
    var newNode = {
        id: this.tracker.nextId,
        value: value,
        nextNode: null
    };

    if(typeof this.tracker.storage[newNode.id - 1] !== 'undefined') {
        this.tracker.storage[newNode.id - 1].nextNode = newNode.id;
    }

    this.tracker.storage.push(newNode);
    this.tracker.nextId++;
};

SingleLinkedList.prototype.iterateOver = function(firstNodeId) {
    if(firstNodeId !== null) {
        console.log(this.tracker.storage[firstNodeId].value);
        this.iterateOver(this.tracker.storage[firstNodeId].nextNode);
    }
};

var DoubleLinkedList = function(nodes) {
    for(i = 0; i < nodes.length; i++) {
        this.addNode(nodes[i]);
    }
};

DoubleLinkedList.prototype.tracker = {
    storage: [],
    nextId: 0    // same as number of elements
};

DoubleLinkedList.prototype.addNode = function(value) {
    var newNode = {
        id: this.tracker.nextId,
        value: value,
        nextNode: null,
        previousNode: null
    };

    if(typeof this.tracker.storage[newNode.id - 1] !== 'undefined') {
        this.tracker.storage[newNode.id - 1].nextNode = newNode.id;
        newNode.previousNode = this.tracker.storage[newNode.id - 1].id;
    }

    this.tracker.storage.push(newNode);
    this.tracker.nextId++;
};

DoubleLinkedList.prototype.iterateOver = function(firstNodeId) {
    if(firstNodeId !== null) {
        console.log(this.tracker.storage[firstNodeId].value);
        this.iterateOver(this.tracker.storage[firstNodeId].nextNode);
    }
};

DoubleLinkedList.prototype.reverseIterateOver = function(firstNodeId) {
    if(firstNodeId !== null) {
        console.log(this.tracker.storage[firstNodeId].value);
        this.reverseIterateOver(this.tracker.storage[firstNodeId].previousNode);
    }
};

var l = new SingleLinkedList([1, 5, 4]);
l.addNode(41);
console.log(l.tracker.storage);
l.iterateOver(0);

var d = new DoubleLinkedList([1, 2, 3]);
d.addNode(99);
console.log(d.tracker.storage);
d.iterateOver(0);
console.log('\n');
d.reverseIterateOver(3);
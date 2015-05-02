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

var l = new SingleLinkedList([1, 5, 4]);
l.addNode(41);
console.log(l.tracker.storage);
l.iterateOver(0);
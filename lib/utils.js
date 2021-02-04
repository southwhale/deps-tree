class Node {
	constructor(name) {
		this.name = name;
		this.children = {};
		this.parent = null;
	}
	
	addChild(node) {
		this.children[node.name] = node;
		node.parent = this;
	}
	
	removeChild(node) {
		delete this.children[node.name];
		node.parent = null;
	}
	
	getChild(nodeName) {
		return this.children[nodeName];
	}
}

class Tree extends Node {
	constructor(rootName) {
		super(rootName);
	}
	
	addNode(node) {
		this.addChild(node);
	}
	
	removeNode(node) {
		this.removeChild(node);
	}
	
	findAncestorNode(fromNode, targetNodeName) {
		if (!fromNode || fromNode.name === targetNodeName) {
			return fromNode;
		}
		
		return this.findAncestorNode(fromNode.parent, targetNodeName);
	}
}

function printRow(parentNode, name, hasValue = true) {
  let spliter = '';
    
  let tmpNode = parentNode;
  const nodeList = [];
  while(tmpNode) {
    // spliter += ' '.padEnd(3) + (tmpNode.isLast ? ' ' : '|');
    nodeList.unshift(tmpNode);
    tmpNode = tmpNode.parent;
  }
  // const nodePath = nodeList.map(n => n.name).join(',');
  // if (nodePath === 'root,xyctp_test,bindings') {
  //   nodePath
  // }
  nodeList.forEach(n => {
    if (n instanceof Tree) {
      return;
    }
    if (n.isLast) {
      spliter += ' ';
    }
    else {
      spliter += '|';
    }
    spliter += ' '.padEnd(3);
  });
  hasValue && (spliter += '|-');
  
  hasValue ? console.log(spliter, name) : console.log(spliter);
}

module.exports = {
  Tree,
  Node,
  printRow
};

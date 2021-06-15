import * as React from 'react';
import LinkNode from './components/link-node';

const LinkFuncNode = function(value: number) {
  //@ts-ignore
  this.value = value;
  //@ts-ignore
  this.next = null;
  //@ts-ignore
  return this;
};

const LinkList = () => {
  const [head, setHead] = React.useState(null);
  const headRef = React.useRef(head);
  const addNode = (value: string) => {
    if (!value.trim()) {
      alert('列表元素的值无效');
      return;
    }
    //@ts-ignore
    const node = new LinkFuncNode(value);
    if (!head) {
      setHead(node);
      return;
    }
    const tail = forEachNode(head);
    tail.next = node;
    return tail;
  };
  const forEachNode = (head: any, callback: any) => {
    if (!head) return head;
    let temp = head;
    for (let index = 0; temp.next; temp = temp.next, index++) {
      callback(temp);
      console.log(index, temp.value);
    }
    return temp;
  };
  const renderLinkNode = () => {
    const nodeList: any[] = [];
    forEachNode(head, (temp: any) => {
      nodeList.push(temp);
    });
    return nodeList.map((item, index) => (
      <LinkNode key={index} value={item.value} next={item.next} />
    ));
  };
  return (
    <React.Fragment>
      <button onClick={() => addNode('test Node')}>添加节点</button>
      {renderLinkNode()}
    </React.Fragment>
  );
};

export default LinkList;

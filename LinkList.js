class Node{
  constructor(data){
    this.data = data
  }
}
class LinkList{
  constructor(){
    this.head = null
    this.length = 0
  }
  append(data){
    if(this.head){
      this.head = new Node(data)
    }
  }
}
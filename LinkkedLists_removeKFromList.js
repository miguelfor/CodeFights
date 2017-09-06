// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
//
function removeKFromList(l, k) {
    
    var ls = l;
    var node = l;
    
    while(ls && ls.value === k)
       ls = ls.next; 
    
    while (node) {
        if(node.next && node.next.value === k)
            node.next = node.next.next;
        else             
        node = node.next;
    }
      
    return ls 
}

 

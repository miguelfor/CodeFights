//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function hasPathWithGivenSum(t, s) {
    
    if(t == null){
        if(s == 0){return true;}else{return false}
    }
    
    if(t.right != null && t.left != null)
         return hasPathWithGivenSum(t.right, s - t.value) || hasPathWithGivenSum(t.left, s - t.value);
 
    
    if(t.left != null){
         return hasPathWithGivenSum(t.left, s - t.value);
    }else{
        return hasPathWithGivenSum(t.right, s - t.value);
    }
       
   
   

}

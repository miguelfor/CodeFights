function firstDuplicate(a) {
var mySet = new Set();  
var salida=-1; 
for(i=0; i<a.length;i++){   
  if(mySet.has(a[i])){
   salida=a[i];
   console.log(salida); 
   return salida;
  }  
  mySet.add(a[i]);
 }
 return salida;  
}
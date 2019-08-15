// action
export function addCart(data){
   console.log(data);
   
   return {
      type:"CART_ADD",
      data
   }
}
export function removeCart(data){
   console.log(data);
   return {
      type:"CART_REMOVE",
      data
   }
}
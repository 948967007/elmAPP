
// export default function reducer(state=[],action){
//    let newState = Object.assign([],state)
//    let goods = action.data
//    switch (action.type) {
//       case "CART_ADD":
//          newState.push(goods)
//          return newState
   
//       case "CART_REMOVE":
//          newState.push(goods)
//          return newState
   
//       default:
//          return newState
//    }
// }

export default function reducer(state={
   data:[]
},action){
   switch (action.type) {
      case "CART_ADD":
         return {
            data:action.data
         }
   
      case "CART_REMOVE":
         return {
            data:action.data
         }
   
      default:
         return state
   }
}

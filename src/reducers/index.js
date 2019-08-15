// 定义规则
import cartCount from "./cartCount"
// import user from "./user"
// import local from "./local"

// combineReducers  能够把想要做的事情集中起来


import {combineReducers} from "redux"

let Reducers = combineReducers({
   cartCount,
   // user,
   // local,
})

export default Reducers


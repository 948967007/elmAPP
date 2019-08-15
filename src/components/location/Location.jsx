import React, { Component } from 'react'
import "./css/location.scss"

import Axios from "axios"
export default class Location extends Component {

   state={
      city:""
   }
   componentDidMount() {
      Axios.get("http://route.showapi.com/9-4",{
         params:{
            "showapi_appid":"102516",
            "showapi_sign":"1843e1ca98b944b799a861f7423649c4"
         }
      }).then((res)=>{
         // console.log(res.data.showapi_res_body.cityInfo.c7+res.data.showapi_res_body.cityInfo.c3)
         this.setState({
            city:(res.data.showapi_res_body.cityInfo.c7+res.data.showapi_res_body.cityInfo.c3)
         })
      })

   }
   componentWillUnmount() {
      this.setState=()=>{
         return
      }
   }
   
   render() {
      return (
            // 定位 
         <div className="location">
            <div className="sub">
               <span className="weizhi iconfont icon-weizhi"></span>
               <span className="info">{this.state.city ? this.state.city : "正在获取地理位置..."}</span>
               <span className="sanjiaodown iconfont icon-sanjiaodown"></span>
            </div>
         </div>
      )
   }
}

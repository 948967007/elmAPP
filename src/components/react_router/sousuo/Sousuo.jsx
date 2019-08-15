import React, { Component } from 'react'

import { Input} from 'antd';
import { Link } from "react-router-dom"
import "./css/sousuo.scss"
const { Search } = Input;



export default class SouSuo extends Component {
   handleClick=()=>{
      window.history.go(-1)
   }
   render() {
      return (
         // 搜索页
         <div>
            <div className="sousuo">
               <Link to="" className="return" onClick = {this.handleClick}>
                  <i className="iconfont icon-zuojiantou"></i>
               </Link>
               <div className="search_box">
                  <Search  placeholder="输入商家、商品名称" onSearch={value => console.log(value)} enterButton />
               </div>
               <div className="hot">热门搜索</div>
               <ul className="cate">
                  <li>烤肉拌饭</li>
                  <li>炒饭</li>
                  <li>意面</li>
                  <li>韩国</li>
                  <li>CoCo都可</li>
                  <li>麻辣烫</li>
                  <li>五味草堂五谷渔粉</li>
                  <li>黄焖鸡</li>
                  <li>大盘鸡</li>
                  <li>蜜雪冰城</li>
               </ul>
            </div>
         </div>
      )
   }
}

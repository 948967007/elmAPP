import React, { Component } from 'react'
import {Icon} from 'antd';
import { Link } from "react-router-dom"

import "./css/list.scss"
import Shoplist from '../../shoplist/Shoplist';
import FootNav from '../../footNav/FootNav';

import Axios from "axios"


export default class List extends Component {

   state={
      list:[],
      cate:["美食","甜品饮品","商超便利","预定早餐","果蔬生鲜","新店特惠","准时达","晚餐","汉堡薯条","包子粥店","鲜花蛋糕","麻辣烫","川湘菜","披萨意面","异国料理"]
   }

   
   componentDidMount() {
      // console.log(this.props);
      const id = this.props.match.params.id
      if (id) {
         Axios.get("http://47.100.98.54:9019/api/category/list"+id)
            .then((res)=>{
               // console.log(res.data.data);
               this.setState({
                  list:res.data.data
               })
            })
         
      }
   }

   




   getCate = ()=>{
      // console.log(this.props.match.params.id);
      const id = this.props.match.params.id
      return this.state.cate[id]

      
   }
   loadMorefn = ()=>{
      // console.log("父组件传值,加载更多");
      const id = this.props.match.params.id
      const list = this.state.list


      if (id) {
         Axios.get("http://47.100.98.54:9019/api/category/list"+id)
            .then((res)=>{
               // console.log(res.data.data);
               this.setState({
                  // list:(this.state.list).concat(res.data.data)
                  list:list.concat(res.data.data)
               })
            })
         
      }
   }
   componentWillUnmount() {
      this.setState=()=>{
         return
      }
   }

   render() {
      // console.log(this.state.list);
      
      return (
         <div className="list">
            <div className="top_nav">
               <div className="name">{this.getCate()}</div>
               <Link to="/">
                  <Icon className="return" type="left" />
               </Link>
               <div className="fixTop list_fixTop">
                  <Link to="/sousuo"> <i className="sousuo iconfont icon-sousuo"></i> 输入商家、商品名称</Link>
               </div>
               <div className="topNav">
                  <div className="nav">
                     <ul>
                        <li>
                           <Link to="" className="active">为你精选</Link>
                        </li>
                        <li>
                           <Link to="">超市</Link>
                        </li>
                        <li>
                           <Link to="">便利店</Link>
                        </li>
                        <li>
                           <Link to="">果蔬</Link>
                        </li>
                        <li>
                           <Link to="">百货</Link>
                        </li>
                        <li>
                           <Link to="">零食</Link>
                        </li>
                        <li>
                           <Link to="">酒水</Link>
                        </li>
                     </ul>
                  </div>
                  <div className="rightNav">
                     <i className="icon iconfont icon-jiantou9"></i>
                  </div>
               </div>
               <div className="home-filter list-filter">
                  <ul>
                     <li>综合排序 <i className="sanjiaodown iconfont icon-sanjiaodown" ></i> </li>
                     <li>距离最近</li>
                     <li>品质联盟</li>
                     <li>筛选 <i className="shaixuan iconfont icon-shaixuan"></i> </li>
                  </ul>
               </div>
            </div>

            {
               this.state.list.length > 0 && <Shoplist loadMore={this.loadMorefn} list = {this.state.list} />
            }
            
            <FootNav />
         </div>
      )
   }
}

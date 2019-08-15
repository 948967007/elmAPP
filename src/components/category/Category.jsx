import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Carousel } from 'antd';
import "./css/category.scss"
import Axios from "axios"


export default class Category extends Component {

   state={
      category:[]
   }

   componentDidMount() {


      Axios.get("http://47.100.98.54:9019/api/category")
         .then((res)=>{
            // console.log(res.data.data)
            this.setState({
               category:res.data.data
            })
         })
   }
   
   componentWillUnmount() {
      this.setState=()=>{
         return
      }
   }
   

   render() {
      // console.log(this.state.category);
      
      return (
         // 分类导航 
         <div className = "category" >
            <Carousel>
               <div className="item">
                  {
                     this.state.category.length > 0 && this.state.category.map((item,index)=>{
                        if (index >= 10) {
                           return false;
                        }
                        return(
                           <Link key={item.id} to={`/category/list${index}`}>
                              <img src={item.img} alt={item.title} />
                              <span>{item.title}</span>
                           </Link>
                        )
                     })
                  }
                  {/* <Link to="/category/list1">
                     <img src={require("../../static/img/category/01.jpeg")} alt="" />
                     <span>美食</span>
                  </Link>
                  <Link to="/category/list2">
                     <img src={require("../../static/img/category/02.jpeg")} alt="" />
                     <span>商超便利</span>
                  </Link>
                  <Link to="/category/list3">
                     <img src={require("../../static/img/category/03.jpeg")} alt="" />
                     <span>水果</span>
                  </Link>
                  <Link to="/category/list4">
                     <img src={require("../../static/img/category/04.jpeg")} alt="" />
                     <span>医药健康</span>
                  </Link>
                  <Link to="/category/list5">
                     <img src={require("../../static/img/category/05.jpeg")} alt="" />
                     <span>浪漫鲜花</span>
                  </Link>
                  <Link to="/category/list6">
                     <img src={require("../../static/img/category/06.jpeg")} alt="" />
                     <span>跑腿代购</span>
                  </Link>
                  <Link to="/category/list7">
                     <img src={require("../../static/img/category/07.jpeg")} alt="" />
                     <span>汉堡披萨</span>
                  </Link>
                  <Link to="/category/list8">
                     <img src={require("../../static/img/category/08.jpeg")} alt="" />
                     <span>厨房生鲜</span>
                  </Link>
                  <Link to="/category/list9">
                     <img src={require("../../static/img/category/09.jpeg")} alt="" />
                     <span>甜品饮品</span>
                  </Link>
                  <Link to="/category/list10">
                     <img src={require("../../static/img/category/10.jpeg")} alt="" />
                     <span>速食简餐</span>
                  </Link> */}
               </div>
               <div className="item">
                  {
                     this.state.category.length > 0 && this.state.category.map((item,index)=>{
                        if (index < 10) {
                           return false;
                        }
                        return(
                           <Link key={item.id} to={`/category/list${index}`}>
                              <img src={item.img} alt={item.title} />
                              <span>{item.title}</span>
                           </Link>
                        )
                     })
                  }
                  {/* <Link to="/category/list11">
                     <img src={require("../../static/img/category/11.jpeg")} alt="" />
                     <span>地方小吃</span>
                  </Link>
                  <Link to="/category/list12">
                     <img src={require("../../static/img/category/12.jpeg")} alt="" />
                     <span>大牌惠吃</span>
                  </Link>
                  <Link to="/category/list13">
                     <img src={require("../../static/img/category/13.jpeg")} alt="" />
                     <span>速食简餐</span>
                  </Link> */}
               </div>
            </Carousel> ,
         </div >
      )
   }
}

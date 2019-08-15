import React, { Component } from 'react'
import { Link} from "react-router-dom"
 
import Axios from "axios"
import "./css/productList.scss"

// 连接器
import {connect} from "react-redux"


import {addCart,removeCart} from "../../../actions/cart"


// @connect(
//    state=>({shop:state}),
//    {addCart,removeCart}
// )
class ProductList extends Component {
   state={
      list:{},
      product:[]
   }

   handleClick=()=>{
      window.history.go(-1)
   }
   

   componentDidMount() {
      // 重置一个页面滚动条的位置
      document.documentElement.scrollTop = document.body.scrollTop =0;
      // console.log(this.props.match.params.id);
      const id = this.props.match.params.id
      Axios.get("http://47.100.98.54:9019/api/detail/"+id).then((res)=>{
         // console.log(res);
         this.setState({
            list:res.data,
            product:res.data.product
         })
      })
   }
   monthSaleTotal=()=>{
      const list = this.state.product
      let arr=[]
      list.map((item,index)=>{
         let num = []
         item.list.map((item,index)=>{
            num.push(item.foodsale)

            return true
         })

         let count = num.reduce((prev,next)=>{
            return (prev+next)
         })
         arr.push(count)

         return true
      })

      if (arr.length) {
         let monthTotal = arr.reduce((prev,next)=>{
            return (prev+next)
         })
         return monthTotal
      }
   }
   render() {
      // console.log(this.state.list);
      const list = this.state.list
      const product = this.state.product
      // console.log(product);
      console.log(this.props.shop);
      
      return (
         <div>
            <div className="topBanner">
               <img className="BannerImg2" src={list.img} alt=""/>
               <Link to="" onClick = {this.handleClick}>
                  <i className="iconfont icon-zuojiantou"></i>
               </Link>
            </div>
            <div className="ProductTitle">
               <div className="shoppTitle">
                  {list.title}
                  <i className="iconfont icon-sanjiaoright"></i>
               </div>
               <div className="shoppEvaluate">
                  <span>评价{list.averageScore}</span>
                  <span>月售{this.monthSaleTotal()}单</span>
                  <span>商家配送约{list.foodTime}分钟</span>
               </div>
               <div className="shoppCash">
                  <img src={require("./img/1.png")} alt=""/>
               </div>
               <div className="shoppDiscounts">
                  <span className="money_hint"><span className="money_Off">满减</span>满80减25，满110减50</span>
                  <span className="money_discounts">3个优惠</span>
               </div>
               <div className="shoppNotice">
                  公告：欢迎光临必胜客宅急送，我们将竭力为您提供丰富的美食以及优质的服务。配送费现从9元优惠至5元，该优惠将在小票的本单优惠金额中立减。如果需要Fapiao，请在订单中备注Fapiao，我们将为您提供电子Fapiao提取码。用餐高峰时间可能会延迟送餐时间，请以实际送餐时间为准。
               </div>
            </div>
            <div className="list_commodity">
               <div className="left_nav">
                  <ul>
                     <Link to="" >
                        <li>
                           <img src={require("./img/4.webp")} alt=""/>
                           <span>热销</span>
                        </li>
                     </Link>
                     <Link to="" >
                        <li>
                           <img src={require("./img/5.webp")} alt=""/>
                           <span>优惠</span>
                        </li>
                     </Link>
                     <Link to="" >
                        <li>
                           <span>家园风情</span>
                        </li>
                     </Link>
                     <Link to="" >
                        <li>
                           <span>单人套餐</span>
                        </li>
                     </Link>
                     <Link to="" >
                        <li>
                           <span>特色主食</span>
                        </li>
                     </Link>
                     <Link to="" >
                        <li>
                           <span>开胃凉菜</span>
                        </li>
                     </Link>
                     <Link to="" >
                        <li>
                           <span>巴扎烧烤【串】</span>
                        </li>
                     </Link>
                     <Link to="" >
                        <li>
                           <span>滋补汤羹</span>
                        </li>
                     </Link>
                     <Link to="" >
                        <li>
                           <span>特色饮料</span>
                        </li>
                     </Link>
                  </ul>
               </div>
               <div className="hotel_commodity">
                  
                  {
                     product.length && product.map((item,index)=>{
                        return (
                           <ul key={index}>
                              {
                                 item.list.map((item,index)=>{
                                    return(
                                       <li key={index}>
                                          <div className="commodity_img">
                                             <img src={item.img} alt=""/>
                                          </div>
                                          <div className="commodity_info">
                                             <div className="commodity_title">{item.foodTitle}</div>
                                             <div className="commodity_dosing">{item.fooddescription}</div>
                                             <div className="commodity_Sv">
                                                <span className="salesVolume">月售{item.foodsale}份</span>
                                                <span>好评率{item.foodrating}%</span>
                                             </div>
                                             <div className="commodity_discount">
                                                <span className="c_discount">3.8折</span>
                                                <span className="astrict">限量抢购</span>
                                             </div>
                                             <div className="commodity_price">
                                                <div className="price">
                                                   <span className="practical_RMB">￥{item.foodprice}</span>
                                                   {/* <del className="before_RMB">￥26</del> */}
                                                </div>
                                                <div className="amount">
                                                   <i 
                                                      className="remove iconfont icon-jianshao1"
                                                      onClick ={ ()=>{
                                                         return this.props.removeCart(-1)
                                                      } }
                                                   ></i>

                                                   <span className="num">0</span>

                                                   <i 
                                                      className="add iconfont icon-zengjia"
                                                      onClick ={ ()=>{
                                                         return this.props.addCart(1)
                                                      } }    
                                                   ></i>
                                                </div>
                                             </div>
                                          </div>
                                       </li>
                                    )
                                 })
                              }
                           </ul>
                        )

                     })
                     
                  }
                     {/* <li>
                        <div className="commodity_img">
                           <img src={require("./img/3.webp")} alt=""/>
                        </div>
                        <div className="commodity_info">
                           <div className="commodity_title">黄金香酥鸡柳(炸鸡)(5根)</div>
                           <div className="commodity_dosing">优选软嫩鸡柳，根根酥脆，鲜香多汁。主要原料：鸡肉，水，炸鸡用裹浆粉等</div>
                           <div className="commodity_Sv">
                              <span className="salesVolume">月售3份</span>
                              <span>好评率100%</span>
                           </div>
                           <div className="commodity_discount">
                              <span className="c_discount">3.8折</span>
                              <span className="astrict">限量抢购</span>
                           </div>
                           <div className="commodity_price">
                              <div className="price">
                                 <span className="practical_RMB">￥9.9</span>
                                 <del className="before_RMB">￥26</del>
                              </div>
                              <div className="amount">
                                 <i className="remove iconfont icon-jianshao1"></i>
                                 <span className="num">1</span>
                                 <i className="add iconfont icon-zengjia"></i>
                              </div>
                           </div>
                        </div>
                     </li> */}
                  
               </div>
            </div>
         
         
            <div className="bottomLocation">
               <div className="shoppingImg">
                  <div className="icon">
                    <i className="iconfont icon-gouwuche-copy"></i>
                  </div>
                  {/* <span className="shuliang">1</span> */}
               </div>
               <div className="com-prices">
                  <p>未选购商品</p>
                  <p className="shipping-fee">另需配送费<span>5</span>元</p>
               </div>
               <Link to="">
                  <div className="close-an-account">
                     ￥<span className="shipping-fee1">0</span>元起送
                  </div>
               </Link>
            </div>
         </div>
      )
   }
}
export default connect( 
   state=>({shop:state}),
   {addCart,removeCart}
)(ProductList)

// @connect(
//    state=>({shop:state}),
//    {addCart,removeCart}
// )
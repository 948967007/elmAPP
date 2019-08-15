import React, { Component } from 'react'
import { Link } from "react-router-dom"
import {Rate} from "antd"
import "./css/shoplist.scss"


// import Axios from "axios"

export default class Shoplist extends Component {
	state={
		list:this.props.list
	}

// componentWillReceiveProps(nextProps) {
// 	console.log(nextProps);
// 	this.setState({
// 		list:nextProps.list
// 	})
// }

UNSAFE_componentWillMount() {
	window.addEventListener("scroll",this.listScroll)
}

componentDidMount() {
	window.addEventListener("scroll",this.listScroll)
}


listScroll = ()=>{
	// 在父组件请求新数据 再传到此组件
	// 在什么时候请求新的数据 ？
	// 在滚动到底部时  就去请求新的数据
	const element = this.refs.loadMore
	// 获取DOM节点
	// console.log(element);
	if (element) {
		const top = element.getBoundingClientRect().top
		// 获取dom阶段距离top的距离
		// console.log(top)
		const windowHeight = window.screen.height
		// 获取窗口高度
		// console.log(windowHeight);

		// 当 top < windowHeight  时  加载新数据
		if (top < windowHeight) {
			// console.log("加载更多...");
			this.props.loadMore()
			
		}
	}
}
UNSAFE_componentWillReceiveProps(nextProps) {
	// console.log(nextProps);
	
	this.setState({
		list:nextProps.list
	})
}



   render() {
		
		// console.log(this.props.list);
		// 多个组件 引用了 Shoplist组件 都是需要传值的
		//  如果有一个组件没有传值  那么此组件的this.props.list就会未定义   未定义后length没有长度
      return (
         // 店家列表  
			<div className="shoplist">
				<ul>
					{
						this.state.list.length > 0 && this.state.list.map((item,index)=>{
							// console.log(item);
							
							return(
								<li key={index}>
									<Link to={"/productList"+index}>
										<div className="logo">
											<img src={item.img} alt={item.title}/>
										</div>
										<div className="cStyle blurb">
											<img src={require("../../static/img/recommend/brand.png")} alt=""/>
											<span className="title">{item.title}</span>
											<div className="grade">

												<Rate disabled allowHalf defaultValue={item.ratingScore} />
												<span>{item.ratingScore} <span>月售{item.monthSaleCount}单</span></span>
												
												<span className="delivery">
													{
														
														// console.log(item.labels)
														item.labels.length >0 && item.labels.map((item,index)=>{
															
															if (item.name !== "蜂鸟专送") {
																item.name = ""
															}
															return item.name
															
														})
														
													}
												</span>

											</div>
											<div className="cStyle money">
												<div className="left">
													<span>￥{item.startPrice}起送</span>
													<span className="fuhao">|</span>
													<span>配送费￥{item.freightPrice}</span>
												</div>
												<div className="right">
													<span>
														{
															item.range > 1000 ? (item.range/1000).toFixed(2) +"km" :item.range +"m"
														}
													</span>
													<span className="fuhao">|</span>
													<span>{item.time}分钟</span>
												</div>
											</div>
											<div className="cStyle product">
												<span className="mang">披萨</span>
												<span>品质联盟</span>
												<span className="sign">
													<img src={require("../../static/img/recommend/2.webp")} alt=""/>
													口碑人气好店
												</span>
											</div>
											<div className="discount">
												<div className="subtract">
													<span className="benefit subtract1">减</span>
													<span>满60减30</span>
												</div>
												<div className="first">
													<span className="benefit first1">首</span>
													<span >新用户下单立减11元</span>
												</div>
												<div className="special">
													<span className="benefit special1">特</span>
													<span>特价商品39.9元起</span>
												</div>
												<div className="discount1">
													<span className="benefit discount2">折</span>
													<span>特价商品9.9元起</span>
												</div>
											</div>
										</div>
									</Link>
								</li>
							)
						})
					}


					{/* <li>
						<Link to="/productList1">
							<div className="logo">
								<img src={require("../../static/img/recommend/1.webp")} alt=""/>
							</div>
							<div className="cStyle blurb">
								<img src={require("../../static/img/recommend/brand.png")} alt=""/>
								<span className="title">必胜客宅急送(凤七店)</span>
								<div className="grade">

									<Rate disabled allowHalf defaultValue={5} />
									<span>4.8 月售503单</span>
									<span className="delivery">蜂鸟专送</span>

								</div>
								<div className="cStyle money">
									<div className="left">
										<span>￥0起送</span>
										<span className="fuhao">|</span>
										<span>配送费￥5</span>
									</div>
									<div className="right">
										<span>938m</span>
										<span className="fuhao">|</span>
										<span>40分钟</span>
									</div>
								</div>
								<div className="cStyle product">
									<span className="mang">披萨</span>
									<span>品质联盟</span>
									<span className="sign">
										<img src={require("../../static/img/recommend/2.webp")} alt=""/>
										口碑人气好店
									</span>
								</div>
								<div className="discount">
									<div className="subtract">
										<span className="benefit subtract1">减</span>
										<span>满60减30</span>
									</div>
									<div className="first">
										<span className="benefit first1">首</span>
										<span >新用户下单立减11元</span>
									</div>
									<div className="special">
										<span className="benefit special1">特</span>
										<span>特价商品39.9元起</span>
									</div>
									<div className="discount1">
										<span className="benefit discount2">折</span>
										<span>特价商品9.9元起</span>
									</div>
								</div>
								
							</div>
						</Link>
					</li> */}
				
				</ul>
				<div ref={'loadMore'}>加载更多...</div>
			</div>
      )
   }
}

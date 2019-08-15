import React, { Component } from 'react'
// 项目首页面
// import "./homeCss/home.scss"
import Location from '../location/Location';
import FixTop from '../fixTop/FixTop';
import Category from '../category/Category';
import Recommend from '../recommend/Recommend';
import Shoplist from '../shoplist/Shoplist';
import FootNav from '../footNav/FootNav';
import Axios from "axios"



export default class Home extends Component {

	state={
		list:[]
	}

	componentDidMount() {
		Axios.get("http://47.100.98.54:9019/api/shoplist")
            .then((res)=>{
               // console.log(res.data.data);
               this.setState({
                  // list:(this.state.list).concat(res.data.data)
                  list:res.data.data
               })
            })
	}
	

	loadMorefn=()=>{
		// console.log("父组件传值,加载更多");
      const list = this.state.list
         Axios.get("http://47.100.98.54:9019/api/shoplist")
            .then((res)=>{
               // console.log(res.data.data);
               this.setState({
                  // list:(this.state.list).concat(res.data.data)
                  list:list.concat(res.data.data)
               })
            })
	}
	componentWillUnmount() {
      this.setState=()=>{
         return
      }
   }


	render() {
		// console.log(this.state.list);
		
		return (
			<div className="App">
				{/* 定位 */}
				<Location/>
				{/* 吸顶盒 */}
				<FixTop />
				{/* 分类导航 */}
				<Category/>
				{/* 推荐 */}
				<Recommend/>
				{/* 店家列表 */}
				<Shoplist  loadMore = {this.loadMorefn} list={this.state.list}/>
				{/* 底部导航 */}
				<FootNav/>
			</div>
		)
	}
}

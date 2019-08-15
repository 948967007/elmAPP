import React, { Component } from 'react'

import {BrowserRouter as Router} from "react-router-dom"

import Routers from './routers/Routers';


export default class App extends Component {
	render() {
		return (
			<Router>
				<Routers/>
			</Router>
		)
	}
}

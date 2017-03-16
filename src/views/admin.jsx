import React, { Component } from 'react'
import ReactDom, { render } from 'react-dom'
import Side from './side/index.jsx'
import Menu from './menu/index.jsx'

class Admin extends Component {
	constructor(props){
		super(props);
		console.log(this);
	}
	render(){
		return <div className="main">
			<Menu />
			
			<div className="content clearfix">
				<div className="side">
					<Side />
				</div>
				<div className="view">
					{this.props.children}
				</div>
			</div>
		</div>
	}
}

export default Admin

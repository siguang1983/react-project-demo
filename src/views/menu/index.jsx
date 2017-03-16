import React, { Component } from 'react'
import ReactDom, { render } from 'react-dom'
import auth from '../../utils/authenticate'
import { Modal, Button } from 'antd';
import $ from 'jquery'

class Menu extends Component {

	constructor(props){
		super(props);
		this.state = {
			visible: false
		}
	}

	logOut(){
		auth.logout();
	}

	showModal(){
		this.setState({visible: true});
	}

	handleCancel(){
		this.setState({visible: false});
	}

	render(){
		return <div className="menu">
				<h1 className="logo">财务系统</h1>
				<div className="menu-right">
					<a href="javascript:void(0)" onClick={this.showModal.bind(this)}>退出</a>
				</div>

				<Modal title="提示" visible={this.state.visible} width="300"
					onOk={this.logOut} onCancel={this.handleCancel}>
					<p>是否退出系统</p>
				</Modal>
			</div>
	}
}

export default Menu;
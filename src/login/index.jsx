import React, { Component } from 'react';
import ReactDom, { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { Row, Col, Input, DatePicker, Button } from 'antd';

import Auth from '../utils/authenticate';
import $ from 'jquery';

import './index.css';

class Login extends Component {

	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: ''
		}
	}

	loginTextChange(evt){
		let key = evt.target.id;
		debugger;
		this.setState({
			[key]: evt.target.value
		})
		debugger;
	}

	// 登录
	sendLogin(){
		var that = this;
		if(this.state.username == '' || this.state.password == ''){
			alert('用户名和密码不能为空');
			return false;
		}

		$.ajax({
			url: '/login',
			type: 'post',
			data: {username: this.state.username, password: this.state.password},
			dataType: 'json',
			success: function(res){
				if(res.statue == 0){	// 登录成功
					console.log(res)
					var path = '/admin';
					Auth.login(res.data.perms);
					debugger;
					browserHistory.push(path)
				}
				else{
					console.log('登录失败')
				}
			},
			error: function(err){
				console.log(err);
			}
		})
	}

	render(){
		const {username, password} = this.state;

		return <div className="login-box">
			<h1>财务系统登录</h1>
			<div className="w200">
				<div className="gutter-example ptb10">
					<Row gutter={8}>
						<Col className="gutter-row" span={4}>
							<div className="gutter-box lh">用户名: </div>
						</Col>
						<Col className="gutter-row" span={20}>
							<div className="gutter-box">
								<Input value={username} id="username" onChange={this.loginTextChange.bind(this)} placeholder="输入用户名" />	
							</div>
						</Col>
					</Row>
				</div>

				<div className="gutter-example ptb10">
					<Row gutter={8}>
						<Col className="gutter-row" span={4}>
							<div className="gutter-box lh">密码: </div>
						</Col>
						<Col className="gutter-row" span={20}>
							<div className="gutter-box">
								<Input type="password" value={this.state.password} id="password" onChange={this.loginTextChange.bind(this)}  placeholder="输入密码" />
							</div>
						</Col>
					</Row>
				</div>
			</div>
			
			<div className="login-btn-box">
				<Button type="primary" onClick={this.sendLogin.bind(this)} size="large" >登录</Button>
			</div>
		</div>
	}
}

export default Login;

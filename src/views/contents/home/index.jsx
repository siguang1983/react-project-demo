import React, { Component } from 'react'
import ReactDom, { render } from 'react-dom'

require('./index.css')

class Home extends Component {
	render(){
		return <div className="home-container">
			<h1 className="home-content">欢迎登录财务系统</h1>
		</div>
	}
}

export default Home;
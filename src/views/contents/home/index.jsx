import React, { Component } from 'react'
import ReactDom, { render } from 'react-dom'

require('./index.css')
import r1 from '../../../assets/images/yay.jpg'

class Home extends Component {
	render(){
		return <div className="welcome-box">
			<div className="welcome-txt">
				<div className="welcome-img">
					<img src={r1} />
				</div>
				<h1 className="col">欢迎来到React脚手架</h1>
			</div>
		</div>
	}
}

export default Home;
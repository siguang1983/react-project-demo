import React, { Component } from 'react';
import ReactDom, { render } from 'react-dom';

class Error404 extends Component {
	render(){
		return <div className="error-404">
			<h1>很抱歉, 您访问的页面不存在!</h1>
		</div>
	}
}
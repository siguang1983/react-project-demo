import React, { Component } from 'react';
import ReactDom, { render } from 'react-dom';
import {Link} from 'react-router'
import MenuConfig from '../../config/menu.js'

console.log(MenuConfig);

class Menu extends Component {
	render(){

		var menuItem = [];
		MenuConfig.forEach(function(item, index, arr){
			var urlName = "/admin/" + item.index;
			menuItem.push(<li>{<Link to={urlName}>{item.title}</Link>}</li>);
		})
		
		return <ul>{menuItem}</ul>
	}
}

export default Menu;
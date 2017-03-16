import React, { Component } from 'react'
import ReactDom, { render } from 'react-dom'
import { Router, Route, browserHistory, hashHistory, Link, Redirect, IndexRoute } from 'react-router';
import auth from '../utils/authenticate';

import Login from '../login/'
import Admin from '../views/admin.jsx'
import Home from '../views/contents/home/index.jsx'
import AccountManagement from '../views/contents/accountManagement/index.jsx'
import FinancialApproval from '../views/contents/financialApproval/index.jsx'

// import { Home, AccountManagement } from '../views/contents';

const backLogin = (nextState, replace) => {
	if(!auth.loggedIn()){
		browserHistory.push('/login');
	}
	console.log('路由钩子', auth.loggedIn(), nextState)
}
20000
class RouterConfig extends Component {
	render(){
		return (
			<Router history={browserHistory}>
				<Route path="/login" components={Login} isAccess="true" />
				<Route path="/admin" components={Admin} isAccess="true">
					<IndexRoute component={Home} isAccess="true" onEnter={backLogin} />
					<Route path="accountManagement" components={AccountManagement} isAccess="true" onEnter={backLogin} />
					<Route path="financialApproval" components={FinancialApproval} isAccess="true" onEnter={backLogin} />
				</Route>
				<Redirect from="*" to="/admin" />
			</Router>
		)
	}
}

export default RouterConfig;

// const RouterConfig = [
// 	{
// 		path: '/login',
// 		component: Login
// 	},
// 	{
// 		path: '/login',
// 		component: Admin,
// 		childrenRouter: [
// 		]
// 	}
// ]

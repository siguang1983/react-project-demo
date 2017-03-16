import $ from 'jquery'
import { browserHistory } from 'react-router'

let Authenticate = (() => {
	const KEY_OF_LOGGEDIN = 'logged-in';	// 存储是否登录状态
	const KEY_OF_TOKEN = 'token';			// 存储token
	const KEY_OF_USERNAME = 'username';		// 用户名
	let auth = {};
	let userData = null;

	// 查看是否登录
	auth.loggedIn = () => {
        return localStorage.getItem(KEY_OF_LOGGEDIN) === 'true';
    };

	// 设置登录
	auth.login = (loginData) => {
		if(loginData){
			userData = loginData
			localStorage.setItem(KEY_OF_USERNAME, userData.realName);
			localStorage.setItem(KEY_OF_LOGGEDIN, true);
			debugger;

			return true;
		}
		return false
	}

	// 退出登录
	auth.logout = () => {
		$.ajax({
			url: '/logout',
			type: 'post',
			dataType:'json',
			success: function(res){
				if(res.status == '0'){
					debugger;
					localStorage.removeItem(KEY_OF_LOGGEDIN);
					localStorage.removeItem(KEY_OF_TOKEN);
					localStorage.removeItem(KEY_OF_USERNAME);
					userData = null;					
					browserHistory.push('/login');
				}
				else{
					console.log(res.message);
				}
			}
		})
		
	}

	// 获取token
	auth.getToken = () => {
		var token = localStorage.getItem({KEY_OF_TOKEN});

		if(token){
			return token
		}
		return false;
	}

	return auth;
})();

export default Authenticate;

import React from 'react'
import HeaderUiComponent from './header_ui.js'
import { notification } from 'antd'
import {connect} from 'react-redux'


class HeaderComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			selectedKey: "",	
			categories: [],
			showModal: false
		}

		this.handleSelect = this.handleSelect.bind(this);
		this.handleModelToggle = this.handleModelToggle.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleLogOut = this.handleLogOut.bind(this);
	}

	componentDidMount() {
		console.log(this.props.login)
		fetch('/categories.json')
			.then((response) => response.json())
			.then((json) => {
				
				let categories = json.data.categories;
				(categories.length > 10) && (categories.length = 10);

		   		this.setState({
		   			categories: categories
		   		})
			})
			.catch((ex) => {
				console.log('parsing failed', ex)
			})
	}

	handleLogOut() {
		
		notification.open({
		    message: '退出成功',
		    description: '欢迎再来',
		});
		
		this.props.handleLogout();

	}

	handleSubmit() {	
		
		notification.open({
		    message: '登陆成功',
		    description: '最近有活动，欢迎大家积极参与'
		});

		this.setState({
			showModal: false,
		})

		this.props.handleLogin()
	}

	handleSelect(params) {
		this.setState({
			selectedKey: params.key
		})
	}

	handleModelToggle() {
		this.setState({
			showModal: !this.state.showModal
		})
	}

	render() {
		return (
			<HeaderUiComponent {...this.state} login={this.props.login} handleLogOut={this.handleLogOut} handleSubmit={this.handleSubmit} handleModelToggle={this.handleModelToggle} handleSelect={this.handleSelect} />
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)

//state指的就是store里面的state, 实际上是store里的数据
//props 指的是组件里的props
function mapStateToProps(state) {
  return { login: state.login }
}

function mapDispatchToProps(dispatch) {
  return {
  	handleLogout: function() {
  		let action = {
			type: "LOGOUT"
		}

		dispatch(action);
  	},
  	handleLogin: function() {
  		let action = {
			type: "LOGIN"
		}
		dispatch(action);
  	}
  }
}

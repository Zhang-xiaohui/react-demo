import React from 'react'
import {Row, Col, Menu, Icon, Button, Modal, Tabs, Form, Input, notification} from 'antd'


const TabPane = Tabs.TabPane;
const FormItem = Form.Item;


class HeaderComponent extends React.Component {

	constructor(props) {
		super(props);

		let login = false;

		try{
			login = localStorage.login ? true : login
		}catch(e){}


		this.state = {
			selectedKey: "",	
			categories: [],
			login: false,
			showModal: false
		}
		this.hangleSelect = this.hangleSelect.bind(this);
		this.handleModelToggle = this.handleModelToggle.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
	    this.props.form.validateFields((err, values) => {
			if (!err) {

				//前端校验+ajax调用登陆接口
				try {
					localStorage.login = "true"
				}catch(e){}

				notification.open({
				    message: '登陆成功',
				    description: '最近有活动，欢迎大家积极参与',
				});
				this.setState({
					showModal: false,
					login: true
				})
			}else{

			}
	    });
	}

	hangleSelect(params) {
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

		const { getFieldDecorator } = this.props.form;

		return (
			<div>
				<Row>
				    <Col span={4}>
				    	<img className="logo-img" src={require("../../images/logo.0.3.png")} />
				    </Col>
				    <Col span={16}>
					    <Menu mode="horizontal" className="header-menu" onSelect={this.hangleSelect} selectedKeys={[this.state.selectedKey]}>
					        {
					        	this.props.categories.map((value, key)=>{
					        		return (
					        			<Menu.Item key={value.id}>
								            <Icon type={value.type} />{value.name}
								        </Menu.Item>	
			        				)
					        	})
					        }      				       		      
	      				</Menu>
      				</Col>
				    <Col span={4}>
				    	{
			    			!this.state.login ? 
			    				<Button className="log-btn" type="primary" onClick={this.handleModelToggle}>登陆 / 注册</Button> : 
			    				<Button className="log-btn" type="primary" >退出</Button>
			    		}
				    </Col>
			    </Row>

		    	<Modal onCancel={this.handleModelToggle} footer={null} title="登陆 ／ 注册" visible={this.state.showModal}>
			       <Tabs type="card">
						<TabPane tab="登陆" key="1">
							<Form onSubmit={this.handleSubmit} className="login-form">
								  	<FormItem>
							        	{getFieldDecorator('username', {
							        		rules: [{ required: true, message: '用户名不得为空' }],
							        	})(
							        		<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请填写用户名" />
							        	)}
							        </FormItem>
							        <FormItem>
							        	{getFieldDecorator('password', {
							        		rules: [{ required: true, message: '请输入您的密码!' }],
							        	})(
							        		<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
							        	)}
							        </FormItem>
							        <FormItem>
							        	<Button type="primary" htmlType="submit" className="login-form-button">
							        		登陆
							        	</Button>
							        </FormItem>
							</Form>
						</TabPane>
						<TabPane tab="注册" key="2">Content of Tab Pane 2</TabPane>
					</Tabs>
			    </Modal>		    
			</div>
		)
	}
}

export default Form.create()(HeaderComponent);
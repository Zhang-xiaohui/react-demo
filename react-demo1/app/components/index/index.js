import React from 'react'
import ReactDom from 'react-dom'
import { Row, Col, Menu, Icon, Button, Modal, Tabs, Form, Input, notification, Card ,Tooltip,Cascader, Select, AutoComplete,Checkbox} from 'antd'
import {Link} from 'react-router'
import HeaderComponent from '../common/header.js'

import '../../css/page.css'

const AutoCompleteOption = AutoComplete.Option;
const gridStyle = { width: '25%', textAlign: 'center'};

export default class IndexComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
			articles: []			
		}	
	}

	componentDidMount() {
		fetch('/index.json')
			.then((response) => response.json())
			.then((json) => {
				if (json.data.categories.length > 10) {
					json.data.categories.length = 10;
				}
				this.setState({
					categories: json.data.categories,
					articles: json.data.articles,
					selectedKey: (json.data.categories[0].id + "")
				})
			})
			.catch((ex) => {
				console.log('parsing failed', ex)
			})

			if(window.localStorage.login == "true"){
    	    this.setState({
    	    	login : true
	    	    })
	    	}else{
	    		this.setState({
	    	    	login : false
	    	    })
	    	}
	}

	render() {

		return (
			<div className="main">

				<HeaderComponent categories={this.state.categories}/>

			    <div className="warp-placard">
			    	<img className="placard1" src={require("../../images/0.jpg")} />
			    </div>

			    <Card title="[公告]新秀浣水月新书火热连 [活动]福利：充值返15%" className="content" >
				    {
			        	this.state.articles.map((value, key)=>{
			        		return (
			        			<p className="content-item" key={value.id}>
			        				<Link to={"/detail/" + value.id}>
			        					<span className="content-item-category" style={{color:value.color}}>[{value.categoryName}]</span>
			        					{value.title}
			        					({value.date})
			        					{value.new ? <img className="content-item-new" src={require("../../images/new.gif")} /> : ""}
		        					</Link>
	        					</p>
	        				)
			        	})
					}
				</Card>

				<Card title="Card Title" noHovering>
				    <Card.Grid style={gridStyle}>
				    	<div className="card-book-img">
				    		<a href="javascript:;" ><img src={require("../../images/90.jpg")} /></a>
				    	</div>
				    	<div className="book-introduce">
				    		<h2 className="title-h2">你好，影后小姐</h2>
				    		<p>她生性高傲，而他生性冷酷，原本相互利用的两人</p>
				    	</div>
				    </Card.Grid>
				    <Card.Grid style={gridStyle}>
				    	<div className="card-book-img">
				    		<a href="javascript:;" ><img src={require("../../images/90 (1).jpg")} /></a>
				    	</div>
				    	<div className="book-introduce">
				    		<h2 className="title-h2">你好，影后小姐</h2>
				    		<p>她生性高傲，而他生性冷酷，原本相互利用的两人</p>
				    	</div>
				    </Card.Grid>
				    <Card.Grid style={gridStyle}>
				    	<div className="card-book-img">
				    		<a href="javascript:;" ><img src={require("../../images/90 (2).jpg")} /></a>
				    	</div>
				    	<div className="book-introduce">
				    		<h2 className="title-h2">你好，影后小姐</h2>
				    		<p>她生性高傲，而他生性冷酷，原本相互利用的两人</p>
				    	</div>
				    </Card.Grid>
				    <Card.Grid style={gridStyle}>
				    	<div className="card-book-img">
				    		<a href="javascript:;" ><img src={require("../../images/90 (3).jpg")} /></a>
				    	</div>
				    	<div className="book-introduce">
				    		<h2 className="title-h2">你好，影后小姐</h2>
				    		<p>她生性高傲，而他生性冷酷，原本相互利用的两人</p>
				    	</div>
				    </Card.Grid>
				    <Card.Grid style={gridStyle}>
				    	<div className="card-book-img">
				    		<a href="javascript:;" ><img src={require("../../images/90 (4).jpg")} /></a>
				    	</div>
				    	<div className="book-introduce">
				    		<h2 className="title-h2">你好，影后小姐</h2>
				    		<p>她生性高傲，而他生性冷酷，原本相互利用的两人</p>
				    	</div>
				    </Card.Grid>
				    <Card.Grid style={gridStyle}>
				    	<div className="card-book-img">
				    		<a href="javascript:;" ><img src={require("../../images/90 (5).jpg")} /></a>
				    	</div>
				    	<div className="book-introduce">
				    		<h2 className="title-h2">你好，影后小姐</h2>
				    		<p>她生性高傲，而他生性冷酷，原本相互利用的两人</p>
				    	</div>
				    </Card.Grid>
				</Card>

			</div>
		)
	}
}

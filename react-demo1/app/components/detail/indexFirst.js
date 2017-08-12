import React from 'react'
import HeaderComponent from '../common/header.js'
import '../../css/detail-1.css'

export default class DetailFirstComponent extends React.Component {

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
			<div className="main" >
				<HeaderComponent categories={ this.state.categories} />				
			</div>
		)
	}
}
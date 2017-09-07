import React from 'react'
import HeaderComponent from '../common/header/header.js'
import FooterComponent from '../common/footer/footer.js'

export default class DetailComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}

	render() {
		return (
			<div className="main">
				<HeaderComponent />

				<div className="data-content">
				{
					this.state.data.map((value, key)=>{
						return (							
								<div className="data-content-cart" key={value.id}>
									<img src={value.imgSrc} />
									<h3>{value.title}</h3>
									<p dangerouslySetInnerHTML={{__html: value.content}}></p>
								</div>													
						)
					})
				}
				</div>
				
				<div>{this.props.params.id}</div>
				<FooterComponent />
			</div>
		)
	}

	componentDidMount() {
		let link = "article.json?id=" + this.props.params.id;
		fetch(link)
			.then((response) => response.json())
			.then((json) => {
				let data = json.data;
				this.setState({
					data: data
				})
				console.log(data)
			
			})
			.catch((ex) => {
				console.log('parsing failed', ex)
			})					
	}
}
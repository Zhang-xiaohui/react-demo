import React, {Component} from 'react'  //相当于React.Component
import HeaderComponent from '../common/header/header.js'
import FooterComponent from '../common/footer/footer.js'
import { Card, Carousel } from 'antd'

const gridStyle = { width: '25%', textAlign: 'center'};

export default class ListComponent extends Component {

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

				<Carousel autoplay>
				    <div><img className="placard1" src={require("../../images/0 (1).jpg")} /></div>
				    <div><img className="placard1" src={require("../../images/0.jpg")} /></div>
				    <div><img className="placard1" src={require("../../images/1501899985017119.jpg")} /></div>
				    <div><img className="placard1" src={require("../../images/1502294951253163.jpg")} /></div>
				</Carousel>	


				<Card title="本站新书推荐" noHovering>
				{
					
					this.state.data.map((value, key)=>{
						return (															
						    <Card.Grid style={gridStyle} key={value.id}>
						    	<div className="card-book-img">
						    		<a href="javascript:;" ><img src={value.imgSrc} /></a>
						    	</div>
						    	<div className="book-introduce">
						    		<h2 className="title-h2">{value.title}</h2>
						    		<p dangerouslySetInnerHTML={{__html: value.content}}></p>
						    	</div>
						    </Card.Grid>							    											
						)
					})

					
				}
				</Card>	

				<FooterComponent />
			</div>
		)
	}

	componentDidMount() {
		let link = "list.json?id=" + this.props.params.id;

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
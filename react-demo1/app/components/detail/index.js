import React from 'react'

export default class DetailComponent extends React.Component {
	render() {
		return (
			<div>
				<div>详情页</div>
				<div>{this.props.params.id}</div>
			</div>
		)
	}
}
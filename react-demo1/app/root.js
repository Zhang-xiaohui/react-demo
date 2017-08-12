import React from 'react'
import ReactDom from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import IndexComponent from "./components/index/index.js"
import DetailComponent from "./components/detail/index.js"

class Root extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={IndexComponent}></Route>
				<Route path="/detail/:id" component={DetailComponent}></Route>
			</Router>
		)
	}
}


ReactDom.render(<Root />, document.getElementById("root"));
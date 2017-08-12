import React from 'react'
import ReactDom from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import IndexComponent from "./components/index/index.js"
import DetailFirstComponent from "./components/detail/indexFirst.js"

class Root extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={IndexComponent}></Route>
				<Route path="/detail/11" component={DetailFirstComponent}></Route>				
			</Router>
		)
	}
}


ReactDom.render(<Root />, document.getElementById("root"));
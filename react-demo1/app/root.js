import React from 'react'
import ReactDom from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import IndexComponent from "./components/index/index.js"
import DetailFirstComponent from "./components/detail/indexFirst.js"
import {createStore} from 'redux'
import reducer from './reducer/reducer.js'
import {Provider} from 'react-redux'

const store = createStore(reducer);

class Root extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={browserHistory}>
					<Route path="/" component={IndexComponent}></Route>
					<Route path="/detail/11" component={DetailFirstComponent}></Route>				
				</Router>
			</Provider>
		)
	}
}


ReactDom.render(<Root />, document.getElementById("root"));
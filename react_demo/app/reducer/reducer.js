let login = false;

try{
	login = localStorage.login ? true : login
}catch(e){}

const defaultState = {
	login: login,
	categories: []
}

export default function(state = defaultState, action) {

	if(action.type == "LOGOUT") {

		try {
			localStorage.removeItem("login");
		}catch(e){}

		return Object.assign({}, state, {
			login: false
		})
	}

	if(action.type == "LOGIN") {
		try {
			localStorage.login = "true"
		}catch(e){}
		
		return Object.assign({}, state, {
			login: true
		})
	}

	if(action.type == "CHANGE_CATEGORIES") {		
		return Object.assign({}, state, {
			categories: action.values
		})
	}

	return state
}
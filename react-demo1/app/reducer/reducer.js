let login = false;

try{
	login = localStorage.login ? true : login
}catch(e){}

const defaultState = {
	login: login
}

export default function(state = defaultState, action) {

	if(action.type == "LOGOUT") {

		try {
			localStorage.removeItem("login");
		}catch(e){}

		return {
			login: false
		}
	}

	if(action.type == "LOGIN") {
		try {
			localStorage.login = "true"
		}catch(e){}
		
		return {
			login: true
		}
	}

	return {
		login: state.login
	}
}
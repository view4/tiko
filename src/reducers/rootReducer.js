export default (state, action) => {
	switch(action.type) {
		case 'updateProjects': 
			return {
				...state,
				projects: action.payload
			}
			default: 
			return state;
	}
};
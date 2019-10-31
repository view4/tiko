export default (state = {}, action) => {
	switch(action.type) {
		case 'updateProjects': 
			return {
				...state,
				projects: action.payload
			}
		case 'fetchProjects': 
			return {
				...state,
				projects: action.payload
			}
		case 'setModal':
			return {
				...state,
				modalKey: action.payload
			}
		case 'setModalprojectId': 
			return {
				...state,
				activeModalId: action.payload
			}

			default: 
			return state;
	}
};
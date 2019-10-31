import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import reduxThunk from 'redux-thunk';

/*
var projects = localStorage.getItem('allProjects') || [];
    if (projects.length) {
      projects = JSON.parse(projects)
    } 
	*/
function createOurStore(state={projects:[]}) {
	return createStore(rootReducer, state, applyMiddleware(reduxThunk));
};

export default createOurStore;
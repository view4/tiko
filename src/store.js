import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

var projects = localStorage.getItem('allProjects') || [];
    if (projects.length) {
      projects = JSON.parse(projects)
    } 

function createOurStore(state={projects}) {
	return createStore(rootReducer, state);

};

export default createOurStore;
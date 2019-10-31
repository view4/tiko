import firebase from '../firebase.js'



const fetchProjects = () => async dispatch => {
	const projectsRef = firebase.database().ref('projects');
	projectsRef.on('value', (snapshot) => {
		dispatch({
			type: 'fetchProjects',
			payload: snapshot.val()
		})
	})
}

export default fetchProjects;
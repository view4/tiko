import React from "react";
import firebase from './firebase.js'

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.addValuesToProject = this.addValuesToProject.bind(this);
		this.addProject = this.addProject.bind(this);

	}
	state = {
		values: []
	}
	addProject(event) {
		 event.preventDefault();
		var allProjects = localStorage.getItem('allProjects') || [];

		 // take data from form and parse into object
		const data = new FormData(event.target);

		var values = this.state.values.slice();
		if (document.getElementById('project-values').value == values[values.length-1]) {
			values.push(document.getElementById('project-values').value);
		};
		var title = data.get('title');
		var story = data.get('story');

		var projectObject = {
			values,
			title,
			story
		};
		projectObject.id = allProjects.length;
		projectObject.done = false;

		// save to local storage 
		
		/*if (allProjects.length) {
			allProjects = JSON.parse(allProjects)
		} 
		allProjects.push(projectObject);

		allProjects= JSON.stringify(allProjects);

		localStorage.setItem('allProjects', allProjects) */


		// adding to firebase: 
		var projectsRef = firebase.database().ref('projects');
		projectsRef.push(projectObject);

	};

	addValuesToProject () {
		var value = document.getElementById('project-values').value;
		var values = this.state.values.slice();
		values.push(value);
		this.setState({
			values
		});
		document.getElementById('project-values').value = '';
	};

    render() {
	var { values } = this.state;
	const valueItems = values.map( (value) =><span className='value' key={value}> 
								{value.slice(0,10)} {value.length > 10 ? '...': null}
							</span> )
      return (
		<div>
			<form onSubmit={this.addProject}>
				<h2> Share your dream!</h2>
				<div>
					<h5>What values, beliefs, motivations or justifications do you feel are associated with this project?  </h5>
					<input name='values' id='project-values' />
					<span onClick={this.addValuesToProject}
						style={{
							borderRadius: '50%',
							border: '1px solid black',
							padding: '3px',
							backgroundColor: 'blanchedalmond'
						}}
					> Add </span>
					{valueItems}
				</div>
				<div>
					<h5>What would you like to name your project?  </h5>
					<input name='title' id='project-title' />
				</div>
				<div>
					<h5>Does your project have a story? </h5>
					
					<textarea name='story' id='project-story' />
				</div>
				<div>
					<input type='submit' placeholder='submit'
					style={{marginTop:'1em'}}/> 
				</div>
			</form>
		</div>
      );
    }
  }
  export default Form
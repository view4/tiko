import React from "react";


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


		// save to local storage 
		var allProjects = localStorage.getItem('allProjects') || [];

		if(allProjects.length) {
			allProjects = JSON.parse(allProjects)
		} 
		allProjects.push(projectObject);

		allProjects = JSON.stringify(allProjects);

		localStorage.setItem('allProjects', allProjects)

	};

	addValuesToProject () {
		var value = document.getElementById('project-values').value;
		var values = this.state.values.slice();
		values.push(value);
		this.setState({
			values
		});
	}
    render() {
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
					> --> </span>
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
					<input type='submit' placeholder='submit'/> 
				</div>
			</form>
		</div>
      );
    }
  }
  export default Form
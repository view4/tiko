
import React from "react";
import setModalKey from './actions/setModal.js';
import { connect } from "react-redux";
import firebase from './firebase.js';


var containerStyle = {
    width: '100%',
    height: "100%",
    display: 'flex',
    flexDirection: 'column'
}

class CreateTask extends React.Component {
	constructor(props) {
		super(props)
        this.addJustificationsToTask = this.addJustificationsToTask.bind(this);
        this.submitTask = this.submitTask.bind(this);

    }
    state = {
        justifications: []
    }
    submitTask(e){
        e.preventDefault();
        const data = new FormData(e.target);

        var taskName = data.get('taskName');
        var description = data.get('taskDescription');

        var justifications = this.state.justifications;
        var status = 'new';

        var taskObject = {
            taskName,
            description,
            justifications,
            status
        };
        // project's existing tasks... 

        console.log(this.props)
        var project = this.props.projects[this.props.activeModalId];
        var projectTasks = project.tasks|| {};
        console.log(projectTasks)
        console.log(Object.keys(projectTasks))
        var taskId = Object.keys(projectTasks).length; // There should be a better way to find a unique id for each object

        projectTasks[taskId] = taskObject
        
        // updating tasks of project for firebase.
        var projectsRef = firebase.database().ref('projects');
        projectsRef.update({
            [`${this.props.activeModalId}/tasks`]: projectTasks
        })
    }
    addJustificationsToTask () {
        var justificationInput = document.getElementById('task-justifications');
        var justification = justificationInput.nodeValue;
        justificationInput.value = '';
        var justifications = this.state.justifications.slice();
        justifications.push(justification);
        this.setState({justifications}); 
    }
	render() {

		return (
            <div style={containerStyle}>
                <form onSubmit={this.submitTask} style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <input  name='taskName' placeholder='task name' />
                    <label> why is this task important </label>
                    <input placeholder='justify task here' id='task-justifications' />
                    <span onClick={this.addJustificationsToTask}>+ </span>
                    <textarea placeholder='speak of this task' name='taskDescription'>
                    </textarea>
                    <button> Submit this task </button>
                </form>
            </div>

	
		)
	}
}

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps)(CreateTask)
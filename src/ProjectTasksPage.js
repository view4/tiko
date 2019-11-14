
import React from "react";
import setModalKey from './actions/setModal.js';
import { connect } from "react-redux";
import CreateTask from './CreateTask.js'
var tasks = [
	{ title: 'a', description: 'lorem ipsum...', active: false },
	{ title: 'b', description: 'lorem ipsum...', active: false },
	{ title: 'c', description: 'lorem ipsum...', active: false }
];

class TaskModal extends React.Component {
	constructor(props) {
		super(props)
		//this.setActiveTaskTitle = this.setActiveTaskTitle.bind(this);
		//this.popUpShowUp = this.popUpShowUp.bind(this);
		this.handleCreateTaskClick = this.handleCreateTaskClick.bind(this);
	}
	state = {
		isCreateMode: false
	}
	/*state = {
		activeTaskTitle: null
	}

	popUpShowUp = (e) => {
		var activeTaskTitle = this.state.activeTaskTitle;
		var content;
		for(var i = 0; i< tasks.length; i++){
				if (activeTaskTitle == tasks[i].title){
					content = tasks[i].description;
				}
		}
		if(activeTaskTitle){
			return <div>
				{content}
				</div>
		}

	}
	*/

	/*setActiveTaskTitle = title => {
		this.setState({activeTaskTitle : title})
	}*/

	popUpShowUp = (e) => {
		let content;
		for (let i = 0; i < tasks.length; i++) {
			let activeTaskTitle = tasks[i].active;
			content = tasks[i].description;
			if (activeTaskTitle) {
				console.log('it prints it to the console')
				return <div>
					{content}
				</div>

			}
		}
	}
	onToggleActive = title => {
		for (let i = 0; i < tasks.length; i++) {
			if (tasks[i].title==title) {
				
				return this.popUpShowUp()
			}

		}
	}

	handleCreateTaskClick () {
		this.setState({isCreateMode: !this.state.isCreateMode})
	}
	displayCreateTask () {

		return(
			<CreateTask />
		)
	}
	render() {
		var { projects, activeModalId } = this.props;
		var project = projects[activeModalId];
		//var values = project.values;
		//const valueItems = values.map( (value) =><span className='value' key={value}> 
		//						{value.slice(0,10)} {value.length > 10 ? '...': null}
		//					</span> )


		return (
			<div className='projectModal' style={{
				width: '100%',
				height: ' 100%',
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center',
				flexDirection: 'column'

			}}>
				<button onClick={this.handleCreateTaskClick}> Create new task</button>
				
					<div className='modal-content'>

					{ !this.state.isCreateMode ? (
						tasks.map(task => (
							<div style={{
								width: "10px",
								height: "10px",
								margin: "3px",
								padding: "1px"
							}}>
								{task.title}
								<button onClick={() => this.onToggleActive(tasks.title)} type='button'
									className='btn btn-outline-danger btn-sm float-right'>

								</button>

							</div>
						))
						) : this.displayCreateTask()
				

				}
				</div>
				{this.popUpShowUp()}

			</div>
		);
	}
}

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps)(TaskModal)
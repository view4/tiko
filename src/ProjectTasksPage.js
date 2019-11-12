
import React from "react";
import setModalKey from './actions/setModal.js';
import { connect } from "react-redux";

var tasks = [
 { title: 'a', description: 'lorem ipsum...' },
 { title: 'b', description: 'lorem ipsum...' },
 { title: 'c', description: 'lorem ipsum...' }
]

class TaskModal extends React.Component {
	constructor(props){
		super(props)
		this.setActiveTaskTitle = this.setActiveTaskTitle.bind(this);
		this.popUpShowUp = this.popUpShowUp.bind(this)
	}
	state = {
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
	setActiveTaskTitle = title => {
		this.setState({activeTaskTitle : title})
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
				<div className='modal-content'>
					{
						tasks.map(task => (
							<div style={{
								width: "10px",
								height: "10px",
								margin: "3px",
								padding: "1px"
							}}>
								{task.title}
								{//task.description
								}
								<button onClick={()=>this.setActiveTaskTitle(task.title)} type='button'
									className='btn btn-outline-danger btn-sm float-right'>

								</button>
								
							</div>

						))
					}
					{this.popUpShowUp()}
				</div>
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
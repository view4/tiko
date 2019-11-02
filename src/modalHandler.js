import React from "react";
import Form from "./form.js";
import DescModal from "./DescModal.js";
import setModalKey from './actions/setModal.js';
import setActiveModalId from './actions/setActiveModalId.js';
import TaskModal from './ProjectTasksPage.js';
import { connect } from "react-redux";

class ModalContainer extends React.Component {
	constructor(props) {
		super(props);

		this.closeModal = this.closeModal.bind(this);
		this.handleTabClick = this.handleTabClick.bind(this);
		this.renderModal = this.renderModal.bind(this)
	}
	state = {
		activeTab: 'home'
	};

	renderModal() {
		var {project, modalKey} = this.props;
		var { activeTab } = this.state;
		if (modalKey == 'Project-Description') {
			if (activeTab == 'tasks') {
				return <TaskModal />
			} else {
				return < DescModal />

			}
		} else if (modalKey == 'Project-Input') {
			return <Form/>
		}
	};

	closeModal(e) {
		var {setActiveModalId, setModalKey} = this.props;
		if (e.target.classList[0] == 'modal-sheet' || e.target.classList[0] == 'esc'){	
			setActiveModalId(null);
			setModalKey(null);
		}
	};

	handleTabClick(e) {
		var tab = e.target.innerText;
		this.setState({activeTab: tab})
	};
	
  render() {
  return (
      <div
        className='modal-sheet'
		onClick={this.closeModal}
      >
        <div className='modal-content'>
			<div className='esc'> x </div>
			<div className='project-tabs'>
				<span className='tab' onClick={this.handleTabClick}>
					home
				</span>
				<span className='tab' onClick={this.handleTabClick}>
					tab 2
				</span>
				<span className='tab' onClick={this.handleTabClick}>
					tasks
				</span> 
			</div>
			{this.renderModal()} 
		</div>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
	...state
});
const mapDispatchToProps = dispatch => ({
	setModalKey: (payload) => dispatch(setModalKey(payload)),
	setActiveModalId: (payload) => dispatch(setActiveModalId(payload))

});
export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)

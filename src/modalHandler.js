import React from "react";
import Form from "./form.js";
import DescModal from "./DescModal.js";

class ModalContainer extends React.Component {

	constructor(props) {
		super(props);
		this.closeModal = this.closeModal.bind(this);
	}
	renderModal() {
		var {project, modalKey} = this.props;
		if (modalKey == 'Project-Description') {
			return < DescModal project={project}/>
		} else if (modalKey == 'Project-Input') {
			return <Form/>
		}
	}
	closeModal(e) {
		if (e.target.classList[0] == 'modal-sheet' || e.target.classList[0] == 'esc'){	
			this.props.closeModal();
		}
	}
	
  render() {
  return (
      <div
        className='modal-sheet'
		onClick={this.closeModal}
      >
        <div className='modal-content'>
			<div className='esc'> Close Window </div>
			{this.renderModal()} 
		</div>
        
      </div>
    );
  }
}

export default ModalContainer;
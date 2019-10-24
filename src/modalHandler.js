import React from "react";
import Form from "./form.js";
import DescModal from "./DescModal.js";

class ModalContainer extends React.Component {

	constructor(props) {
		super(props);
		this.closeModal = this.closeModal.bind(this);
	}
	renderModal() {
		var {post, modalKey} = this.props;
		if (modalKey == 'Project-Description') {
			return < DescModal post={post}/>
		} else if (modalKey == 'Project-Input') {
			return <Form/>
		}
	}
	closeModal(e) {
		if (e.target.classList[0] == 'modal-sheet'){	
			this.props.closeModal();
		}
	}
	
  render() {
  return (
      <div
        className='modal-sheet'
		onClick={this.closeModal}
      >
        <div className='modal-content'> {this.renderModal()} </div>
        
      </div>
    );
  }
}

export default ModalContainer;
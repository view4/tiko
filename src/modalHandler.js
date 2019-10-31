import React from "react";
import Form from "./form.js";
import DescModal from "./DescModal.js";
import setModalKey from './actions/setModal.js';
import setActiveModalId from './actions/setActiveModalId.js';
import { connect } from "react-redux";

class ModalContainer extends React.Component {
	constructor(props) {
		super(props);
		this.closeModal = this.closeModal.bind(this);
	}
	renderModal() {
		var {project, modalKey} = this.props;
		if (modalKey == 'Project-Description') {
			return < DescModal />
		} else if (modalKey == 'Project-Input') {
			return <Form/>
		}
	}
	closeModal(e) {
	var {setActiveModalId, setModalKey} = this.props;
		if (e.target.classList[0] == 'modal-sheet' || e.target.classList[0] == 'esc'){	
			setActiveModalId(null);
			setModalKey(null);
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

const mapStateToProps = state => ({
	...state
});
const mapDispatchToProps = dispatch => ({
	setModalKey: (payload) => dispatch(setModalKey(payload)),
	setActiveModalId: (payload) => dispatch(setActiveModalId(payload))

});
export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)

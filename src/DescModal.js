import React from "react";
import setModalKey from './actions/setModal.js';
import { connect } from "react-redux";

class DescModal extends React.Component {
  render() {
		var { projects, activeModalId } = this.props;
		var project = projects[activeModalId];
		var values = project.values;
		const valueItems = values.map( (value) =><span className='value' key={value}> 
								{value.slice(0,10)} {value.length > 10 ? '...': null}
							</span> )
    return (
        <div className='projectModal' style={{
            width: '100%',
            height:' 100%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
			flexDirection: 'column'

        }}>
			<div> 
			<h3>{project.title}</h3> 
			</div>
			<div>
				{valueItems}
			</div>
			<div>
			{project.story}
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

export default connect(mapStateToProps)(DescModal)
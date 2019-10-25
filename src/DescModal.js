import React from "react";

class DescModal extends React.Component {
  render() {
    var project = this.props.project;
	var {values} = this.props.project;
		const valueItems = values.map( (value) =><span className='value'> 
								{value.slice(0,10)} {value.length > 10 ? '...': null}
							</span> )
    return (
        <div clasName='projectModal' style={{
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

export default DescModal;

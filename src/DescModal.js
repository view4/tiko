import React from "react";

class DescModal extends React.Component {
  render() {
    var project = this.props.project;
    return (
        <div style={{
            width: '100%',
            height:' 100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

        }}>{project.story}
        </div>
    );
  }
}

export default DescModal;

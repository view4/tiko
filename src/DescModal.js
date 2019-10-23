import React from "react";

class DescModal extends React.Component {
  render() {
    var post = this.props.post;
	console.log('sure thing')
    return (
        <div style={{
            width: '100%',
            height:' 100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

        }}>{post.description} </div>
    );
  }
}

export default DescModal;

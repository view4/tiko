import React from "react";

class DescModal extends React.Component {
  render() {
    var post = this.props.post;
    return (
      <div
        style={{
          display: "absolute",
          border: "2px solid black",
          width: "40%",
          height: "10vh",
          
          
        }}
      >
        <div style={{
            width: '100%',
            height:' 100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

        }}>{post.description} </div>
        
      </div>
    );
  }
}

export default DescModal;

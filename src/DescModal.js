import React from "react";

class DescModal extends React.Component {
  render() {
      var post = this.props.post;
    return (
      <div
        style={{
          display: "absolute",
          border: "2px solid black"
        }}
      >
        {post.description} 
      </div>
    );
  }
}

export default DescModal;

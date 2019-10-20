import React from "react";

class Posts extends React.Component {
  render() {
    return this.props.posts.map(post => (
      <div style={{ 
        display: 'inline-flex',
        padding: '1em',
        margin: '1em',
        border: '2px solid black'

      }}> {post.title}</div>
    ));
  }
}

export default Posts;

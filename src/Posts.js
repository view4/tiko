import React from "react";

class Posts extends React.Component {
  openPostDesc(id){
    this.props.displayModal()
    this.props.changeActiveModalId(id)
  }
  render() {
    return this.props.posts.map(post => (
      <div key={post.id}style={{ 
        padding: '1em',
        margin: '1em',
        border: '2px solid black',
        display:'inline-flex'

      }}
      onClick={()=>this.openPostDesc(post.id)}> {post.title}</div>
    ));
  }
}

export default Posts;

import React from "react";

class Posts extends React.Component {
  openPostDesc(id){
    this.props.displayModal()
    this.props.changeActiveModalId(id)
  }
  render() {
    return this.props.projects.map(project => (
      <div key={project.id} style={{ 
        padding: '1em',
        margin: '2em 3em',
        border: '2px solid black',
        display:'inline-flex'

      }}
      onClick={()=>this.openPostDesc(project.id)}> {project.story}</div>
    ));
  }
}

export default Posts;

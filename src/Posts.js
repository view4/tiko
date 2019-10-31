import React from "react";
import setModalKey from './actions/setModal';
import setActiveModalId from './actions/setActiveModalId';
import { connect } from "react-redux";

class Posts extends React.Component {

  openPostDesc(id){
	var {setActiveModalId, setModalKey} = this.props;
	setModalKey('Project-Description')
	setActiveModalId(id)
  }

  render() {
	var projects = [];
	for (let project in this.props.projects) {
		projects.push({
			projectId: project,
			...this.props.projects[project]
		})
	}
    return projects.map(project => (
      <div key={project.projectId} style={{ 
        padding: '1em',
        margin: '2em 3em',
        border: '2px solid black',
        display:'inline-flex'

      }}
      onClick={()=>this.openPostDesc(project.projectId)}
      > {project.story}
      </div>
    ));
  }
}

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({
	setModalKey: (payload) => dispatch(setModalKey(payload)),
	setActiveModalId: (payload) => dispatch(setActiveModalId(payload))

});

export default connect(mapStateToProps, mapDispatchToProps)(Posts)

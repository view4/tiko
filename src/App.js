import React from "react";
import Posts from "./Posts.js";
import Header from "./Header.js";
// import Form from "./form.js";
import DescModal from "./DescModal.js";
import ModalContainer from "./modalHandler.js";
import "./App.css";

import updateProjects from './actions/updateProjects';
import fetchProjects from './actions/fetchProjects';

import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount () {
	this.props.fetchProjects();
  }
  

  render() {
  console.log(this.props)
	var {modalKey = null} = this.props
	console.log(modalKey)
    return (
      <div className="App">
        <Header openForm={this.openForm}/>
        <Posts />
        {modalKey ? (
          <ModalContainer 
			/>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({
	updateProjects: (payload) => dispatch(updateProjects(payload)),
	fetchProjects: ()=> dispatch(fetchProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(App)

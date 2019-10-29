import React from "react";
import Posts from "./Posts.js";
import Header from "./Header.js";
// import Form from "./form.js";
import DescModal from "./DescModal.js";
import ModalContainer from "./modalHandler.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayModal = this.displayModal.bind(this);
    this.changeActiveModalId = this.changeActiveModalId.bind(this);
	this.closeModal = this.closeModal.bind(this);
	this.openForm = this.openForm.bind(this);
  }
  state = {
    displayModal: false,
    activeModalId: null,
	modalKey: 'Project-Input',
	projects: []
  };

  componentWillMount () {
    var projects = localStorage.getItem('allProjects') || [];
    if (projects.length) {
      projects = JSON.parse(projects)

    } 
    
    this.setState({projects})
  }
  displayModal() {
    this.setState({
      displayModal: true
    });
  }
  changeActiveModalId(id) {
    this.setState({
      activeModalId: id,
	  modalKey: 'Project-Description'
    });
  }
  getPost() {
    //var posts = this.state.posts;
   // var id = this.state.activeModalId;
	var { projects, activeModalId: id } = this.state // This is a different way to declare multiple vars, from the same object (saw i the internship), it's called object destructuring
    
	for (var i = 0; i < projects.length; i++) {
      if (projects[i].id == id) {
        return projects[i];
      }
    }
  }

  closeModal() {
	  this.setState({
  		  displayModal: false
	  });
  }

  openForm() {
	this.setState({
		displayModal: true,
		modalKey: 'Project-Input'
	})
  }
  render() {
    return (
      <div className="App">
        <Header openForm={this.openForm}/>
        <Posts 
        posts={this.state.posts} 
		projects={this.state.projects}
        displayModal={this.displayModal} 
        changeActiveModalId={this.changeActiveModalId} />
        {this.state.displayModal ? (
          <ModalContainer 
			project={this.getPost()} 
			display={this.state.displayModal} 
			modalKey={this.state.modalKey}
			closeModal={this.closeModal}
			/>
        ) : null}
      </div>
    );
  }
}

export default App;

import React from "react";
import Posts from "./Posts.js";
import Header from "./Header.js";
// import Form from "./form.js";
import DescModal from "./DescModal.js";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayModal = this.displayModal.bind(this);
    this.changeActiveModalId = this.changeActiveModalId.bind(this);

  }
  state = {
    displayModal: false,
    posts: [
      {
        id: 1,
        title: "wii",
        done: false,
        description: "crumpets"
      },
      {
        id: 2,
        title: "wii4",
        done: false,
        description: "kidney pie"
      }
    ],
    activeModalId: null
  };
  displayModal() {
    this.setState({
      displayModal: !this.state.displayModal
    });
  }
  changeActiveModalId(id) {
    this.setState({
      activeModalId: id
    });
  }
  getPost() {
    var posts = this.state.posts;
    var id = this.state.activeModalId;
    for (var i = 0; i < posts.length; i++) {
      if (posts[i].id == id) {
        return posts[i];
      }
    }
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Posts 
        posts={this.state.posts} 
        displayModal={this.displayModal} 
        changeActiveModalId={this.changeActiveModalId} />
        {this.state.displayModal ? (
          <DescModal  post={this.getPost()} display={this.state.displayModal} />
        ) : null}
      </div>
    );
  }
}

export default App;

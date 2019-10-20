import React from "react";
import Posts from "./Posts.js";
import Header from "./Header.js";

import "./App.css";

class App extends React.Component {
  state = {
    posts:[{
      id: 1,
      title: "wii",
      done : false,
    },
    {
      id: 2,
      title: "wii4",
      done : false,
    },
  ]
  };
  render(){
  return (
    <div className="App">
      <Header/>
      <Posts
       posts={this.state.posts} 
      />
    </div>
  );
}
}

export default App;

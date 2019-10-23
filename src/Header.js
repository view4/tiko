import React from "react";

class Header extends React.Component {

	constructor(props) {
		super(props);
		this.openForm = this.openForm.bind(this);
	}

  openForm(){
    this.props.openForm();
  }
  render() {
    return <div style={{
    backgroundColor:'darkBlue',
    color:'white',
    fontWeight:'900',
    fontSize:'2em',
    padding:'1em',
    display:'flex',
    justifyContent:'space-between'
	}}><span></span>
	<span>
	Tiko - Find a contributer to your pojects
	</span>
	<button onClick={this.openForm} style={{
   fontSize:'0.5em',
   marginRight:'50px'
	}}>Add a Project</button> </div>;
	 }
	}

export default Header;

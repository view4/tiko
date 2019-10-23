import React from "react";

class Header extends React.Component {
  openForm(){
    console.log('Gabi is right')
  }
  render() {
    return <div style={{ width: "100%",
    backgroundColor:'darkBlue',
    color:'white',
    fontWeight:'900',
    fontSize:'2em',
    padding:'1em',
    display:'flex',
    justifyContent:'space-between'
 }}><span></span><span>
   Tiko - Find a contributer to your pojects</span>
 <button onClick={this.openForm} style={{
   fontSize:'0.5em',
   marginRight:'50px'
 }}>Add a Project</button> </div>;
  }
}

export default Header;

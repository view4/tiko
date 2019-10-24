import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.props.openForm();
  }
  render() {
    return (
      <div
        style={{
          background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 7%, rgba(0,142,255,1) 93%)',
          color: "ivory",
          fontFamily:'Tahoma',
          fontWeight: "900",
          fontSize: "1.7em",
          padding: "1em",
          display: "flex",
          justifyContent: "space-between",
          opacity:'0.8'
        }}
      >
        <span></span>
        <span>Tiko - Find a contributer to your pojects</span>
        <button 
          onClick={this.openForm}
          style={{
            fontSize: "0.5em",
            marginRight: "2em",
            borderRadius: '10px',
            padding:'1em'
          }}
        >
          Add a Project
        </button>{" "}
      </div>
    );
  }
}

export default Header;

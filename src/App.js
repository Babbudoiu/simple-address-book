import './App.css';
import React from "react";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      contact: null,
      list: []
    };

    this.nameHandler = this.nameHandler.bind(this);
    this.contactHandler = this.contactHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  nameHandler = (event) => {
    this.setState({name: event.target.value})
  }

  contactHandler = (event) => {
    this.setState({contact: event.target.value})
  }

  submitHandler(event) {
    alert("New contact added: " + this.state.name + " " + this.state.contact);
    event.preventDefault();
    this.setState({list: [...this.state.list, {name: this.state.name, contact: this.state.contact}]});
    let newContact = {
      name: this.state.name,
      contact: this.state.contact
    }
    this.setState({ list: [...this.state.list, newContact], name: "", contact: "" });
  }

  render() {
    return (
      <div className="main">
        <h1>Save your contacts here!</h1>
      <form onSubmit={this.submitHandler}>
        <label for="name" id="nameLabel">
          Name
          </label>
          <input id="name" value={this.state.name} type="text" placeholder="Enter name here" onChange={this.nameHandler} />
        
        <label for="contact" id="contactLabel">
          Contact
          </label>
          <input id="contact" value={this.state.contact} type="text" placeholder="Enter phone number here" onChange={this.contactHandler} />
        
        <input type="submit" value="Submit" />
      </form>

    
     <ul id="mainList">
      {this.state.list.map(function(contacts) {
        return <li>{contacts.name} {contacts.contact}</li>

      })}

      </ul>

      </div>

    );
  };
};
  

export default App

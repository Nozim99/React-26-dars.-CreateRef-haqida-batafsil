import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      card: "",
      cv: "",
      name: ""
    }
    this.cardRef = React.createRef();
    this.cvRef = React.createRef();
    this.nameRef = React.createRef()
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.state.card.length === 16) {
        this.cvRef.current.focus()
      }
      if(this.state.cv.length === 3){
        this.nameRef.current.focus();
      }
    }
    )
  }

  componentDidMount() {
    this.cardRef.current.focus()
  }

  render() {
    const { card, cv, name } = this.state
    return (
      <div>
        <h1>Form</h1>
        <div className="card">
          <input type="text" id="card" name="card" placeholder="VISA Number" value={card} onChange={this.handleChange} ref={this.cardRef} />
          <input type="text" id="card" name="cv" placeholder="cv" value={cv} onChange={this.handleChange} ref={this.cvRef} />
        </div>
        <input type="text" id="name" name="name" placeholder="name" value={name} onChange={this.handleChange} ref={this.nameRef} />
        <button onClick={this.handleSubmit}>Send</button>
      </div>
    )
  }
}
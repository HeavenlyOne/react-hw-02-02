import { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    

    if (this.props.contacts.some(({ name }) => name === this.state.name)) {
       alert(`${this.state.name} is already in contacts`);
    } else {
      this.props.onSubmit(this.state);
    }
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            required
            onChange={this.handleChange}
            value={this.state.name}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;

// if (this.props.contacts.includes(this.state.name)) {
//   return alert(`${this.state.name} is already in contacts`);
// } else {
//   this.props.onSubmit(this.state);
// }
// this.reset();

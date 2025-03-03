import { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
  };

  addName = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Name
        <input
          type="text"
          name="name"
          required
          onChange={this.addName}
          value={this.state.name}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;

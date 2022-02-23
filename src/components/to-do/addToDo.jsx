import React, { Component } from "react";

class AddToDo extends Component {
  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ title: "" });
  };

  onChange = (e) => this.setState({ title: e.target.value });

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
          <input
            type="text"
            name="title"
            style={{ flex: "10", padding: "5px" }}
            placeholder="Add Todo..."
            value={this.state.title}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Submit"
            className="btn"
            style={{ flex: "1" }}
          />
        </form>
      </div>
    );
  }
}

export default AddToDo;

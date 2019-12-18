import React from "react";
import { FaTimes, FaCheck } from "react-icons/fa";

export default class Input extends React.PureComponent {
  state = {
    title: ""
  };
  onChange = e => {
    this.setState({ title: e.target.value });
  };
  onSubmit = () => {
    this.props.handleSubmit(this.state.title);
  };
  onDeny = () => {
    this.props.handleDeny();
  };

  render() {
    return (
      <div>
        <input type="text" autoFocus onChange={this.onChange} />
        <FaCheck style={{ color: "green" }} onClick={this.onSubmit} />
        <FaTimes style={{ color: "red" }} onClick={this.onDeny} />
      </div>
    );
  }
}



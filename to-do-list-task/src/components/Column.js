import React, { PureComponent } from "react";
import Input from "./Input";

export default class Column extends PureComponent {
  state = {
    id: ""
  };
  handleClick(item) {
    this.props.handleConvert(item, this.props.list);
  }
  handleSubmit = title => {
    const id = this.state.id;
    this.setState({ id: "" });

    this.props.handleEdit(title, id, this.props.list, this.props.title);
  };
  handleDeny = () => {
    this.setState({ id: "" });
  };
  handleEdit = item => {
    this.setState({ id: item.id || "" });
  };
  render() {
    const { title, list } = this.props;
    const checked = title === "completed" ? "checked" : "";
    return (
      <div className="">
        <h3>{title}</h3>
        <ol>
          {list.map(item => {
            return (
              <li key={item.id} onClick={() => this.handleEdit(item)}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => {
                    this.handleClick(item, list);
                  }}
                />
                {item.id === this.state.id ? (
                  <Input
                    handleSubmit={this.handleSubmit}
                    handleDeny={this.handleDeny}
                  />
                ) : (
                  item.title
                )}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

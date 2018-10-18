import React from "react";
import Nav from "./Nav";
import Aside from "./Aside";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.rtl = this.rtl.bind(this);
    this.ltr = this.ltr.bind(this);
    this.getDir = this.getDir.bind(this);
  }
  state = {
    dir: "ltr"
  };
  ltr() {
    this.setState({ dir: "ltr" });
  }
  rtl() {
    this.setState({ dir: "rtl" });
  }
  getDir = () => {
    return this.state.dir;
  };
  render() {
    return (
      <div className="wpp" dir={this.state.dir}>
        <div className="container is-fluid">
          <Nav ltr={this.ltr} rtl={this.rtl} getDir={this.getDir} />
        </div>
        <div className="container">
          <div className="columns">
            <div className="column is-2 is-sidebar-menu is-hidden-mobile">
              <Aside />
            </div>
            <div className="column is-main-content">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

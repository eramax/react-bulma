import React from "react";
import { NavLink  } from "react-router-dom";
export default class Aside extends React.Component {
  state = {
    isActive: false
  };
  isActive = () => {
    return this.state.isActive ? "is-active" : "";
  };
  render() {
    return (
      <aside className="menu">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink  exact to="/" activeClassName="is-active">
              Dashboard
            </NavLink >
          </li>
          <li>
            <NavLink  to="/about" activeClassName="is-active">About</NavLink >
          </li>
          <li>
            <NavLink  to="/today" activeClassName="is-active">Today Date</NavLink >
          </li>
        </ul>
        <p className="menu-label">Administration</p>
        <ul className="menu-list">
          <li>
            <a>Team Settings</a>
          </li>
          <li>
            <a>Invitations</a>
          </li>
          <li>
            <a>Authentication</a>
          </li>
        </ul>
        <p className="menu-label">Transactions</p>
        <ul className="menu-list">
          <li>
            <a>Payments</a>
          </li>
          <li>
            <a>Transfers</a>
          </li>
          <li>
            <a>Balance</a>
          </li>
        </ul>
      </aside>
    );
  }
}

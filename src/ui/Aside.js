import React from 'react'
export default class Aside extends React.Component {
  state = {
    isActive: false
  }
  isActive = () => {
    return this.state.isActive ? 'is-active' : ''
  }
  render() {
    return (
      <aside className="menu">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <a className="is-active">Dashboard</a>
          </li>
          <li>
            <a>Customers</a>
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
    )
  }
}

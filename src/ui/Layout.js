import React from 'react'
import Nav from './Nav'
import Aside from './Aside'

export default class Layout extends React.Component {
  render() {
    return (
      <div className="wpp">
        <div className="container is-fluid">
          <Nav />
        </div>
        <div className="container">
          <div className="columns">
            <div className="column is-2 is-sidebar-menu is-hidden-mobile">
              <Aside />
            </div>
            <div className="column is-main-content">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

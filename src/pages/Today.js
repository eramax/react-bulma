import React from 'react'

export default class TodayPage extends React.Component {
  render() {
    return <h1 className="title is-2">
        Today Date is {new Date().toDateString()}
    </h1>
  }
}

import React, { Component } from 'react'

export default class Password extends Component {
  render() {
    return (
      <div>
        <label htmlFor="password">Password :</label>
        <input id="password" type="text" placeholder="A password..."/>
      </div>
    )
  }
}


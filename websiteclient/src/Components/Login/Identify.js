import React, { Component } from 'react'

export default class Identify extends Component {
  render() {
    return (
      <div>
        <label htmlFor="identifying">Id :</label>
        <input id="identifying" type="text" placeholder="An id..."/>
      </div>
    )
  }
}



import React, { Component } from 'react'
import { Consumer } from '../../Context';

export default class Index extends Component {
  render() {
    return (
      <Consumer>
        {
          value => {

            return(
              <div>
                Je suis sur la page Index
              </div>
            )
          }
        }
      </Consumer>
    )
  }
}

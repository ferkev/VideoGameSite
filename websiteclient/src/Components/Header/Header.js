import React, { Component } from 'react'
import { Consumer } from '../../Context';


export default class Header extends Component {
  render() {
    
    return (
      <Consumer>
        {
          value => {

            return(
              <React.Fragment>
                <a href="/">Logo</a>
                <form>
                  <input placeholder="Votre recherche..."/>
                </form>
                <React.Fragment>
                  {
                    !value.connected ? 
                    (
                      <React.Fragment>
                        <a href="/login">Login</a>
                        <a href="/Register">Register</a>
                      </React.Fragment>
                    )
                    : 
                    (
                      <a href="/logout">
                        <i className="material-icons">power_settings_new</i>
                      </a>
                    )
                  }
                </React.Fragment>
              </React.Fragment>
            )
          }
        }
      </Consumer>
     
    )
  }
}

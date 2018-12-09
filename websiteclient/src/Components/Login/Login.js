import React, { Component } from 'react'
import { Consumer } from '../../Context';
import { graphql } from 'react-apollo';

import { getCustomerMutation }  from '../../Queries/Queries';

import Password from './Password';
import Identify from './Identify';

import './login.css';

class Login extends Component {

  state={
    identifying: "",
    password: "",
  }


  submit = (event) => {
    event.preventDefault();
    console.log(this.props)
    this.props.mutate({
      variables:{
        email: this.state.identifying,
        password: this.state.password
      }
      
    }).then((data) => {
      console.log(data)
    })
  }

  handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    this.setState({
      [name] : value
    })
  }



  render() {
    return (
      <Consumer>
        {
          value => {

            return (
              <div>
                <h1>Connection</h1>
                <form onSubmit={this.submit}>
                  <div>
                    <label htmlFor="identifying">Id :</label>
                    <input id="identifying" name="identifying" type="text" placeholder="An id..." onChange={this.handleChange}/>
                  </div>
                  <div>
                    <label htmlFor="password">Password :</label>
                    <input id="password" name="password" type="text" placeholder="A password..." onChange={this.handleChange}/>
                  </div>
                  <div>
                    <button type="reset">Annuler</button>
                    <button id="validate">Valider</button>
                  </div>
                </form>
              </div>
            )
          }
        }
      </Consumer>
    )
  }
}

export default graphql(getCustomerMutation)(Login)

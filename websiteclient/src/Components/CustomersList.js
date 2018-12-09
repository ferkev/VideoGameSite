// request graphql exemple :)
import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import Loading from './Loading';
import { Consumer } from '../Context';

const getCustomersQuery = gql`
  {
    customers {
      id,
      lastName,
      firstName
    }
  }
`

class CustomersList extends Component {

  display = () => {
    let { data } = this.props
    if(!data.loading) {
      return data.customers.map((value, i)=>{
        return <li key={i}>{value.lastName + ' ' + value.firstName}</li>
      })
    }else{
      return <li><Loading /></li>
    }
  }

  render() {
    return (
      <Consumer>
        {
          value => {
            return (
              <ul>
                {this.display()}
              </ul>
            )
          }
        }
      </Consumer>
    )
  }
}

export default graphql(getCustomersQuery)(CustomersList)

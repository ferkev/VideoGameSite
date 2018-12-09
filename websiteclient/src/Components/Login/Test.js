import React, { Component } from 'react'
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getCustomerQuery = gql`
  query Customer($email: String!, $password: String!){
    customer(email: $email, password: $password){
        id,
        lastName,
        firstName
    }
  }
`

class Test extends Component {

  display = () => {
    let { data } = this.props
    if(!data.loading) {
      console.log(data)
    }else{
      return <li>Charging...</li>
    }
  }

  render() {
    return (
      <div>
        {this.display()}
      </div>
    )
  }
}

export default graphql(getCustomerQuery, {
  options: (props) => {
    console.log(props)
    return {
      variables: {
      email: props.email,
      password: props.password
     }
    }
  }
})(Test)
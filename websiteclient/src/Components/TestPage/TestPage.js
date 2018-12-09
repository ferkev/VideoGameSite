import React, { Component } from 'react'
import styled from 'styled-components';

const Test = styled.div`
  color: red;
`


export default class TestPage extends Component {
  render() {
    return (
      <Test>
        -----Test content-----
        <p>
          Je suis un test
        </p>
      </Test>
    )
  }
}

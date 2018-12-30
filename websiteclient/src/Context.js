import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        connected: true,
      };
    default:
      return state;
  }
};


export class Provider extends Component {

  state={
    connected: false,
    dispatch: action => this.setState(state => reducer(state, action))
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
import React, { Component } from 'react'

export default class CounterCom extends Component {

  render() {
    return (
      <div>
        <h1>Counter Component</h1>
        <button onClick={setCounter}>ADD</button>
      </div>
    )
  }
}

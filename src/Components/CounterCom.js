import React, { Component } from 'react'

export default class CounterCom extends Component {

  render() {
    const{counting,setCounter}=this.props
    return (
      <div>
        <h1>Counter Component</h1>
        <h1>Count value={counting.count}</h1>
        <button onClick={setCounter}>ADD</button>
      </div>
    )
  }
}

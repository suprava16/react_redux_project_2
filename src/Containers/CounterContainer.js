import React, { Component } from 'react'

import CounterCom from '../Components/CounterCom'
import { connect } from "react-redux"
import {setCounter}  from "../Action/CouterAction"

 class CounterContainer extends Component {
  render() {
    
    return (
      <div>
        <CounterCom {...this.props}/>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    counting: store.CounterReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCounter: () => {
      dispatch(setCounter())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterContainer)


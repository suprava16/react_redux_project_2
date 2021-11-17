import { ADD_COUNTER } from "../Constants/CounterConstant"
export function setCounter() {
  return {
    type: ADD_COUNTER,
    payload:1
  }
}

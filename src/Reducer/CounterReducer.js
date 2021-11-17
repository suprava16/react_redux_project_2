import { ADD_COUNTER } from "../Constants/CounterConstant"
const initial_state = {
  count: 0,
}

export function CounterReducer(state = initial_state, action) {
  switch (action.type) {
    case ADD_COUNTER:
      return state = {...state, count: state.count + action.payload }
default: return state
  }

}
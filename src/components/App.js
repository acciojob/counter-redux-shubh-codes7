
import React from "react";
import './../styles/App.css';
import {useDispatch, useSelector} from 'react-redux'
import {increase, decrease} from '../redux/counterSlice.js'

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.counter)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increase())}>increment</button>
      <button onClick={()=>dispatch(decrease())}>decrement</button>
    </div>
  )
}

export default App

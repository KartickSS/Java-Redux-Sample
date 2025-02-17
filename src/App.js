import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import isLogged from './reducers/isLogged';
import { incerment,decrement } from './actions'; 



export const App = () => {

    const [counter,setCounter] = useState(0);
    const [newText,setText] = useState("");

    useEffect(()=>{
        document.title=`${counter} new message`;
    },[]);

    function increaseCounter(){
        setCounter(counter+1);
    }

    function decreaseCounter(){
        setCounter(counter - 1);
    }

    const reduxCouter = useSelector(state => state.counter ); //A Redux hook that allows a React component to extract a specific piece of state from the Redux store.
    const isLogged = useSelector(state => state.logged);
    const dispatch = useDispatch(); //is used in a React component with Redux (React-Redux) to dispatch actions to the Redux store.

  return (
    <div>
        <input type='text' onChange={e => setText(e.target.value)}></input>
        <h1>{newText}Clicked Counter :{counter} times.</h1>
        <button onClick={increaseCounter}>Increase</button>
        <button onClick={decreaseCounter}>Decrease</button>


        <h1>REDUX</h1>

        <h1>Counter {reduxCouter}</h1>

        <button onClick={() =>dispatch(incerment())}>+</button>
        
        <button onClick={() =>dispatch(decrement())}>-</button>

        {isLogged ? <h3>Valuble info</h3>:''}

        
    </div>
    
    
  )
}

export default App;
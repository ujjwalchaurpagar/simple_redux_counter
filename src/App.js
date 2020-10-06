import React from 'react';
import Counter from './Counter';
import Countervalue from './Countervalue';
import { createStore } from 'redux';
import {Provider} from 'react-redux';

const intialstate = {
  count: 0
};

function reducer(state = intialstate, action){
  switch(action.type){
    case "Increament":
      return{
        count: state.count + 1
      };
    case "Decreament":
      return{
        count: state.count - 1
      };
    default:
      return state;
    }
}
const store = createStore(reducer);
// store.dispatch({type:"Increment"});
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
        <Countervalue></Countervalue>
      </Provider>
    </div>
  );
}

export default App;

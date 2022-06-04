import { useDispatch, useSelector } from 'react-redux';
import { actions } from './reducers/counterSlice';
import './App.css';

function App() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleIncreaseCounter = () => {
    dispatch(actions.increment());
  }

  const handleDecreaseCounter = () => {
    dispatch(actions.decrement());
  }

  return (
    <div className="App">
      <h1>Counter APP</h1>
      <p>(with redux-toolkit)</p>
      <div>Counter Value: <h2>{counter}</h2></div>
      <button onClick={handleIncreaseCounter}>Increment</button> - <button onClick={handleDecreaseCounter}>Decrement</button>
    </div>
  );
}

export default App;

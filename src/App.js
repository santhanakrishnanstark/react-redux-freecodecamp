import { useDispatch, useSelector } from 'react-redux';
import { decreaseCounter, increaseCounter } from './actionCreators/counterActions';
import './App.css';

function App() {

  const counter = useSelector(state => state.counterReducer.counter);
  const dispatch = useDispatch();

  const handleIncreaseCounter = () => {
    dispatch(increaseCounter());
  }

  const handleDecreaseCounter = () => {
    dispatch(decreaseCounter());
  }

  return (
    <div className="App">
      <h1>Counter APP</h1>
      <div>Counter Value: <h2>{counter}</h2></div>
      <button onClick={handleIncreaseCounter}>Increment</button> - <button onClick={handleDecreaseCounter}>Decrement</button>
    </div>
  );
}

export default App;

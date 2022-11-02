import { useState } from 'react';
import Counter from './components/Counter';
import Count from './components/Count';
import BackButton from './components/BackButton';

function App() {
  // create some count state that starts at 0
  // create a button that when clicked increments the count function
  // if the count state is >= 10, display completed component that simply has an h1 that says completed.
  // In the completed component, add a button that says back that resets the count state to 0 and displays the button.

  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount(prevCount => prevCount + 1)
  };

  const subCount = () => {
    setCount(prevCount => prevCount - 1)
  };

  const resetCount = () => {
    setCount(0)
  }

  if (count < 10) {
    return (
      <div className="App">
        <Counter addCount={addCount} subCount={subCount} />
        <Count count={count} />
      </div>
    );
  }
  else {
    return (
      <BackButton resetCount={resetCount} />
    )
  };

}

export default App;

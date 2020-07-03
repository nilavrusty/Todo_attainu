import React, {useState, useMemo, useEffect, useCallback} from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState (0);
  const array = useMemo (
    () => {
      return (function () {
        if (count > 10) {
          return {val: count * 2};
        } else {
          return {val: count};
        }
      }) ();
    },
    [count]
  );
  // every time component renders array is reinitialized so if you do not have any dependency better keep it out of your component

  // const initalizeCounter = val => {
  //   setCount (val);
  // };
  const initalizeCounter = useCallback (val => {
    setCount (val);
  }, []);

  useEffect (() => {
    initalizeCounter (1);
  }, []);

  return (
    <div className="App">
      <div>
        <p>{count}</p>
        <button
          onClick={() => {
            setCount (count + 1);
          }}
        >
          Add
        </button>
        <ChildComponent array={array} initalizeCounter={initalizeCounter} />
      </div>
    </div>
  );
};

export default App;

const ChildComponent = React.memo (props => {
  useEffect (
    () => {
      props.initalizeCounter (2);
    },
    [props.initalizeCounter]
  );
  console.log ('renders', props.array);

  return <div>Child Component</div>;
});

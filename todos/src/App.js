import React, {useState, useEffect} from 'react';
import './App.css';
const initial = [0, 0, 0, 0];
const App = () => {
  const [items, setItems] = useState (0);
  const [elements, setElements] = useState (initial);

  useEffect (
    () => {
      let count = 0;
      elements.forEach (v => {
        if (v > 0) {
          count++;
        }
      });
      setItems (count);
    },
    [elements]
  );

  const add = index => {
    let copy = elements;
    copy[index] = ++copy[index];
    setElements ([...copy]);
  };

  const substract = index => {
    let copy = elements;
    copy[index] = copy[index] >= 1 ? --copy[index] : 0;
    setElements ([...copy]);
  };

  const del = index => {
    let copy = elements;
    copy.splice (index, 1);
    setElements ([...copy]);
  };

  const clear = () => {
    setElements ([0, 0, 0, 0]);
  };

  return (
    <div className="App">
      <div><span>{items}</span> items</div>
      <div className="root-action-buttons">
        <button onClick={clear}>
          <i className="fa fa-refresh" aria-hidden="true" />
        </button>
        <button
          onClick={() => window.location.reload ()}
          disabled={elements.length ? true : false}
        >
          <i className="fa fa-recycle" aria-hidden="true" />
        </button>

      </div>
      <div>
        {elements && elements.length
          ? elements.map ((v, i) => (
              <div className="row" key={i}>
                <span>{v === 0 ? 'Zero' : v}</span>
                <button onClick={() => add (i)}>
                  <i className="fa fa-plus-circle" aria-hidden="true" />
                </button>

                <button onClick={() => substract (i)}>
                  <i className="fa fa-minus-circle" aria-hidden="true" />
                </button>
                <button onClick={() => del (i)}>
                  <i className="fa fa-trash-o" aria-hidden="true" />
                </button>
              </div>
            ))
          : null}
      </div>

    </div>
  );
};

export default App;

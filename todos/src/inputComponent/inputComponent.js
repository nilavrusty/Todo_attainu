import React, {useContext, useState, useEffect} from 'react';
import {GlobalObj} from '../globalWrapper';

export default function InputComponent () {
  const globalobj = useContext (GlobalObj);
  const {data, handlers} = globalobj;

  const [localValue, setLocalValue] = useState ('');
  const [localCheck, setLocalCheck] = useState ([false, false, false, false]);

  useEffect (
    () => {
      setLocalValue (data.value);
      setLocalCheck ([...data.check]);
    },
    [data.value, data.check]
  );

  const changeCheck = i => {
    let copy = localCheck;
    copy[i] = !copy[i];
    setLocalCheck ([...copy]);
  };

  return (
    <div>
      <input
        onChange={e => {
          //   handlers.change (e.target.value);
          setLocalValue (e.target.value);
        }}
        value={
          //   data.value
          localValue
        }
        type="text"
      />
      <div>
        {localCheck.map ((v, i) => (
          <input
            key={i}
            type="checkbox"
            checked={v}
            onChange={() => changeCheck (i)}
          />
        ))}
      </div>

      <button
        onClick={() => {
          handlers.change (localValue);
          handlers.changeCheck (localCheck);
        }}
      >
        Submit
      </button>
    </div>
  );
}

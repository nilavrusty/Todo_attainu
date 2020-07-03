import React, {useContext} from 'react';
import {ContextGlobal} from '../Apps';

export default function LeftSide () {
  const data1 = useContext (ContextGlobal);
  const {data, handlers} = data1;

  return (
    <div className="leftside">
      <input onChange={handlers.change} value={data.data.values} type="text" />
    </div>
  );
}

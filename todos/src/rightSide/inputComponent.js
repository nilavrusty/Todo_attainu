import React, {useContext} from 'react';
import {ContextGlobal} from '../Apps';

export default function InputComponent () {
  const data1 = useContext (ContextGlobal);
  const {data, handlers} = data1;
  return (
    <input onChange={handlers.change} value={data.data.values} type="text" />
  );
}

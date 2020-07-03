import React, {useContext} from 'react';
import {ContextGlobal} from '../Apps';
import InputComponent from './inputComponent';

export default function RightSide () {
  return (
    <div className="righttside">
      <InputComponent />
    </div>
  );
}

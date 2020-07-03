import React, {useState} from 'react';
import GlobalWrapper from './globalWrapper';
import Left from './Left/left';
import Right from './right/right';
import LeftSide from './leftSide/leftSide';
import RightSide from './rightSide/rightSide';
import './App.css';

export const ContextGlobal = React.createContext ();

export default function Apps () {
  const [data, setData] = useState ({
    values: '',
  });
  return (
    <GlobalWrapper>
      <div className="App">
        <Left />
        <Right />
      </div>
    </GlobalWrapper>
  );
  //   const [value, setValue] = useState ('');

  //   const change = e => {
  //     setData ({...data, values: e.target.value});
  //   };

  //   return (
  //     <ContextGlobal.Provider
  //       value={
  //           {
  //         data: {
  //           data,
  //         },
  //         handlers: {
  //           change,
  //         },
  //       }
  //     }
  //     >
  //       <div className="App">
  //         <LeftSide prop={{wyfuew:'ywtfdyed'}} />
  //         <RightSide />
  //       </div>
  //     </ContextGlobal.Provider>
  //   );
}

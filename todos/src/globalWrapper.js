import React, {useState} from 'react';

export const GlobalObj = React.createContext ();

const GlobalWrapper = props => {
  const [value, setValue] = useState (''); //can have {}
  const [check, setCheck] = useState ([false, false, false, false]);

  const change = val => {
    setValue (val);
  };

  const changeCheck = data => {
    setCheck ([...data]);
  };

  return (
    <GlobalObj.Provider
      value={{
        data: {
          value,
          check,
        },
        handlers: {
          change,
          changeCheck,
        },
      }}
    >
      {props.children}
    </GlobalObj.Provider>
  );
};
export default GlobalWrapper;

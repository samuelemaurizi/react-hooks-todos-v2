import { useState, useEffect } from 'react';

function UseLocalStorageState(key, defaultVal) {
  // set state based off of value in localStorage
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (err) {
      val = defaultVal;
    }

    return val;
  });

  // update localStorage when state change
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
    // eslint-disable-next-line
  }, [state]);

  return [state, setState];
}

export default UseLocalStorageState;

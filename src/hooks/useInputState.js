import { useState } from 'react';

function HandleForm(init) {
  const [value, setValue] = useState(init);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return [value, handleChange, reset];
}

export default HandleForm;

import {ChangeEvent, useState} from "react";


const useInput = (initialVal: string) => {
  const [val, setVal] = useState(initialVal);

  const onChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setVal(e.target.value);
  };

  const reset = () => {
    setVal(initialVal);
  };

  return {
    val,
    onChange,
    reset,
  };
};
export default useInput;
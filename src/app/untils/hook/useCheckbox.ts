import {ChangeEvent, useState} from "react";


const useCheckBox = (initialVal: boolean) => {
  const [checked, setChecked] = useState(initialVal);

  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };


  return {
    checked,
    onChange,
  };
};
export default useCheckBox;
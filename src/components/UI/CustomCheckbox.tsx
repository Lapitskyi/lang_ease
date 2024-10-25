import React, {ChangeEvent, FC, ReactElement} from 'react';


interface CustomCheckboxProps {
  label?: string,
  toggle:boolean
  onChange:(e: ChangeEvent<HTMLInputElement>) => void
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({
  toggle,
  label = '',
  onChange
}): ReactElement => {
  return (
    <>


      <div className="flex items-start mb-4">
        <input
          id="default-checkbox"
          onChange={onChange}
          type="checkbox"
          checked={toggle}
          className=' peer relative appearance-none shrink-0 w-4 h-4 border border-silver rounded-sm bg-white
        focus:no-underline
        checked:bg-navy_blue checked:border-none'
        />
        <svg
          className="absolute w-4 h-4 pointer-events-none hidden peer-checked:block stroke-white outline-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <label htmlFor="default-checkbox"
               className={`${toggle ? 'text-dark' : 'text-silver'} ms-2 text-sm font-medium `}>{label}</label>
      </div>
    </>

  );
};

export default CustomCheckbox;
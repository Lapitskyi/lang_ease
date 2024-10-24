'use client';

import React, {ChangeEvent, FC, ReactElement, useState} from 'react';
import Image from "next/image";


interface CustomInputProps {
  id?: string,
  label?: string,
  type?: string,
  placeholder?: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  val: string,
  error?: boolean,
}

const CustomInput: FC<CustomInputProps> = (
  {id, label, type = 'text', placeholder, onChange, val, error}
): ReactElement => {
  const [showPassword, setShowPassword] = useState(false)
  const handleShowPassword = () => {
    type === 'password' && setShowPassword(!showPassword)
  }
  return (
    <div className='flex flex-col gap-y-2 w-full'>

      {label && <label className='text-raven text-sm font-normal'
                       htmlFor={label || 'inp'}> {label}</label>}
      <div className='w-full relative'>
        <input
          className={`${type === 'password' ? 'pl-3.5 pr-10' : 'px-3.5'} w-full border border-silver rounded-xl  py-3 text-base font-normal`}
          id={id}
          type={type === 'password' && showPassword ? 'text' : type}
          placeholder={placeholder}
          name={label?.toLowerCase() || ''}
          value={val}
          onChange={onChange}
        />

        {type === 'password' &&
          <Image onClick={handleShowPassword}
                 className='absolute top-1/2 right-4 -translate-y-1/2' width={24} height={24}
                 src={showPassword ? '/icons/eye.svg' : '/icons/hide.svg'} alt=''/>}

        {error && <p
          className="absolute px-1 bg-white -bottom-2 right-5 text-end font-normal text-xs text-red-800">Input
          filed can't be empty!</p>}
      </div>

    </div>
  );
};

export default CustomInput;
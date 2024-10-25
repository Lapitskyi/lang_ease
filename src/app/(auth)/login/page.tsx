'use client';

import React, {ChangeEvent, FC, ReactElement, useEffect, useState} from 'react';
import CustomInput from "@/components/UI/CustomInput";
import Image from "next/image";
import {useRouter} from "next/navigation";

const Page: FC = (): ReactElement => {

    const router = useRouter()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<Record<string, boolean>>({
      email: false,
      password: false
    })

    const handleChange = (item: ChangeEvent<HTMLInputElement>) => {
      item.preventDefault()
      const {name, value, type} = item?.target
      type === 'password'
        ? setPassword(value)
        : setEmail(value)

      name && setError({
        ...error,
        [name]: false
      })
    }
    const validateForm = () => {
      setError({
        email: email === '',
        password: password === ''
      })
    }

    const sendLogin = () => {
      validateForm()
      if (!error.email && !error.password && email && password) {
        const data = {
          email,
          password
        }
        console.log(data)
      }
    }


    return (
      <div className='flex flex-col justify-center items-center w-full h-full mx-auto '>

        <div
          className='flex flex-col items-start gap-3 sm:gap-6 shadow-md w-full max-w-[500px] p-4 sm:p-8 bg-white rounded-xl'>

          <h2 className='text-dark text-2xl font-semibold text-center w-full'>Sign in</h2>

          <button
            className='flex items-center justify-center gap-x-3 w-full border border-silver rounded-xl px-3 py-3 hover:bg-silver'>
            <Image width={24} height={24} src='images/google.svg' alt='G'/>
            <p className='text-base font-normal text-dark tracking-[0.5px]'>Sign in with Google</p>
          </button>

          <div className="inline-flex items-center justify-between w-full h-[24px]">
            <hr className="w-full h-px border-0 bg-silver"/>
            <span
              className="absolute px-3 -translate-x-1/2 bg-white left-1/2 text-raven text-base font-normal">or</span>
          </div>
          <CustomInput label='Email' val={email} error={error.email}
                       onChange={(v) => handleChange(v)}/>
          <CustomInput label='Password' type='password' val={password} error={error.password}
                       onChange={(v) => handleChange(v)}/>
          <button className='text-navy_blue font-medium text-sm'
                  onClick={() => router.push('/reset')}>Forgot Password?
          </button>
          <button
            onClick={() => sendLogin()}
            className='w-full rounded-xl bg-dark px-3.5 text-white py-3 text-base font-normal hover:bg-silver hover:text-dark'> Log
            in
          </button>
        </div>

        <div className='mt-6 sm:mt-10 text-base leading-[19.36px] font-inter'>Don`t have an
          account? <button className='text-navy_blue'
                           onClick={() => router.push('/registration')}>Sing Up</button></div>


      </div>
    );
  }
;

export default Page;
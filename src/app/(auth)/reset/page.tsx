'use client';

import React, {ChangeEvent, FC, ReactElement, useEffect, useState} from 'react';
import CustomInput from "@/components/UI/CustomInput";
import {useRouter} from "next/navigation";
import Image from "next/image";
import useInput from "@/app/untils/hook/useInput";
import Loader from "@/components/UI/Loader";

const Page: FC = (): ReactElement => {
  const router = useRouter();
  const [email, setEmail] = useState('')
  const [errorEmail, setError]=useState(false)
  const password = useInput('');
  const confirmPassword = useInput('')
  const [step, setStep] = useState(0)
  const [loader, setLoader] = useState(false)

  const handleChange = (item: ChangeEvent<HTMLInputElement>) => {
    item.preventDefault()
    const {value} = item?.target
    setEmail(value)

    value !== '' && setError(false)
  }

  const submitEmail = () => {
    if(email ===''){
      setError(true)
      setLoader(false)
      setStep(0)
      return
    }
    setLoader(true)
  }
  const submitPassword = () =>{
    console.log("Password Change:",{
      password: password.val,
      confirmPassword: confirmPassword.val
    })
  }

  useEffect(() => {
    if (loader) {
      const timeoutId = setTimeout(() => {
        setLoader(false)
        setStep(1)
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [loader]);

  return (
    <>
      {step === 0
        ? <div className='flex flex-col justify-center items-center w-full h-full mx-auto '>

          <div
            className='flex flex-col items-start gap-3 sm:gap-6 shadow-md w-full max-w-[500px] p-4 sm:p-8 bg-white  rounded-[20px]'>

            <h2 className='text-dark text-2xl font-semibold text-center w-full'>Reset Password</h2>

            <p className='text-base font-inter font-normal text-raven text-center'>Please submit
              your
              registered email address and we’ll send you an email with your password reset
              link!</p>

            <CustomInput label='Email' val={email} error={errorEmail}
                         onChange={(v) => handleChange(v)}/>

            <div className='flex gap-2 items-center justify-between w-full'>
              <button
                onClick={() => router.push('/login')}
                className='w-full rounded-lg bg-white border border-silver px-3.5 text-dark py-3 text-base font-normal flex items-center gap-2 justify-center'>
                <Image width={20} height={20} src='icons/arrows.svg' alt=''/>
                Go back
              </button>

              {loader
                ? <Loader/>
                : <button
                  disabled={loader}
                  onClick={submitEmail}
                  className='w-full rounded-lg bg-dark px-3.5 text-white py-3 text-base font-normal hover:bg-silver hover:text-dark hover:disabled:none'>
                  Submit
                </button>
              }
            </div>
          </div>
        </div>

        : <div className='flex flex-col justify-center items-center w-full h-full mx-auto '>

          <div
            className='flex flex-col items-start gap-3 sm:gap-6 shadow-md w-full max-w-[500px] p-4 sm:p-8 bg-white  rounded-[20px]'>

            <h2 className='text-dark text-2xl font-semibold text-center w-full'>Reset Password</h2>

            <p className='text-sm font-inter font-normal text-raven text-center'>Please submit
              your
              registered email address and we’ll send you an email with your password reset
              link!</p>

            <CustomInput label='New Password' val={password.val} type={'password'}
                         onChange={(v) => password.onChange(v)}/>
            <CustomInput label='Confirm Password' val={confirmPassword.val} type={'password'}
                         onChange={(v) => confirmPassword.onChange(v)}/>

            <button
              onClick={submitPassword}
              className='w-full rounded-lg bg-dark px-3.5 text-white py-3 text-base font-normal hover:bg-silver hover:text-dark hover:disabled:none'>
              Submit
            </button>


          </div>


        </div>


      }
    </>

  )
    ;
};

export default Page;
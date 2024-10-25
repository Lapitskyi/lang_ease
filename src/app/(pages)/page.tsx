'use client';

import React, {FC, ReactElement} from "react";
import {useRouter} from "next/navigation";

const Home: FC = (): ReactElement => {

  const router = useRouter()

  const routers = [
    {id: 1, name: 'Login', path: '/login'},
    {id: 2, name: 'Registration', path: '/registration'},
    {id: 3, name: 'Reset', path: '/reset'},
  ]

  return (
    <div className='flex flex-col gap-y-4'>
      {routers.map((btn)=> (
        <button key={btn.id}
                onClick={() => router.push(btn.path)}
                className='w-full rounded-lg bg-white border border-silver px-3.5 text-dark py-3 text-base font-normal flex items-center gap-2 justify-center'>
          {btn.name}
        </button>
      ))}
    </div>


  )
}


export default Home;
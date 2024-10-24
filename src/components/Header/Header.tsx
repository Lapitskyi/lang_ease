import React, {FC, ReactElement} from 'react';
import Logo from "@/components/Logo/Logo";

const Header: FC = (): ReactElement => {
  return (
    <div className='px-6 py-4 sm:py-6'>
      <Logo/>
    </div>
  );
};

export default Header;
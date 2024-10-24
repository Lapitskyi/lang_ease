import React, {FC, ReactElement} from 'react';
import Image from "next/image";

const Logo: FC = (): ReactElement => {
  return (
    <Image src='images/header.svg' width={256} height={48}  alt='LangEase'/>

  );
};

export default Logo;
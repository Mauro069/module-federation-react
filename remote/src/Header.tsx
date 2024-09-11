// Header.tsx
import React, { FC } from 'react';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return <div className='p-5 text-3xl text-center text-white bg-blue-600'>Soy el remote 1 en React ⚛️</div>;
};

export default Header;

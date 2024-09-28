'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@beatrizsantiago/money-flow';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <div className="w-full h-24">
      <nav className="fixed top-0 w-full h-24 p-5 bg-black flex justify-center items-center z-50">
        <div className="w-full max-w-6xl justify-between items-center hidden md:flex">
          <div className="flex justify-center items-center">
            <div className="hidden lg:block">
              <Image
                src="/images/green_logo.svg"
                alt="Bytebank logo"
                width={145}
                height={32}
                style={{ marginRight: '48px' }}
              />
            </div>
            <div className="block lg:hidden">
              <Image
                src="/images/small_logo.svg"
                alt="Bytebank logo"
                width={26}
                height={26}
                style={{ marginRight: '16px' }}
              />
            </div>
            <p className="text-secondary-main font-semibold mx-3 cursor-pointer leading-none">
              Sobre
            </p>
            <p className="text-secondary-main font-semibold mx-3 cursor-pointer leading-none">
              Serviços
            </p>
          </div>

          <div className="flex justify-center items-center">
            <Button text="Abrir minha conta" color="secondary" className="mr-4" />
            <Button text="Já tenho conta" color="secondary" outlined />
          </div>
        </div>

        <div className="w-full flex justify-between md:hidden p-2">
          <MenuOutlined className="text-secondary-main font-semibold text-xl" onClick={toggleMenu} />

          {openMenu && (
            <div className="absolute bg-black p-3 left-0 top-0">
              <div className="flex justify-end">
                <CloseOutlined className="text-secondary-main text-lg" onClick={toggleMenu} />
              </div>
              <ul className="mx-2 mb-2 text-center text-white">
                <li className="p-4 border-b-2 border-secondary-main border-solid">
                  Sobre
                </li>
                <li className="p-4">
                  Serviços
                </li>
              </ul>
            </div>
          )}

          <Image
            src="/images/green_logo.svg"
            alt="Bytebank logo"
            width={145}
            height={32}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

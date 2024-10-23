'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CloseOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'money-flow';

const Header = () => {
  const router = useRouter();

  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <div className="w-full h-24">
      <nav className="fixed top-0 w-full h-24 p-5 bg-primary-main flex justify-center items-center z-50">
        <div className="w-full max-w-[1200px] flex items-center justify-between md:justify-end">
          <div className="block md:hidden">
            <MenuOutlined className="text-secondary-main font-semibold text-xl" onClick={toggleMenu} />

            {openMenu && (
              <div className="absolute bg-secondary-light p-3 left-0 top-0">
                <div className="flex justify-end">
                  <CloseOutlined className="text-secondary-main text-lg" onClick={toggleMenu} />
                </div>
                <Menu
                  activeIndex={0}
                  items={[
                    { title: 'Início', onClick: () => router.push('/dashboard') },
                    { title: 'Transferências', onClick: () => router.push('/transferencias') },
                    { title: 'Investimentos', onClick: () => router.push('/investimentos') },
                    { title: 'Outros serviços', onClick: () => router.push('/outros') },
                  ]}
                />
              </div>
            )}
          </div>

          <div className="flex items-center">
            <p className="text-white font-semibold text-sm mr-4 md:mr-8">Harry Potter</p>
            <div className="w-10 h-10 border-2 border-secondary-main rounded-3xl flex items-center justify-center">
              <UserOutlined className="text-secondary-main text-2xl font-light" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

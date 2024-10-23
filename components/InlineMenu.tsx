'use client';

import { Menu } from 'money-flow';
import { useRouter } from 'next/navigation';

const InlineMenu = () => {
  const router = useRouter();

  return (
    <div className="hidden md:flex justify-center lg:hidden w-full">
      <Menu
        activeIndex={0}
        items={[
          { title: 'Início', onClick: () => router.push('/dashboard') },
          { title: 'Transferências', onClick: () => router.push('/transferencias') },
          { title: 'Investimentos', onClick: () => router.push('/investimentos') },
          { title: 'Outros serviços', onClick: () => router.push('/outros') },
        ]}
        inline
      />
    </div>
  );
};

export default InlineMenu;

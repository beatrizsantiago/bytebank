'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Menu } from 'money-flow';

type Props = {
  inline?: boolean;
}

const activeIndex:{[key: string]:number} = {
  '/dashboard': 0,
  '/transferencias': 1,
  '/investimentos': 2,
  '/outros': 3,
};

const MenuComponent = ({ inline = false }:Props) => {
  const router = useRouter();

  const pathname = usePathname();

  return (
    <Menu
      activeIndex={activeIndex[pathname]}
      items={[
        { title: 'Início', onClick: () => router.push('/dashboard') },
        { title: 'Transferências', onClick: () => router.push('/transferencias') },
        { title: 'Investimentos', onClick: () => router.push('/investimentos') },
        { title: 'Outros serviços', onClick: () => router.push('/outros') },
      ]}
      inline={inline}
    />
  );
};

export default MenuComponent;

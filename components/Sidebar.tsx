'use client';

import { Menu } from '@beatrizsantiago/money-flow';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="hidden w-[180px] min-h-[calc(100vh-144px)] bg-white rounded-lg p-6 lg:block">
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
  );
};

export default Sidebar;

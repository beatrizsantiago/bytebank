import Image from 'next/image';
import { Button } from '@beatrizsantiago/money-flow';

const Navbar = () => (
  <div className="w-full h-24">
    <nav className="fixed top-0 w-full h-24 p-5 bg-black flex justify-center items-center">
      <div className="w-full max-w-6xl flex justify-between items-center">
        <div className="flex justify-center items-center">
          <Image
            src="/images/green_logo.svg"
            alt="Bytebank logo"
            width={145}
            height={32}
            style={{ marginRight: '48px' }}
          />
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
    </nav>
  </div>
);

export default Navbar;

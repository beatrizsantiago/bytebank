import { Input, Select, Button } from '@beatrizsantiago/money-flow';
import Image from 'next/image';

const NewTransaction = ():JSX.Element => (
  <div className="p-8 bg-gray-medium rounded-lg mt-6 relative h-[630px] md:h-[478px]">
    <Image
      src="/images/pixels_2.svg"
      alt="Pixels"
      width={180}
      height={177}
      className="absolute top-0 xs:left-0 md:right-0 z-0"
    />

    <Image
      src="/images/pixels_2.svg"
      alt="Pixels"
      width={180}
      height={177}
      className="absolute bottom-0 right-0 md:left-0 rotate-180 z-0"
    />

    <Image
      src="/images/woman_with_credit_card.svg"
      alt="Mulher com cartão de crédito"
      width={327}
      height={230}
      className="absolute bottom-8 right-8 z-0"
    />

    <div className="w-full flex flex-col items-center z-10 relative md:items-start">
      <h2 className="font-bold text-lg text-primary-light mb-8">
        Nova transação
      </h2>

      <div className="min-w-[280px] md:min-w-[350px] mb-6">
        <Select
          placeholder="Selecione o tipo de transação"
          options={[
            {
              label: 'Transferência',
              value: 'TRANSFER',
            },
            {
              label: 'Depósito',
              value: 'DEPOSIT',
            },
          ]}
          selected={null}
          onChange={() => {}}
        />
      </div>

      <p className="font-semibold text-primary-light mb-1">
        Valor
      </p>
      <Input placeholder="0,00" className="w-full max-w-[250px] mb-6"  />

      <Button
        text="Concluir transação"
        className="max-w-[250px]"
      />
    </div>
  </div>
);

export default NewTransaction;

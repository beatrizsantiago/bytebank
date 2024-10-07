import { useState } from 'react';
import { Input, Select, Button } from '@beatrizsantiago/money-flow';
import { toast } from 'react-toastify';
import Image from 'next/image';

import { TransactionService, TransactionData, KindType } from '../../services/transactions';

type OptionType = {
  label: string;
  value: string;
};

const NewTransaction = ():JSX.Element => {
  const [kind, setKind] = useState<OptionType | null>(null)
  const [value, setValue] = useState('');
  const [errors, setErrors] = useState<{ [key:string]: string } | null>(null)

  const onAddTransactionClick = async () => {
    const floatValue = value ? parseFloat(value.replace(',', '.')) : 0;

    if (!kind) {
      setErrors({ kind: 'Selecione o tipo de transação' });
      return;
    };

    if (floatValue <= 0) {
      setErrors({ value: 'O valor da transação deve ser maior que zero' });
      return;
    };

    setErrors(null);

    const transactionService = new TransactionService();

    try {
      await transactionService.add(
        new TransactionData(kind.value as KindType, floatValue)
      );

      toast.success('Transação realizada com sucesso!', {
        onClose: () => window.location.reload(),
      });

      setKind(null);
      setValue('');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Erro ao realizar transação');
      }
    };
  };

  return (
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
            selected={kind}
            onChange={(opt) => setKind(opt)}
          />
          {errors?.kind && <p className="text-red-500 text-sm">{errors.kind}</p>}
        </div>

        <p className="font-semibold text-primary-light mb-1">
          Valor
        </p>
        <div className="max-w-[250px] mb-6">
          <Input
            placeholder="0,00"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            error={!!errors?.value}
            className="w-full"
            type="number"
          />
          {errors?.value && <p className="text-red-500 text-sm">{errors.value}</p>}
        </div>

        <Button
          text="Concluir transação"
          className="max-w-[250px]"
          onClick={onAddTransactionClick}
        />
      </div>
    </div>
  );
};

export default NewTransaction;

'use client';

import { StatementItem } from '@beatrizsantiago/money-flow';

const StatementList = () => (
  <div className="flex flex-col items-start w-full min-h-[calc(100vh-144px)] bg-white rounded-lg lg:w-[285px] sm:items-center lg:items-start">
    <p className="text-left sm:text-center font-bold text-lg mx-6 mt-6 lg:text-left">
      Extrato
    </p>
    
    <StatementItem
      date="2022-01-01"
      value={-100}
      kind="TRANSFER"
    />
    <StatementItem
      date="2022-01-01"
      value={100}
      kind="DEPOSIT"
    />
  </div>
);

export default StatementList;

export type KindType = 'DEPOSIT' | 'TRANSFER';

export interface ITransactionData {
  _id: string;
  kind: KindType;
  value: number;
  date: string;
};

export interface ITransactionList {
  data: ITransactionData[];
  totalPages: number;
  currentPage: number;
};

export class TransactionData {
  kind: KindType;
  value: number;

  constructor(kind: KindType = 'DEPOSIT', value: number = 0) {
    this.kind = kind;
    this.value = value;
  };
};

export class TransactionService {
  private url: string;

  constructor() {
    this.url = `${process.env.NEXT_PUBLIC_API_URL}/transacoes`;
  };

  async add(params:TransactionData): Promise<void> {
    
    
    const res = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error);
    };

    return;
  };

  async list(page?:number, limit?:number): Promise<ITransactionList> {
    const searchParams = new URLSearchParams({
      'page': `${page || 1}`,
      'limit': `${limit || 6}`,
    });
    
    const res = await fetch(`${this.url}?${searchParams}`);

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error);
    };

    const data: ITransactionList = await res.json();

    return data;
  };

  async update(id: string, params: TransactionData): Promise<void> {
    const res = await fetch(`${this.url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error);
    };

    return;
  };

  async remove(id: string): Promise<void> {
    const res = await fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error);
    };

    return;
  };
};

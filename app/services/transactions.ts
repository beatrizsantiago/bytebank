export type KindType = 'DEPOSIT' | 'TRANSFER';

export interface ITransactionData {
  _id: string;
  kind: KindType;
  value: number;
  date: string;
}

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

  async list(): Promise<ITransactionData[]> {
    const res = await fetch(this.url);

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error);
    };

    const data: ITransactionData[] = await res.json();

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

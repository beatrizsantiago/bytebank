export interface IDashboardData {
  totalValue: number;
}

export class DashboardService {
  private url: string;

  constructor() {
    this.url = `${process.env.NEXT_PUBLIC_API_URL}/dashboard`;
  };

  async getData(): Promise<IDashboardData> {
    const res = await fetch(this.url);

    if (!res.ok) {
      throw new Error('Erro ao buscar os dados');
    };

    const data: IDashboardData = await res.json();

    return data;
  };
};

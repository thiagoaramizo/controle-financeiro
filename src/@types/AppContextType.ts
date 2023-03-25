import { TransactionType } from './TransactionType'

export interface AppContextType {
  transactions: TransactionType[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (
    description: string,
    price: number,
    category: string,
    type: 'income' | 'outcome',
  ) => Promise<void>
}

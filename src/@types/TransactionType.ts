export interface TransactionType {
  id: string
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string | Date
}

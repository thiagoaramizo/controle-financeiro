import { createContext, ReactNode, useEffect, useState } from 'react'
import { AppContextType } from '../@types/AppContextType'
import { TransactionType } from '../@types/TransactionType'
import { api } from '../lib/axios'

export const AppContext = createContext({} as AppContextType)

interface AppContextProviderProps {
  children: ReactNode
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setTransactions(response.data)
  }

  async function createTransaction(
    description: string,
    price: number,
    category: string,
    type: 'income' | 'outcome',
  ) {
    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date().toISOString(),
    })
    setTransactions((state) => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <AppContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

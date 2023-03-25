import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

export function useSumary() {
  const { transactions } = useContext(AppContext)

  const sumary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }
      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return sumary
}

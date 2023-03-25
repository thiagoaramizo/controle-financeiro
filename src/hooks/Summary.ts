import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'
import { AppContext } from '../contexts/AppContext'

export function useSumary() {
  const transactions = useContextSelector(AppContext, (context) => {
    return context.transactions
  })

  const sumary = useMemo(() => {
    return transactions.reduce(
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
  }, [transactions])

  return sumary
}

import styled from 'styled-components'
import { useContextSelector } from 'use-context-selector'
import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { AppContext } from '../../contexts/AppContext'
import { SearchForm } from './components/SearchForm'
import { Summary } from './components/Summary'
import { TransactionItemList } from './components/TrasactionItemList'

export function Transactions() {
  const transactions = useContextSelector(AppContext, (context) => {
    return context.transactions
  })

  return (
    <>
      <Header />
      <Container>
        <TransactionsHeader>
          <Summary />
        </TransactionsHeader>

        <SearchForm />

        <TransactionsList>
          <tbody>
            {transactions.map((trasaction) => (
              <TransactionItemList
                key={trasaction.id}
                name={trasaction.description}
                type={trasaction.type}
                value={trasaction.price}
                category={trasaction.category}
                createdAt={new Date(trasaction.createdAt)}
              />
            ))}
          </tbody>
        </TransactionsList>
      </Container>
    </>
  )
}

const TransactionsHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const TransactionsList = styled.table`
  margin-top: 1.5rem;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
`

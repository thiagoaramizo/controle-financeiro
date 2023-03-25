import { MagnifyingGlass } from '@phosphor-icons/react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '../../../components/Button'
import { AppContext } from '../../../contexts/AppContext'
import { useContextSelector } from 'use-context-selector'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormsInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(AppContext, (context) => {
    return context.fetchTransactions
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormsInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormsInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormWrapper onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <Button type="submit" variant="outline-primary" disabled={isSubmitting}>
        <MagnifyingGlass size={20} /> Buscar
      </Button>
    </SearchFormWrapper>
  )
}

const SearchFormWrapper = styled.form`
  margin-top: 4rem;
  display: flex;
  gap: 1rem;

  & input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }
`

import styled from 'styled-components'
import { dateFormatter, priceFormatter } from '../../../utils/formatter'

interface TransactionItemListProps {
  name: string
  value: number
  type: 'income' | 'outcome'
  category: string
  createdAt: Date
}

export function TransactionItemList({
  name,
  value,
  type,
  category,
  createdAt,
}: TransactionItemListProps) {
  return (
    <TransactionItemListWrapper>
      <td width="50%">{name}</td>
      <td className={type === 'outcome' ? 'negative' : 'positive'}>
        {' '}
        {type === 'outcome' && '- '} {priceFormatter.format(value)}
      </td>
      <td>{category}</td>
      <td>{dateFormatter.format(createdAt)}</td>
    </TransactionItemListWrapper>
  )
}

const TransactionItemListWrapper = styled.tr`
  & td {
    padding: 1.25rem 2rem;
    background-color: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  & td.negative {
    color: ${(props) => props.theme['red-300']};
    text-align: right;
  }

  & td.positive {
    color: ${(props) => props.theme['green-300']};
    text-align: right;
  }
`

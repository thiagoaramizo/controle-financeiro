import {
  ArrowCircleDown,
  ArrowCircleUp,
  PiggyBank,
} from '@phosphor-icons/react'
import styled from 'styled-components'
import { useSumary } from '../../../hooks/Summary'
import { priceFormatter } from '../../../utils/formatter'
import { SummaryCard } from './SummaryCard'

export function Summary() {
  const summary = useSumary()

  return (
    <SummaryWrapper>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} />
        </header>
        <strong>R$ {priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="primary">
        <header>
          <span>Total</span>
          <PiggyBank size={32} />
        </header>
        <strong>R$ {priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryWrapper>
  )
}

const SummaryWrapper = styled.section`
  width: 100%;
  margin-top: -5rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`

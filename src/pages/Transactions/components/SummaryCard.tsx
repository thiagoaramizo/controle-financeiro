import styled, { css } from 'styled-components'

interface SummaryCardProps {
  variant?: 'primary' | 'secondary'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  padding: 2rem;
  background-color: ${(props) => props.theme['gray-600']};
  border-radius: 6px;

  & header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & span {
      color: ${(props) => props.theme['gray-300']};
    }
  }

  & strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === 'primary' &&
    css`
      background-color: ${props.theme['primary-dark']};

      & header > span {
        color: ${props.theme['gray-100']};
      }
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background-color: ${props.theme['secondary-dark']};
    `}
`

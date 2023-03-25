import styled, { css } from 'styled-components'

interface ButtonProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline'
}

export const Button = styled.button<ButtonProps>`
  border: none;
  background-color: ${(props) => props.theme['gray-500']};
  color: ${(props) => props.theme['gray-700']};
  font-weight: bold;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.5s;

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['gray-400']};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${(props) =>
    props.variant === 'primary' &&
    css`
      background-color: ${props.theme['primary-dark']};
      color: ${(props) => props.theme.white};

      &:not(:disabled):hover {
        background-color: ${(props) => props.theme.primary};
      }
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background-color: ${props.theme.secondary};
      color: ${(props) => props.theme.white};
      &:not(:disabled):hover {
        background-color: ${(props) => props.theme['secondary-light']};
      }
    `}

    ${(props) =>
    props.variant === 'outline' &&
    css`
      background-color: transparent;
      border: 2px solid ${props.theme['gray-300']};
      color: ${(props) => props.theme['gray-300']};
      &:not(:disabled):hover {
        background-color: transparent;
        border-color: ${(props) => props.theme['gray-100']};
        color: ${(props) => props.theme['gray-100']};
      }
    `}
    
    ${(props) =>
    props.variant === 'outline-primary' &&
    css`
      background-color: transparent;
      border: 2px solid ${props.theme.primary};
      color: ${(props) => props.theme.primary};
      &:not(:disabled):hover {
        background-color: transparent;
        border-color: ${(props) => props.theme['primary-dark']};
        color: ${(props) => props.theme['primary-dark']};
      }
    `}

    ${(props) =>
    props.variant === 'outline-secondary' &&
    css`
      background-color: transparent;
      border: 2px solid ${props.theme.secondary};
      color: ${(props) => props.theme.secondary};
      &:not(:disabled):hover {
        background-color: transparent;
        border-color: ${(props) => props.theme['secondary-light']};
        color: ${(props) => props.theme['secondary-light']};
      }
    `}
`

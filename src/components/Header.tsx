import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

import { Button } from './Button'
import { Container } from './Container'
import logo from '../assets/logo.svg'
import { NewTransactionModal } from './NewTransactionModal'

export function Header() {
  return (
    <HeaderRow>
      <HeaderWrapper>
        <img src={logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button variant="primary">Nova transação</Button>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderWrapper>
    </HeaderRow>
  )
}

const HeaderRow = styled.header`
  width: 100vw;
  padding: 2rem 0 7.5rem;
  background-color: ${(props) => props.theme['gray-900']};
`

const HeaderWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & img {
    width: 120px;
  }
`

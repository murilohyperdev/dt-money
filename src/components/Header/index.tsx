import * as Dialog from '@radix-ui/react-dialog'

import * as S from './styles'
import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactModal'

export default function Header(){
    return (
        <S.HeaderContainer>
            <S.HeaderContent>
                <img src={logoImg} alt="" />
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <S.NewTransactionButton>Nova Transação</S.NewTransactionButton>
                    </Dialog.Trigger>
                    <NewTransactionModal />
                </Dialog.Root>
            </S.HeaderContent>
        </S.HeaderContainer>
    )
}
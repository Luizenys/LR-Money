import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/coin.png'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <div>
                    <img src={logoImg} width={50} alt="" /><span>LR Money</span>
                </div>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <Dialog.Portal>
                        <Dialog.Overlay />

                        <Dialog.Content>
                            <Dialog.Title>Nova transação</Dialog.Title>

                            <Dialog.Close />
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}
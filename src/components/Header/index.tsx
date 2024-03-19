import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import logoImg from '../../assets/coin.png'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} width={50} alt="" />
                <NewTransactionButton>Nova Transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}
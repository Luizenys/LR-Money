import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import logoImg from '../../assets/coin.png'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <div>
                    <img src={logoImg} width={50} alt="" /><span>LR Money</span>
                </div>
                <NewTransactionButton>Nova Transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react"
import { SummaryCard, SummaryContainer } from "./styles"

export function Summary() {
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#8E00FF" />
                </header>

                <strong>R$ 17.400,00</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#FEE337" />
                </header>

                <strong>R$ 17.400,00</strong>
            </SummaryCard>

            <SummaryCard variant="purple">
                <header>
                    <span>Entradas</span>
                    <CurrencyDollar size={32} color="#fff" />
                </header>

                <strong>R$ 17.400,00</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}
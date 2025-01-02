import Header from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SeachForm";
import * as S from './styles'

export default function Transactions(){
    return (
        <div>
            <Header />
            <Summary />
            <S.TransactionContainer>
            <SearchForm />
            <S.TransactionTable>
                <tbody>
                    <tr>
                        <td width="50%">Desenvolvimento de site</td>
                        <td>
                            <S.PriceHightLight variant="income">R$:12.000,00</S.PriceHightLight></td>
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tr>
                    <tr>
                        <td width="50%">MC Donald's</td>
                        <td><S.PriceHightLight variant="outcome">- R$:59,00 </S.PriceHightLight></td>
                        <td>Alimentação</td>
                        <td>10/04/2022</td>
                    </tr>
                </tbody>
            </S.TransactionTable>
            </S.TransactionContainer>
       </div>
    )
}
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import * as S from './styles'

const Header = () => {
  const itens = useSelector((state: RootState) => state.carrinho.itens)
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" />
        <span>
          {itens.length} itens, valor total:{' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header

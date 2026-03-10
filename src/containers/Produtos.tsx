import { useGetProdutosQuery } from '../services/api'
import ProdutoComponente from '../components/Produto'
import { Produto as ProdutoType } from '../App' // Importamos o tipo aqui
import * as S from './styles'

const Produtos = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery(undefined)

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <S.Produtos>
      {produtos?.map(
        (
          produto: ProdutoType // Adicionamos o tipo aqui
        ) => (
          <ProdutoComponente key={produto.id} produto={produto} />
        )
      )}
    </S.Produtos>
  )
}

export default Produtos

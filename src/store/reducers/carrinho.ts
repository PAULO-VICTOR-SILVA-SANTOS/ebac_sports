import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// 1. Defina como é o seu Produto
interface Produto {
  id: number
  nome: string
  preco: number
  // adicione outras propriedades se houver
}

// 2. Defina o estado inicial
interface CarrinhoState {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    // 3. Tipar a action como PayloadAction<Produto>
    adicionar: (state, action: PayloadAction<Produto>) => {
      state.itens.push(action.payload)
    },
    // No remover, se você passa apenas o ID, o tipo é PayloadAction<number>
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    }
  }
})

export const { adicionar, remover } = carrinhoSlice.actions
export default carrinhoSlice.reducer

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../App'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      // O 'void' aqui é a chave!
      query: () => 'ebac_sports'
    })
  })
})

export const { useGetProdutosQuery } = api

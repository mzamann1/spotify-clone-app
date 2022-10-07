import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '16c4865cd0msh426323ab2dd362fp1449c0jsn5aa772e9f8e2'
      )
      return headers
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => '/charts/world',
    }),
  }),
})

export const { useGetTopChartsQuery } = shazamCoreApi

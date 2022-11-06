import axios from 'axios'
import { HOST_URL } from '../env'
import { PerfumeType } from '../@types/Types'

const instance = axios.create({
  baseURL: HOST_URL + '/graphql',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

const _data = `data {
            id
            attributes {
              brand
              concentration
              product
              gender
              season
              description
              items {
                id
                volume
                price
                discountPrice
                image {
                  data {
                    id
                    attributes {
                      url
                      width
                      height
                    }
                  }
                }
              }
            }
          }`
const _meta = `meta{
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }`

const reqs = {
  perfumes: (gender: number) => `query perfumes {
                  perfumes (sort: "updatedAt:desc", filters: {gender: {in: [0 ${gender}] }
                  }) {
                    ${_data}
                    ${_meta}
                  }
               }`,
  perfumeById: (id: string) => `query perfumeById {
                perfume(id: ${id}) {
                  ${_data}
                }
             }`,
  fetchByBrand: (brand: string, gender: number) => `query fetchByBrand {
                perfumes(filters: {brand: {contains: "${brand}"}, gender: {eq: ${gender}}}) {
                  ${_data}
                }
             }`,
  search: (searchValue: string) => `query search {
    perfumes(filters: {or: [{brand: {contains: "${searchValue}" }}, 
                            {product: {contains: "${searchValue}"}}] }){
      ${_data}
    } 
  }`,

  //catalog-----------------//
  news: (gender: number) => `query news {
                  perfumes (sort: "updatedAt:asc", filters: {gender: {in: [0, ${gender}]}}) {
                    ${_data}
                  }
               }`,
  discount: (gender: number) => `query discount {
                  perfumes(filters: {items: {discountPrice: {notNull: true}}, gender: {in: [0, ${gender}]}}) {
                    ${_data}
                  }
               }`,
  season: (gender: number, season: number) => `query season {
                  perfumes(filters: {season: {eq: ${season}}, gender: {in: [0, ${gender}]}}) {
                    ${_data}
                  }
               }`,
}

export const PerfumesRequests = {
  fetchPerfumeById: async (id: string) => {
    const res = await instance.post('', { query: reqs.perfumeById(id) })
    return res.data.data.perfume.data
  },

  fetchByBrandPerfumes: async (brand: string, gender: number) => {
    const res = await instance.post('', {
      query: reqs.fetchByBrand(brand, gender),
    })
    return res.data.data.perfumes.data
  },
}

export const SearchRequests = {
  search: async (searchValue: string) => {
    const res = await instance.post('', { query: reqs.search(searchValue) })
    return res.data.data.perfumes.data
  },
}

export const CatalogRequests = {
  fetchNewPerfumes: async (gender: number) => {
    const { data } = await instance.post('', { query: reqs.news(gender) })
    return data.data.perfumes.data
  },
  fetchDiscountPerfumes: async (gender: number) => {
    const { data } = await instance.post('', { query: reqs.discount(gender) })
    return data.data.perfumes.data
  },
  fetchSeasonPerfumes: async (gender: number, season: number) => {
    const { data } = await instance.post('', {
      query: reqs.season(gender, season),
    })
    return data.data.perfumes.data
  },
  fetchAllPerfumes: async (gender: number) => {
    const { data } = await instance.post('', { query: reqs.perfumes(gender) })
    return data.data.perfumes.data
  },
}

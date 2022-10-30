import axios from 'axios'
import {HOST_URL} from "../env";
import {PerfumeType} from "../@types/Types";

const instance = axios.create({
  baseURL: HOST_URL + '/graphql',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

const _data = `data {
            id
            attributes {
              brand
              concentration
              product
              gender
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
  perfumes: `query perfumes {
                perfumes {
                  ${_data}
                  ${_meta}
                }
             }`,
  perfume:(id: string) => `query perfume {
                perfume(id: ${id}) {
                  ${_data}
                }
             }`,
  fetchByBrand:(brand: string) => `query perfume {
                perfumes(filters: {brand: {contains: "${brand}"}}) {
                  ${_data}
                }
             }`,
  news: `query news {
          news {
            data {
              id
              attributes {
                perfumes {
                  ${_data}
                }
              }
            }
            ${_meta}
          }
        }`,
  search:(searchValue: string) => `query search {
    perfumes(filters: {or: [{brand: {contains: "${searchValue}" }}, 
                            {product: {contains: "${searchValue}"}}] }){
      ${_data}
    } 
}`
}


export const PerfumesRequests = {
  fetchNewPerfumes: async () => {
    const { data } = await instance.post('', {query: reqs.news})
    const res: PerfumeType[] = []
    data.data.news.data.map((e: any) => res.push(e.attributes.perfumes.data[0]))
    return res
  },

  fetchPerfumeById: async (id: string) => {
    const res = await instance.post('', {query: reqs.perfume(id)})
    return res.data.data.perfume.data
  },

  fetchByBrandPerfumes: async(brand: string) => {
    const res = await instance.post('', {query: reqs.fetchByBrand(brand)})
    return res.data.data.perfumes.data
  },
}

export const SearchRequests = {
  search: async(searchValue: string) => {
    const res = await instance.post('', {query: reqs.search(searchValue)})
    return res.data.data.perfumes.data
  },
}

export const CatalogRequests = {
  fetchPerfumes(gender: string) {
    return instance.get('api/perfumes?filters[gender]=' + gender)
  }
}
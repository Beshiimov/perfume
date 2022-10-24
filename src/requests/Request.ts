import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://63444faadcae733e8fdc93fe.mockapi.io/parfums/',
  timeout: 12000,
})

export const PerfumesRequests = {
  fetchNewPerfumes() {
    return instance.get('new')
  },
  fetchPerfumeById(id: number) {
    return instance.get('items?id=' + id)
  },
  fetchManufacturerPerfumes(manufacturer: string) {
    return instance.get('items?manufacturer=' + manufacturer)
  },
}

export const SearchRequests = {
  search(searchValue: string) {
    return instance.get('items?search=' + searchValue)
  },
}

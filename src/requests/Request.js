import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://63444faadcae733e8fdc93fe.mockapi.io/parfums/',
  timeout: 12000,
})

export const PerfumesRequests = {
  fetchNewPerfumes() {
    return instance.get('new')
  },
  fetchPerfumeById(id) {
    return instance.get('items?id=' + id)
  },
  fetchManufacturerPerfumes(manufacturer) {
    return instance.get('items?manufacturer=' + manufacturer)
  },
}

export const SearchRequests = {
  search(searchValue) {
    return instance.get('items?search=' + searchValue)
  },
}

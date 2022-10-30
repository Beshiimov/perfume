import {LoadingStatus, meta, PaginationMeta, PerfumeType} from '../../../@types/Types'

export interface PerfumeSliceTypes {
  perfumes: PerfumeType[]
  status: LoadingStatus
}

export type fetchNewPerfumes = {
  data: string
  meta: PaginationMeta
}

export type PerfumePayloadAction = {
  data: PerfumeType[]
  meta: meta
}
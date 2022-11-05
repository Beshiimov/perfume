import {
  LoadingStatus,
  meta,
  PaginationMeta,
  PerfumeType,
} from '../../../@types/Types'

export interface PerfumeSliceTypes {
  gender: number
  perfumes: {
    discount: PerfumeType[]
    new: PerfumeType[]
    season: PerfumeType[]
    all: PerfumeType[]
  }
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

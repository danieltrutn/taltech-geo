
export interface Locality {
  id: number
  name: string
  name_en: string | null
  country: Country
  coordx: number | null
  coordy: number | null
  depth: number | null
  elevation: string | null
  number: string | null
  remarks: string | null
  date_changed: string | null
  [key: string]: unknown
}

export interface Country {
  id: number
  name: string
  name_en: string
  iso_3166_1_alpha_2: string
}

export interface LocalitiesApiResponse {
  count: number
  next: string
  previous: string
  results: Locality[]
}

export interface FetchLocalitiesParams {
  name?: string
  limit?: number
  nextUrl?: string
  offset?: number
  id?: string | number
}

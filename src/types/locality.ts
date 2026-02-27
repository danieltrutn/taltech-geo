export interface Locality {
  id: number
  name: string
  name_en: string | null
  latitude: number | null
  longitude: number | null
  depth: number | null
  elevation: string | null
  number: string | null
  remarks: string | null
  date_changed: string | null
  [key: string]: unknown
}

export interface LocalitiesApiResponse {
  count: number
  results: Locality[]
}

export interface FetchLocalitiesParams {
  name?: string
}

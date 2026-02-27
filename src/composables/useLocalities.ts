import { ref } from 'vue'
import type { Locality, LocalitiesApiResponse, FetchLocalitiesParams } from '@/types/locality'

export function useLocalities(initialParams: FetchLocalitiesParams = {}) {
  const localities = ref<Locality[]>([])
  const totalCount = ref(0)
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchPage(params: FetchLocalitiesParams = {}) {
    error.value = null
   
    const res = await fetch(`https://rwapi.geoloogia.info/api/v1/public/localities/?name__icontains=${params.name.toString()}&limit=10&expand=country`)
      if (!res.ok) {
        throw new Error(`API error: ${res.status} ${res.statusText}`)
      }
      const data: LocalitiesApiResponse = await res.json()
      localities.value = data.results
      totalCount.value = data.count
  }

  async function fetchLocalityPage(id: any) {
    error.value = null
   
    const res = await fetch(`https://rwapi.geoloogia.info/api/v1/public/localities/?id=${id}&expand=country`)
      if (!res.ok) {
        throw new Error(`API error: ${res.status} ${res.statusText}`)
      }
      const data: LocalitiesApiResponse = await res.json()
      localities.value = data.results
      totalCount.value = data.count
  }
 
  return {
    localities,
    totalCount,
    loading,
    error,
    fetchPage,
    fetchLocalityPage,
  }
}

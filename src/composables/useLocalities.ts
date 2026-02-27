import { ref, computed } from 'vue'
import type { Locality, LocalitiesApiResponse, FetchLocalitiesParams } from '@/types/locality'

const API_BASE = 'https://rwapi.geoloogia.info/api/v1/public/localities/'

export function useLocalities(initialParams: FetchLocalitiesParams = {}) {
  const localities = ref<Locality[]>([])
  const totalCount = ref(0)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const nextUrl = ref<string | null>(null)
  const previousUrl = ref<string | null>(null)
  
  const hasNext = computed(() => !!nextUrl.value)
  const hasPrevious = computed(() => !!previousUrl.value)

  function buildUrl(params: FetchLocalitiesParams): string {
    const search = new URLSearchParams()
    search.set('expand', 'country')
    search.set('limit', String(params.limit ?? 20))

    if (params.offset != null) search.set('offset', String(params.offset))
    if (params.name?.trim()) search.set('name__icontains', params.name.trim())

    return `${API_BASE}?${search.toString()}`
  }

  async function fetchPage(params: FetchLocalitiesParams = {}) {
    error.value = null

    try {
        const url = params.nextUrl ?? buildUrl({ ...initialParams, ...params })
        
        const res = await fetch(url)
        if (!res.ok) {
          throw new Error(`API error: ${res.status} ${res.statusText}`)
        }
        const data: LocalitiesApiResponse = await res.json()

        localities.value = data.results
        totalCount.value = data.count
        nextUrl.value = data.next
        previousUrl.value = data.previous
        return data
      } catch (e) {
        const message = e instanceof Error ? e.message : 'Failed to fetch localities'
        error.value = message
        localities.value = []
        totalCount.value = 0
        nextUrl.value = null
        previousUrl.value = null
      } finally {
        loading.value = false
      }
  }

  async function goNext() {
    if (!nextUrl.value) return
    error.value = null
    try {
      const res = await fetch(nextUrl.value)

      if (!res.ok) throw new Error(`API error: ${res.status}`)

      const data: LocalitiesApiResponse = await res.json()

      localities.value = data.results
      nextUrl.value = data.next
      previousUrl.value = data.previous

    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to load next page'
    } finally {
      loading.value = false
    }
  }

  async function goPrevious() {
    if (!previousUrl.value) return
    loading.value = true
    error.value = null
    try {
      const res = await fetch(previousUrl.value)

      if (!res.ok) throw new Error(`API error: ${res.status}`)

      const data: LocalitiesApiResponse = await res.json()

      localities.value = data.results
      nextUrl.value = data.next
      previousUrl.value = data.previous
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to load previous page'
    } finally {
      loading.value = false
    }
  }
 
  return {
    localities,
    totalCount,
    loading,
    error,
    hasNext,
    hasPrevious,
    goNext,
    goPrevious,
    fetchPage,
  }
}

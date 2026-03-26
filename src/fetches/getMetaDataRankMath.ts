import ENV from '@/configs/env'
import parseRankMathHead from '@/utils/parseRankMathHead'

export default async function getMetaDataRankMath(slug: string) {
  try {
    const cmsBase = ENV.CMS
    const apiBase = ENV.API

    if (!cmsBase || !apiBase) return null

    const res = await fetch(`${cmsBase}${apiBase}rankmath/v1/getHead?url=${cmsBase}${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 60,
      },
    })
    if (!res.ok) return null
    const data = await res.json()
    if (!data?.success || !data?.head) return null
    return parseRankMathHead(data.head) // Phân tách dữ liệu head
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null
  }
}

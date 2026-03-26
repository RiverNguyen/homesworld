import { PostItem, ApiResponse } from '@/interfaces/blog.interface'
import { HomeResponse } from '@/interfaces/home.interface'
import TravelGuide from '@/modules/home/TravelGuide'
import homeService from '@/services/home'

export default async function Page() {
  const [acfData, blogRes] = await Promise.all([
    homeService.getHomeData<HomeResponse>(),
    homeService.getBlogs<ApiResponse<PostItem>>({ limit: 5 }),
  ])

  return (
    <>
      <TravelGuide
        page={acfData?.acf?.travel_guide || {}}
        data={blogRes.data || []}
      />
    </>
  )
}

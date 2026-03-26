import BannerHomepage from '@/app/_components/banner'
import FilterSearch from '@/app/_components/search'
import TravelGuide from '@/modules/home/TravelGuide'
import homeService from '@/services/home'
import taxonomiesService from '@/services/taxonomies'

import Weather from './_components/weather'

export default async function HomePage() {
  const [homeData, blogRes, taxonomiesData] = await Promise.all([
    homeService.getHome(),
    homeService.getBlogs({ limit: 5 }),
    taxonomiesService.getAllTaxonomies('service_combo'),
  ])
  return (
    <>
      <BannerHomepage data={homeData?.acf?.banner} />
      <FilterSearch taxonomies={taxonomiesData?.data} />
      <Weather acfData={homeData?.acf} />
      <TravelGuide
        page={homeData?.acf?.travel_guide || {}}
        data={blogRes.data || []}
      />
    </>
  )
}

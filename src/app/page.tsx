import BannerHomepage from '@/app/_components/banner'
import FilterSearch from '@/app/_components/search'
import TravelGuide from '@/app/_components/travel-guide'
import homeService from '@/services/home'
import taxonomiesService from '@/services/taxonomies'

import Weather from './_components/weather'

export default async function HomePage() {
  const [homeData, blogRes, taxonomiesData, locationData] = await Promise.all([
    homeService.getHome(),
    homeService.getBlogs({ limit: 5 }),
    taxonomiesService.getAllTaxonomies('service_combo'),
    taxonomiesService.getAllTaxonomies('location'),
  ])
  return (
    <>
      <style>{`
          body {
            margin-top:0;
          }
          @media (max-width: 639px) {
            body {
              margin-top: 3.13rem;
            }
          }
        `}</style>
      <BannerHomepage data={homeData?.acf?.banner} />
      <FilterSearch
        taxonomies={taxonomiesData?.data}
        locations={locationData?.data}
      />
      <Weather acfData={homeData?.acf} />
      <TravelGuide
        page={homeData?.acf?.travel_guide || {}}
        data={blogRes.data || []}
      />
    </>
  )
}

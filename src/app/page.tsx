import BannerHomepage from '@/app/_components/banner'
import homeService from '@/services/home'

export default async function HomePage() {
  const { acf } = await homeService.getHome()

  return (
    <>
      <BannerHomepage data={acf?.banner} />
    </>
  )
}

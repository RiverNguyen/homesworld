import NavigationDetail from '@/app/danh-sach-combo/[combo]/sections/NavigationDetail'
import SectionSelectRoom from '@/app/danh-sach-combo/[combo]/sections/SectionSelectRoom'

const ComboDetail = () => {
  return (
    <main>
      <style>{`
          footer{
          display:none}
        `}</style>
      <SectionSelectRoom />
      <NavigationDetail></NavigationDetail>
    </main>
  )
}

export default ComboDetail

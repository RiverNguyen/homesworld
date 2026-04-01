import Image from 'next/image'
import Link from 'next/link'
type CardItemProps = {
  children: string
  image: string
  slug: string
}
const CardItem = ({ children, image, slug }: CardItemProps) => {
  return (
    <Link
      className='xsm:size-[6.875rem] relative group w-[8.375rem] h-[8rem] rounded-[0.75rem] border-white/20 border-[0.0625rem] overflow-hidden hover:scale-99 hover:border-white hover:border-[0.125rem] transition-all duration-300 shadow-[0rem_0.1875rem_0.375rem_0rem_rgba(153,153,153,0.2),0rem_0.75rem_0.75rem_0rem_rgba(153,153,153,0.17),0rem_1.625rem_1rem_0rem_rgba(153,153,153,0.1),0rem_2.875rem_1.125rem_0rem_rgba(153,153,153,0.03),0rem_4.5rem_1.25rem_0rem_rgba(153,153,153,0)]'
      href={`/${slug}`}
    >
      <Image
        width={134}
        height={128}
        alt=''
        src={image || '/default.webp'}
        className='w-full h-full object-cover'
      ></Image>
      <div className='w-full group h-full absolute top-0 left-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.1)_0%,_rgba(0,0,0,0.4)_58.89%,_rgba(0,0,0,0.5)_82.88%)] hover:bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.1)_58.89%,_rgba(0,0,0,0.4)_82.88%)] hover:opacity-20 transition-all duration-300'></div>
      <span className='pc-14-14-r text-white absolute bottom-[0.44rem] left-1/2 -translate-x-1/2 line-clamp-1 w-[90%] text-center'>
        {children}
      </span>
    </Link>
  )
}

export default CardItem

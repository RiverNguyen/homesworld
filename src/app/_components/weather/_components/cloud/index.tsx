import Image from 'next/image'

const Cloud = () => {
  return (
    <div className="bg-black relative h-[33.5rem] w-full overflow-hidden">
      <Image className="absolute left-0 bottom-5 right-0 h-[20.875rem] w-full" src={'/home/img/cloud-1.svg'} alt="cloud" fill />
      <Image className="absolute left-0 bottom-0 right-0 h-[24.4375rem] w-full" src={'/home/img/cloud-2.svg'} alt="cloud" fill />
    </div>
  )
}

export default Cloud
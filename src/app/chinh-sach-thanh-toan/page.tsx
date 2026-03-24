'use client'
import { useRef } from 'react'

import TocBot from '@/components/shared/TocBot'
import './style.css'
export function addIdToHeadings(html: string) {
  let i = 0
  return html.replace(/<h([2-3])>(.*?)<\/h\1>/g, (_, level, text) => {
    const id = `heading-${i++}`
    return `<h${level} id="${id}">${text}</h${level}>`
  })
}
const content = `<strong>Ngày có hiệu lực: 01/01/2025</strong>
    <h2>1. Các điều khoản chung</h2>
    <p>Các điều khoản thanh toán sau đây chi phối việc sử dụng các dịch vụ thanh toán do Công ty TNHH Bất động sản VinAl cung cấp:<br />
    &#8211; Điều khoản sử dụng dịch vụ thanh toán<br />
    &#8211; Chính sách bảo mật<br />
    &#8211; Giải quyết tranh chấp<br />
    &#8211; Thay đổi điều khoản</p>
    <h2>2. Phương thức thanh toán</h2>
    <p>Khách hàng có thể lựa chọn giữa các phương thức thanh toán sau khi sử dụng dịch vụ của VinAl:<br />
    &#8211; Thanh toán trực tuyến qua thẻ tín dụng/thẻ ghi nợ<br />
    &#8211; Chuyển khoản ngân hàng<br />
    &#8211; Thanh toán bằng ví điện tử<br />
    &#8211; Thanh toán tiền mặt tại văn phòng</p>
    <p>Để đảm bảo an toàn và bảo mật thông tin thanh toán, VinAl áp dụng các biện pháp sau:<br />
    &#8211; Mã hóa dữ liệu<br />
    &#8211; Xác thực hai yếu tố<br />
    &#8211; Giám sát giao dịch<br />
    &#8211; Tuân thủ tiêu chuẩn PCI DSS</p>
    <h2>3. Hoàn tiền</h2>
    <p>Quy trình và điều kiện hoàn tiền khi khách hàng không hài lòng với dịch vụ của VinAl:<br />
    &#8211; Điều kiện hoàn tiền<br />
    &#8211; Quy trình yêu cầu hoàn tiền<br />
    &#8211; Thời gian xử lý hoàn tiền<br />
    &#8211; Phương thức hoàn tiền</p>
    <h2>4. Hoàn tiền 2</h2>
    <p>Quy trình và điều kiện hoàn tiền khi khách hàng không hài lòng với dịch vụ của VinAl:<br />
    &#8211; Điều kiện hoàn tiền<br />
    &#8211; Quy trình yêu cầu hoàn tiền<br />
    &#8211; Thời gian xử lý hoàn tiền<br />
    &#8211; Phương thức hoàn tiền</p>
    <h2>5. Hoàn tiền 3</h2>
    <p>Quy trình và điều kiện hoàn tiền khi khách hàng không hài lòng với dịch vụ của VinAl:<br />
    &#8211; Điều kiện hoàn tiền<br />
    &#8211; Quy trình yêu cầu hoàn tiền<br />
    &#8211; Thời gian xử lý hoàn tiền<br />
    &#8211; Phương thức hoàn tiền</p>
    `
const PaymentPolicy = () => {
  // const [content, setContent] = useState('')
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch('http://kingtech-prod.local/wp-json/custom/v1/post-592')
  //     const { data } = await res.json()
  //     setContent(data)
  //   }
  //   fetchData()
  // }, [])
  const contentRef = useRef<HTMLElement>(null)
  return (
    <section className='xsm:pt-[2rem] pb-[2.25rem] xsm:my-0 xsm:px-[0.75rem] bg-[#FEFBF9] my-[3.5rem]'>
      <div className='max-w-[70rem] mx-auto'>
        <h2 className='xsm:p-0 xsm:mb-25-s-mons pc-h2-46-s-mons'>Chính sách thanh toán</h2>
        <TocBot contentRef={contentRef} />
        <article
          id='blog_content'
          ref={contentRef}
          dangerouslySetInnerHTML={{ __html: addIdToHeadings(content) }}
        />
      </div>
    </section>
  )
}

export default PaymentPolicy

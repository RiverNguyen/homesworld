'use client'
import Toc from '@/components/shared/Toc'
import { buildTocFromHtml } from '@/utils/buildTocFromHtml'
import { useMemo } from 'react'
const content = `<strong>Ngày có hiệu lực: 01/01/2025</strong>
<h2>1. Các điều khoản chung</h2>
Các điều khoản thanh toán sau đây chi phối việc sử dụng các dịch vụ thanh toán do Công ty TNHH Bất động sản VinAl cung cấp:
- Điều khoản sử dụng dịch vụ thanh toán
- Chính sách bảo mật
- Giải quyết tranh chấp
- Thay đổi điều khoản`
export default function Page() {
  const { html, tocs } = useMemo(() => {
    const initialHtml = content || ''
    return buildTocFromHtml(initialHtml)
  }, [content])

  return (
    <>
      {/* <Toc
        tocs={tocs}
        classNameContentSummary='text-[1.45833rem]'
      ></Toc> */}
      <article
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></article>
    </>
  )
}

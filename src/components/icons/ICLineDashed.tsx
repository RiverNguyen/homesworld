export default function ICLineDashed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 573 1'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        opacity='.2'
        stroke='#10475F'
        strokeDasharray='4 4'
        d='M0 0.5 L573 0.5'
        vectorEffect='non-scaling-stroke' // ← giữ stroke không bị co khi scale
      />
    </svg>
  )
}

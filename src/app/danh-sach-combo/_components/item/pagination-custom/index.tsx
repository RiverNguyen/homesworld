'use client'

type PaginationCustomProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

type PaginationItem = number | 'ellipsis'

const buildPagination = (currentPage: number, totalPages: number): PaginationItem[] => {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1)
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 'ellipsis', totalPages]
  }

  if (currentPage >= totalPages - 2) {
    return [1, 'ellipsis', totalPages - 2, totalPages - 1, totalPages]
  }

  return [1, 'ellipsis', currentPage, 'ellipsis', totalPages]
}

const PaginationCustom = ({ currentPage, totalPages, onPageChange }: PaginationCustomProps) => {
  const items = buildPagination(currentPage, totalPages)

  return (
    <div className='flex items-center justify-center py-[2rem]'>
      <button
        type='button'
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className='flex size-[0.44187rem] items-center justify-center rounded-full text-[#10475F] transition-opacity disabled:cursor-not-allowed disabled:opacity-40'
        aria-label='Trang trước'
      >
        <ICPaginationArrow
          direction='left'
          className='h-[0.875rem] w-[0.5625rem]'
        />
      </button>

      <div className='flex items-center'>
        {items.map((item, index) => {
          if (item === 'ellipsis') {
            return (
              <div
                key={`ellipsis-${index}`}
                className='ml-[0.875rem] flex h-[2.875rem] items-center justify-center'
              >
                <div className='flex items-center'>
                  <span className='h-[0.25rem] w-[0.25rem] rounded-full bg-[#10475F]' />
                  <span className='ml-[0.25rem] h-[0.25rem] w-[0.25rem] rounded-full bg-[#10475F]' />
                  <span className='ml-[0.25rem] h-[0.25rem] w-[0.25rem] rounded-full bg-[#10475F]' />
                </div>
              </div>
            )
          }

          const isActive = item === currentPage

          return (
            <button
              key={item}
              type='button'
              onClick={() => onPageChange(item)}
              className={`ml-[0.5rem] flex size-[2rem] items-center justify-center rounded-full pc-14-14-r font-normal! transition-all ${
                isActive
                  ? 'bg-[#154A62] text-white'
                  : 'bg-[#E4E6E7] text-[#154A62] hover:bg-[#E7EBEF]'
              }`}
              aria-current={isActive ? 'page' : undefined}
              aria-label={`Trang ${item}`}
            >
              {item}
            </button>
          )
        })}
      </div>

      <button
        type='button'
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='ml-[0.875rem] flex size-[0.44187rem] items-center justify-center rounded-full text-[#10475F] transition-opacity disabled:cursor-not-allowed disabled:opacity-40'
        aria-label='Trang sau'
      >
        <ICPaginationArrow
          direction='right'
          className='h-[0.875rem] w-[0.5625rem]'
        />
      </button>
    </div>
  )
}

export default PaginationCustom
const ICPaginationArrow = ({
  direction,
  className,
}: {
  direction: 'left' | 'right'
  className?: string
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 9 14'
      fill='none'
      className={className}
    >
      {direction === 'left' ? (
        <path
          d='M7.5 1.25L1.875 7L7.5 12.75'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      ) : (
        <path
          d='M1.5 1.25L7.125 7L1.5 12.75'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      )}
    </svg>
  )
}

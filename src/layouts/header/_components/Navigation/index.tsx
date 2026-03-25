'use client'
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import ListCard from '@/layouts/header/_components/ListCard'

const Navigation = () => {
  return (
    <nav className='flex pt-[0.88rem]'>
      <div className='relative group mr-[2.25rem]'>
        <Link
          href={'#'}
          className='text-white pc-16-16-r uppercase'
        >
          Hỗ trợ
        </Link>
        <div className='-translate-x-1/2 absolute left-1/2 top-full pt-[1.5rem] group-hover:opacity-100 group-hover:visible invisible opacity-0 transition-all duration-300'>
          <ul className='bg-white rounded-[1.125rem] shadow-[0.125rem_0.375rem_2rem_0rem_rgba(0,0,0,0.06)] overflow-hidden'>
            <li className='pc-18-18-m font-normal cursor-pointer py-[0.875rem] pl-[1.25rem] w-[21.4375rem] h-[3.25rem] bg-white hover:bg-[#E6E6F1] transition-all duration-300'>
              Chính sách hoàn tiền
            </li>
            <li className='pc-18-18-m font-normal cursor-pointer py-[0.875rem] pl-[1.25rem] w-[21.4375rem] h-[3.25rem] bg-white hover:bg-[#E6E6F1] transition-all duration-300'>
              Chính sách thanh toán - quy trình
            </li>
            <li className='pc-18-18-m font-normal cursor-pointer py-[0.875rem] pl-[1.25rem] w-[21.4375rem] h-[3.25rem] bg-white hover:bg-[#E6E6F1] transition-all duration-300'>
              Chính sách hủy đổi lịch hoàn tiền
            </li>
          </ul>
        </div>
      </div>
      <div className='relative group mr-[2.25rem]'>
        <Link
          href={'#'}
          className='text-white pc-16-16-r uppercase'
        >
          Combo du lịch
        </Link>
        <div className='fixed left-1/2 -translate-x-1/2 pt-[1.5rem] group-hover:opacity-100 group-hover:visible invisible opacity-0  transition-all duration-300'>
          <ListCard></ListCard>
        </div>
      </div>
      <div className='relative group mr-[2.25rem]'>
        <Link
          href={'#'}
          className='text-white pc-16-16-r uppercase'
        >
          Khách sạn
        </Link>
        <div className='fixed left-1/2 hidden group-hover:block -translate-x-1/2 pt-[1.5rem] group-hover:opacity-100 group-hover:visible invisible opacity-0 transition-all duration-300'>
          <ListCard></ListCard>
        </div>
      </div>
      <div className='relative group mr-[2.25rem]'>
        <Link
          href={'#'}
          className='text-white pc-16-16-r uppercase'
        >
          Tin tức
        </Link>
      </div>
      <div className='relative group'>
        <Link
          href={'#'}
          className='text-white pc-16-16-r uppercase'
        >
          Liên hệ
        </Link>
      </div>
    </nav>
  )

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className='mr-[2.25rem]'>
          <NavigationMenuTrigger className='p-0 !text-white pc-16-16-r uppercase bg-transparent rounded-0 hover:!bg-transparent [&>svg]:hidden [&[data-state=open]]:!bg-transparent'>
            Hỗ Trợ
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ListCard></ListCard>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className='hidden md:flex'>
          <NavigationMenuTrigger className='!text-white pc-16-16-r uppercase bg-transparent rounded-0 hover:!bg-transparent [&>svg]:hidden'>
            Components
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='p-0 !text-white pc-16-16-r uppercase bg-transparent rounded-0 hover:!bg-transparent'>
            Hỗ Trợ
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            {/* Menu con hiển thị dưới item chính */}
            <NavigationMenuLink href='#'>Item 1</NavigationMenuLink>
            <NavigationMenuLink href='#'>Item 2</NavigationMenuLink>
            <NavigationMenuLink href='#'>Item 3</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className='hidden md:flex'>
          <NavigationMenuTrigger className='!text-white pc-16-16-r uppercase bg-transparent rounded-0 hover:!bg-transparent [&>svg]:hidden'>
            Components
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className='hidden md:flex'>
          <NavigationMenuTrigger className='!text-white pc-16-16-r uppercase bg-transparent rounded-0 hover:!bg-transparent [&>svg]:hidden'>
            Components
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
              <li>ABC</li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className='!text-white pc-16-16-r uppercase bg-transparent rounded-0 hover:!bg-transparent [&>svg]:hidden'
            // className={navigationMenuTriggerStyle()}
          >
            <Link href='/docs'>Docs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
export default Navigation

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className='flex flex-col gap-1 text-sm'>
            <div className='leading-none font-medium'>{title}</div>
            <div className='line-clamp-2 text-muted-foreground'>{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

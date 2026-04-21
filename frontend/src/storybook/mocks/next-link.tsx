import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

type LinkProps = PropsWithChildren<
   Omit<ComponentPropsWithoutRef<'a'>, 'href'> & {
      href: string
   }
>

const Link = ({ href, children, ...props }: LinkProps) => {
   return (
      <a href={href} {...props}>
         {children}
      </a>
   )
}

export default Link

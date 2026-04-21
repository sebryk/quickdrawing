import type { CSSProperties, ImgHTMLAttributes } from 'react'

type NextImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
   src: string
   alt: string
   fill?: boolean
}

const NextImage = ({ fill = false, style, ...props }: NextImageProps) => {
   const resolvedStyle: CSSProperties = fill
      ? {
           height: '100%',
           inset: 0,
           objectFit: 'cover',
           position: 'absolute',
           width: '100%',
           ...style,
        }
      : (style ?? {})

   return <img {...props} style={resolvedStyle} />
}

export default NextImage

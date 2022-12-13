import facebook from '@/assets/images/icon-facebook.svg'
import pinterest from '@/assets/images/icon-pinterest.svg'
import twitter from '@/assets/images/icon-twitter.svg'
import { useMemo } from 'react'

export type SocialMediaCompany = 'facebook' | 'pinterest' | 'twitter'

const iconMap = new Map<SocialMediaCompany, string>([
  ['facebook', facebook],
  ['pinterest', pinterest],
  ['twitter', twitter],
])

interface Props {
  company: SocialMediaCompany
}

export default function ArticleSocialIcon({ company }: Props) {
  const imgSrc = useMemo(() => {
    return iconMap.get(company) ?? ''
  }, [company])

  return (
    <img
      src={imgSrc}
      alt={company}
    />
  )
}

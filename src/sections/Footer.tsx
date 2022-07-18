import { InstagramLogo } from 'phosphor-react'
import { FC } from 'react'
import { Logo } from '../components/Logo'

export const Footer: FC = () => {
  return (
    <footer className='px-4 pb-8 flex items-center'>
      <div className='flex-1'>
        <a href='https://instagram.com/' target='_blank'>
          <InstagramLogo size={20} />
        </a>
      </div>
      <Logo />
    </footer>
  )
}

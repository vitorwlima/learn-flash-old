import { FC } from 'react'
import { Logo } from './Logo'

export const Header: FC = () => {
  return (
    <header className="bg-sky-100 text-center py-4">
      <Logo />
    </header>
  )
}

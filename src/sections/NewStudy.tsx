import { CheckCircle } from 'phosphor-react'
import { FC } from 'react'

export const NewStudy: FC = () => {
  const benefits = [
    'Otimize seu tempo',
    'Memorize e fixe mais',
    'Desfrute do conteúdo de outras pessoas',
    'Plataforma super fácil de utilizar',
  ]

  const handleRedirectToSubscribe = () => {
    document.getElementById('__next')?.scrollIntoView({
      block: 'end',
      behavior: 'smooth',
    })
  }

  return (
    <section className='px-4 lg:px-16'>
      <div>
        <h1 className='text-2xl font-bold text-sky-400 mb-3 lg:text-3xl xl:text-4xl'>
          A nova forma de estudar
        </h1>
        <ul className='mb-6'>
          {benefits.map((benefit, i) => (
            <li key={i} className='flex items-center gap-2'>
              <CheckCircle color='#38BDF8' weight='fill' />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <button
          className='bg-sky-400 text-white px-6 py-2 rounded-md text-sm'
          onClick={handleRedirectToSubscribe}
        >
          INSCREVA-SE AGORA
        </button>
      </div>
    </section>
  )
}

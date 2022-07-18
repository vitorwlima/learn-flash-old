import { Brain, Globe, Lightbulb } from 'phosphor-react'
import { FC } from 'react'

export const Advantages: FC = () => {
  const advantages = [
    {
      id: 1,
      icon: Brain,
      title: 'Melhore a retenção',
      text: 'Revise os flashcards com frequência para relembrar de informações cruciais e mantê-las na memória.',
    },
    {
      id: 2,
      icon: Lightbulb,
      title: 'Teste seu conhecimento',
      text: 'Desfrute dos seus cartões e saiba quais conteúdos você está dominando e quais precisam ser revisados mais vezes.',
    },
    {
      id: 3,
      icon: Globe,
      title: 'Compartilhe e descubra',
      text: 'Compartilhe os materiais que você fez na plataforma e pesquise os de outras pessoas para adquirir ainda mais conhecimento.',
    },
  ]

  return (
    <section className='px-4 lg:px-16'>
      <div className='flex flex-col'>
        <h2 className='text-sky-400 text-center'>POR QUE USAR FLASHCARDS?</h2>
        <strong className='text-xl text-center block mt-1'>Vantagens</strong>
        <div className='mt-4 flex flex-col gap-2 lg:flex-row lg:gap-8'>
          {advantages.map((adv) => (
            <div key={adv.id} className='p-4 flex flex-col items-center shadow gap-4 flex-1'>
              {<adv.icon color='#38BDF8' size={64} />}
              <strong className='text-lg text-center'>{adv.title}</strong>
              <p className='text-center'>{adv.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

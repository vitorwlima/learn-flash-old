import { FC } from 'react'

export const HowItWorks: FC = () => {
  return (
    <section className='px-4 py-10 flex flex-col gap-8 lg:flex-row lg:items-center bg-sky-100'>
      <div>
        <h2 className='text-sky-400 text-center'>AFINAL, O QUE SÃO OS FLASHCARDS?</h2>
        <strong className='text-xl text-center block mt-1'>Como funciona</strong>
        <div className='mt-4 flex flex-col gap-2'>
          <p>
            Você já parou para pensar que está em 2022 e continua estudando da mesma forma que fomos
            ensinados séculos atrás?
          </p>
          <p>
            Com o <strong>Learn Flash</strong> e o uso de <strong>flash cards interativos</strong>,
            sua forma de estudar mudará completamente! A união do resumo com a prática otimiza seu{' '}
            <strong>tempo</strong> precioso e aumenta sua <strong>eficácia</strong>.
          </p>
        </div>
      </div>

      <div>
        <img src='/flashcards.png' alt='Flashcards' className='w-full' />
      </div>
    </section>
  )
}

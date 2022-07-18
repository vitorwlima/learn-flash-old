import { FC, useState } from 'react'

export const Subscription: FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <section className='px-4 py-10 bg-sky-100 lg:px-16'>
      <div className='flex flex-col items-center'>
        <h4 className='text-xl text-sky-400 mb-3'>
          INSCREVA-SE AGORA PARA FICAR POR DENTRO DAS NOVIDADES!
        </h4>
        <form className='flex flex-col gap-2 w-full max-w-lg'>
          <div className='flex flex-col'>
            <label className='text-sm' htmlFor='name'>
              Nome
            </label>
            <input
              className='bg-transparent border border-sky-400 rounded-lg p-1'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-sm' htmlFor='email'>
              E-mail
            </label>
            <input
              className='bg-transparent border border-sky-400 rounded-lg p-1'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className='bg-sky-400 text-white px-6 py-2 rounded-md text-sm mt-4'>
            QUERO ESTUDAR MELHOR
          </button>
        </form>
      </div>
    </section>
  )
}

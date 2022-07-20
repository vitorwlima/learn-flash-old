import { TRPCClientError } from '@trpc/client'
import { FC, FormEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { trpc } from 'src/utils/trpc'

export const Subscription: FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const { mutate } = trpc.useMutation('subscribers.create', {
    onSuccess: () => {
      toast.success('Inscrição realizada com sucesso')
      setName('')
      setEmail('')
    },
    onError: (error) => {
      if (error instanceof TRPCClientError) {
        toast.error('Dados inválidos')
        return
      }

      toast.error('Erro ao realizar inscrição')
    },
  })

  const handleSubscribe = (event: FormEvent) => {
    event.preventDefault()
    mutate({ name, email })
  }

  return (
    <section className='px-4 py-10 bg-sky-100 lg:px-16'>
      <div className='flex flex-col items-center'>
        <h4 className='text-xl text-sky-400 mb-3'>
          INSCREVA-SE AGORA PARA FICAR POR DENTRO DAS NOVIDADES!
        </h4>
        <form className='flex flex-col gap-2 w-full max-w-lg' onSubmit={handleSubscribe}>
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
          <button className='bg-sky-400 text-white px-6 py-2 rounded-md text-sm mt-4' type='submit'>
            QUERO ESTUDAR MELHOR
          </button>
        </form>
      </div>
    </section>
  )
}

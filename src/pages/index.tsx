import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { NewStudy } from '../sections/NewStudy'

const Home: NextPage = () => {
  return (
    <main className='flex flex-col gap-10'>
      <Header />
      <NewStudy />
    </main>
  )
}

export default Home

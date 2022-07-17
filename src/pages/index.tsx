import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { Advantages } from '../sections/Advantages'
import { HowItWorks } from '../sections/HowItWorks'
import { NewStudy } from '../sections/NewStudy'

const Home: NextPage = () => {
  return (
    <main className='flex flex-col gap-10'>
      <Header />
      <NewStudy />
      <HowItWorks />
      <Advantages />
    </main>
  )
}

export default Home

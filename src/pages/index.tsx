import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { Advantages } from '../sections/Advantages'
import { Footer } from '../sections/Footer'
import { HowItWorks } from '../sections/HowItWorks'
import { NewStudy } from '../sections/NewStudy'
import { Subscription } from '../sections/Subscription'

const Home: NextPage = () => {
  return (
    <main className='flex flex-col gap-10'>
      <Header />
      <NewStudy />
      <HowItWorks />
      <Advantages />
      <Subscription />
      <Footer />
    </main>
  )
}

export default Home

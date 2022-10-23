import axios from 'axios';
import { useState, useEffect } from 'react';
import './styles/main.css'
import * as Dialog from '@radix-ui/react-dialog';
import { Logo } from './components/Logo'
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdModal } from './components/CreateAdModal';
import { GooglePlayLogo } from 'phosphor-react';
import FlatList from 'flatlist-react';
import { GameBannerResp } from './components/GameBannerResp';
import { CreateAdBannerResp } from './components/CreateAdBannerResp';

interface Attraction {
  description: string;
  bannerUrl: string,
  id: string,
  title: string,
  _count: {
    ads: number
  }
}

function App() {
  const [attractions, setAttractions] = useState<Attraction[]>([])

  useEffect(() => {
    axios('http://localhost:5000/attractions').then(response => {
      setAttractions(response.data);
    })
  }, [])

  return (
    // <--------site full-------->
    <div className='max-w-[1600px] mx-auto flex flex-col items-center my-20 '>
      <Logo />
      <h1 className='text-[1.5rem] lg:text-5xl lg:text-white font-black text-white lg:mt-10'>
        Seu <span className='text-transparent bg-gradient bg-clip-text'>guia</span> digital está aqui.
      </h1>
      <div className='grid-cols-6 gap-6 mt-16 hidden lg:grid'>
        {attractions.map(attraction => {
          return (
            <GameBanner
              key={attraction.id}
              BannerUrl={attraction.bannerUrl}
              description={attraction.description}
              title={attraction.title}
              adsCount={attraction._count.ads}
            />
          )
        })}
      </div>
      <div className='grid lg:hidden grid-rows-6 mt-4 overflow-hidden gap-2 max-w-[300px] max-h-[1000px]'>
        {attractions.map(attraction => {
          return (
            <GameBannerResp
              key={attraction.id}
              BannerUrl={attraction.bannerUrl}
              adsCount={attraction._count.ads}
              title={attraction.title}
              description={attraction.description}
            />
          )
        })}
      </div>
      <Dialog.Root>
        <div className='self-stretch hidden lg:grid overflow-hidden' >
          <CreateAdBanner />
        </div>
        <div className='lg:hidden'>
          <CreateAdBannerResp />
        </div>
        <div>
          <CreateAdModal />
        </div>
      </Dialog.Root>
      <div className='flex  items-center mt-8 bg-[#2A2634] p-4 rounded gap-2 text-white'>
        <GooglePlayLogo size={32} weight="bold" color='#fff' />
        <p>Baixe nosso app</p>
      </div>
    </div>
  )
}

export default App

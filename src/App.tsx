import { Logo } from './components/logo'
import './styles/main.css'
import { MagnifyingGlassPlus } from "phosphor-react";

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20 '>
      <Logo />
      <h1 className='text-5xl text-white font-black mt-10'>
        Seu <span className='text-transparent bg-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      {/* <--Lista de Jogos----> */}

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-1.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='text-white font-bold block'>League of legends</strong>
            <p className='text-zinc-300 text-sm block'>4 anúncios</p>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-2.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='text-white font-bold block'>Dota 2</strong>
            <p className='text-zinc-300 text-sm block'>4 anúncios</p>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-3.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='text-white font-bold block'>Counter Strike</strong>
            <p className='text-zinc-300 text-sm block'>4 anúncios</p>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-4.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='text-white font-bold block'>Apex Legends</strong>
            <p className='text-zinc-300 text-sm block'>4 anúncios</p>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-5.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='text-white font-bold block'>Fortinete</strong>
            <p className='text-zinc-300 text-sm block'>4 anúncios</p>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-6.png" alt="" />
          <div className='w-full p6t-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='text-white font-bold block'>World of Warcraft</strong>
            <p className='text-zinc-300 text-sm block'>4 anúncios</p>
          </div>
        </a>
      </div>
      <div className='self-stretch bg-[#2A2634]  px-8 py-6  mt-8 rounded-lg overflow-hidden border-t-4 border-violet-600 flex justify-between items-center'>
        <div>
          <strong className='font-black text-2xl text-white leading-10'>Não encontrou seu duo?</strong>
          <p className='text-zinc-400 mt-1'>Publique um anúncio para encontrar novos players!</p>
        </div>
        <button className='py-3 px-4 bg-violet-500 rounded text-white flex gap-1'>
          <MagnifyingGlassPlus size={24} weight="light" />
          Publicar anuncio
        </button>
      </div>
    </div>
  )
}

export default App

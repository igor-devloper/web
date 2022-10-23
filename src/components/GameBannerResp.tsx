import FlatList from 'flatlist-react';
import * as HoverCard from '@radix-ui/react-hover-card';
import "keen-slider/keen-slider.min.css"

interface GameBannerProps {
  BannerUrl: string;
  title: string;
  description: string;
  adsCount: number;
}


export function GameBannerResp(props: GameBannerProps) {
  return (
    <a href="" className='relative rounded-lg overflow-hidden hover:shadow-2xl transition-shadow'>
      <HoverCard.Root>
        <HoverCard.Trigger asChild>
          <a>
            <img src={props.BannerUrl} alt="" className='w-full  h-full' />
          </a>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content sideOffset={5}>
            <div className=''>
              <img src={props.BannerUrl} alt="" className='rounded-lg object-cover' />
            </div>
            <div className='bg-[#2A2634] overflow-hidden rounded-b-lg p-2'>
              <h1 className='font-black text-white text-center'>{props.title}</h1>
              <p className='text-zinc-500 text-center'>{props.adsCount} anuncio(s)</p>
            </div>
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
      <div className='w-full pt-16 pb-4 px-4 bg-game-gradient overflow-hidden absolute bottom-0 left-0 right-0' >
        <strong className='text-white font-bold block'>{props.title}</strong>
        <p className='text-zinc-300 text-sm block'>{props.adsCount} anuncio(s)</p>
      </div>
      '
    </a>


  )
}
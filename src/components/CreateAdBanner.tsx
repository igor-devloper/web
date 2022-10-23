import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

export function CreateAdBanner() {
  return (
    < div className = 'self-stretch bg-[#2A2634] px-8 py-6  mt-8 rounded-lg overflow-hidden border-t-4 border-violet-600 flex justify-between items-center' >
       <div>
         <strong className='font-black text-2xl text-white leading-10'>Divulgue seu comercio</strong>
         <p className='text-zinc-400 mt-1'>Publique seu comercio proximo de algum ponto turístico!</p>
       </div>
       <Dialog.Trigger className='py-3 px-4 bg-violet-500 rounded text-white flex gap-3 items-center hover:bg-violet-600'>
         <MagnifyingGlassPlus size={24} weight="light" />
         Publicar comercio
       </Dialog.Trigger>
     </div >
  )
}
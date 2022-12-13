import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Check, MapTrifold } from 'phosphor-react';
import { Input } from './Form/Input';
import { useState, FormEvent, useEffect } from 'react';
import { Loading } from './Loading';

interface Game {
  bannerUrl: string,
  id: string,
  title: string,
  _count: {
    ads: number
  }
}


export function CreateAdModal() {
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [attractions, setAttractions] = useState<Game[]>([])  
  const [selectedFile, setSelectedFile] = useState<File[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);
  useEffect(() => {
    axios('http://localhost:5000/attractions').then(response => {
      setAttractions(response.data);
    })
  }, [])
  async function handleCreateAd(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    try {
      await axios.post(`http://localhost:5000/attractions/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        logo: data.logo,
        location: data.location,
        instagram: data.instagram,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: useVoiceChannel,
      })
      alert('Anúncio criado com sucesso')
    } catch (err) {
      console.log(err);
      alert('Erro ao criar o anúncio');
    }
  }
  { SubmitEvent ? <CreateAdModal /> : <Loading /> }
  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
      <Dialog.Content className='fixed bg-[#2A2634]  px-10 py-6  text-white top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 w rounded-lg w-[1000px] h-[600px] shadow-lg shadow-black/25'>
        <Dialog.Title className="text-3xl font-black text-center">Publique um anúncio</Dialog.Title>
        <form onSubmit={handleCreateAd} encType="multipart/form-data" className="mt-8 lex flex-col gap-6">
          <div className="flex flex-col gap-2 mt-2">
            <label htmlFor="game" className="font-semibold">Qual o ponto turístico?</label>
            <select name="game" id="game" className='bg-zinc-900 py-4 px-4 rounded text-sm text-zinc-500 appearance-none'>
              <option value="" disabled selected>Qual o ponto turístico vc está</option>
              {attractions.map(game => {
                return (
                  <option key={game.id} value={game.id}>{game.title}</option>
                )
              })}
            </select>
          </div>
          <div className='grid grid-cols-3 gap-5'>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="name" className="font-semibold">Nome do estabelecimento</label>
              <Input name="name" id="name" placeholder="Como chamam seu comercio?" />
            </div>
              <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="instagram" className="font-semibold">Qual a seu Instagram?</label>
                <Input name="instagram" id="instagram" type="text" placeholder="https://www.instagram.com/****" />
              </div>
            <div className="flex flex-col gap-2 mt-2">
              <label htmlFor="logo" className="font-semibold">Qual o seu LogoTipo?</label>
              <Input name='logo' id='logo' type="text" placeholder='coloque a URL da sua imagem' />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <label htmlFor="location" className="font-semibold">Qual a sua Localização?</label>
            <Input name="location" id="location" type="text" placeholder="https://www.google.com.br/maps/place/****" />
          </div>
          <div className="flex gap-6 mt-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays" className="font-semibold">Dias de funcionamento</label>
              <ToggleGroup.Root
                type='multiple'
                className='grid grid-cols-4 gap-2'
                value={weekDays}
                onValueChange={setWeekDays}
              >
                <ToggleGroup.Item
                  value='0'
                  title="Domingo"
                  className={`w-10 h-10 py-[7px] px-[12px] rounded bg-zinc-900 ${weekDays.includes('0') ? 'bg-violet-900' : ''}`}

                >
                  D
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value='1'
                  title="Segunda"
                  className={`w-10 h-10 py-[7px] px-[12px] rounded bg-zinc-900 ${weekDays.includes('1') ? 'bg-violet-900' : ''}`}
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value='2'
                  title="Terça"
                  className={`w-10 h-10 py-[7px] px-[12px] rounded bg-zinc-900 ${weekDays.includes('2') ? 'bg-violet-900' : ''}`}
                >
                  T
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value='3'
                  title="Quarta"
                  className={`w-10 h-10 py-[7px] px-[12px] rounded bg-zinc-900 ${weekDays.includes('3') ? 'bg-violet-900' : ''}`}
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value='4'
                  title="Quinta"
                  className={`w-10 h-10 py-[7px] px-[12px] rounded bg-zinc-900 ${weekDays.includes('4') ? 'bg-violet-900' : ''}`}
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value='5'
                  title="Sexta"
                  className={`w-10 h-10 py-[7px] px-[12px] rounded bg-zinc-900 ${weekDays.includes('5') ? 'bg-violet-900' : ''}`}
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value='6'
                  title="Sábado"
                  className={`w-10 h-10 py-[7px] px-[12px] rounded bg-zinc-900 ${weekDays.includes('6') ? 'bg-violet-900' : ''}`}
                >
                  S
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>
            <div className="flex flex-col gap-2 flex-1 mt-2">
              <label htmlFor="hourStart" className="font-semibold">Horário de funcionamento</label>
              <div className="grid grid-cols-2 gap-2">
                <Input name="hourStart" id="hourStart" type="time" placeholder="De" />
                <Input name="hourEnd" id="hourEnd" type="time" placeholder="Até" />
              </div>
            </div>
          </div>

          <label className="mt-4 flex gap-2 text-sm items-center">
            <Checkbox.Root
              checked={useVoiceChannel}
              className='w-6 h-6 p-1 rounded bg-zinc-900'
              onCheckedChange={(checked) => {
                if (checked == true) {
                  setUseVoiceChannel(true);
                } else {
                  setUseVoiceChannel(false);
                }
              }}
            >
              <Checkbox.Indicator>
                <Check className='w-4 h-4 text-emerald-400' />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Possui cardápio?
          </label>

          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              type="button"
              className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
            >
              Cancelar
            </Dialog.Close>
            <button
              type="submit"
              className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
            >
              <MapTrifold className="w-6 h-6" />
              Publicar comercio
            </button>
          </footer>
        </form>
      </Dialog.Content>

    </Dialog.Portal>
  )
}


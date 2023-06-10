import './screenButton.css'

export default function ScreenButton({buttonName}) {

    return(
        <button className=' hand-cursor bg-secondary-transparent hover:bg-secondary-transparent-hover text-secondary border-secondary cursor-pointer border-2 rounded-xl font-bold 2xl:w-72 xl:w-60 py-[0.5px]'>{buttonName}<span className='bounce-arrow'><br/>&darr;&darr;&darr;</span></button>

    )
}
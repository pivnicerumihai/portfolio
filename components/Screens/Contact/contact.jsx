import ScreenButton from "@/components/ScreenButton/ScreenButton";

export default function Contact() {
  return (
    <div className="items-center flex flex-col align-center justify-center px-5">
     <p className="text-white text-2xl font-sans screen-typing-effect"> <b>Let's Connect</b> </p>
      <p className="text-white text-sm font-sans screen-typing-effect mt-10">
       I'd love to hear about your project, discuss your ideas,
        or just chat about the latest in tech. 
        
        <p className="mt-2">Feel free to reach out to me
        through any of the channels below. </p>
        <p className='mt-2'>Email: mihai.webdeveloper@example.com</p>
        <p className='mt-2'>  LinkedIn: linkedin.com/in/mihai-webdeveloper</p>
        <p className='mt-2'> GitHub:
        github.com/mihai-webdeveloper </p>
        <p className='mt-2'>Phone: +1-234-567-8901 </p>
        <p className='mt-2'>Or, if you prefer,
        you can simply fill out the form below and I'll get back to you as soon
        as possible.</p>
      </p>
      <button className=' hand-cursor bg-secondary-transparent hover:bg-secondary-transparent-hover text-secondary border-secondary cursor-pointer border-2 rounded-xl font-bold 2xl:w-72 xl:w-60 py-[7px]'>&nbsp;&nbsp;Contact Form<span className='bounce-arrow'> &nbsp;&nbsp;&rarr;	</span></button>

    </div>
  );
}

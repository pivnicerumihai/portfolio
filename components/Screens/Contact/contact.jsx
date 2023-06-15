import ScreenButton from "@/components/ScreenButton/ScreenButton";

export default function Contact({openContactForm}) {
  return (
    <div className="flex flex-col justify-between items-center h-full px-2 text-center">
    <p className="text-white text-2xl xl:text-2xl font-sans screen-typing-effect mt-10"> <b>Let's Connect</b> </p>
      <p className="text-white text-md xl:text-md font-sans screen-typing-effect">
       I'd love to hear about your project, discuss your ideas,
        or just chat about the latest in tech. 
        
        <p >Feel free to reach out to me
        through any of the channels below. </p>
        <p >Email: mihai.webdeveloper@example.com</p>
        <p >  LinkedIn: linkedin.com/in/mihai-webdeveloper</p>
        <p > GitHub:
        github.com/mihai-webdeveloper </p>
        <p >Phone: +1-234-567-8901 </p>
        <p >Or, if you prefer,
        you can simply fill out the form below and I'll get back to you as soon
        as possible.</p>
      </p>
      <button onClick={openContactForm} className='mb-10 hand-cursor bg-secondary-transparent hover:bg-secondary-transparent-hover text-secondary border-secondary cursor-pointer border-2 rounded-xl font-bold 2xl:w-72 xl:w-60 py-[7px]'>&nbsp;&nbsp;Contact Form<span className='bounce-arrow'> &nbsp;&nbsp;&rarr;	</span></button>

    </div>
  );
}

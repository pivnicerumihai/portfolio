import ScreenButton from "@/components/ScreenButton/ScreenButton";

export default function AboutMe() {
  return (
    <div className="flex flex-col justify-between items-center h-full">
      <p className="text-white text-2xl font-sans screen-typing-effect mt-10">
        Meet The Developer
      </p>

      <p className="text-white text-center text-md font-sans screen-typing-effect-2">
        Hello, I'm Mihai, a committed web developer with a passion for front-end
        development. I pride myself on my problem-solving skills, dedication to
        meeting deadlines, and ability to deliver under pressure.
      <br/>

        I'm excited about the future of technology and my role in shaping it.
        Let's create something extraordinary together.
      <br/>

        Click the button below for more information about my experience
        ,education and hobbies.
      </p>
      <div className='mb-10'>
      <ScreenButton buttonName={"Experience & Education"} />
      </div>
    </div>
  );
}

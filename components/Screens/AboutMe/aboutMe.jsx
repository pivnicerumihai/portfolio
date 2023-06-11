import ScreenButton from "@/components/ScreenButton/ScreenButton";

export default function AboutMe() {
  return (
    <div className="items-center flex flex-col align-center justify-center">
      <p className="text-white text-2xl font-sans screen-typing-effect">
        Meet The Developer
      </p>
      <br />

      <p className="text-white text-center text-sm font-sans screen-typing-effect-2">
        Hello, I'm Mihai, a committed web developer with a passion for front-end
        development. I pride myself on my problem-solving skills, dedication to
        meeting deadlines, and ability to deliver under pressure.
      </p>
      <br />

      <p className="text-white text-center text-sm font-sans screen-typing-effect-2">
        I'm excited about the future of technology and my role in shaping it.
        Let's create something extraordinary together.
      </p>
      <br />

      <p className="text-white text-center text-sm font-sans screen-typing-effect-2">
        Click the button below for more information about my experience
        ,education and hobbies.
      </p>
      <br />
      <br />
      <ScreenButton buttonName={"Experience & Education"} />
    </div>
  );
}

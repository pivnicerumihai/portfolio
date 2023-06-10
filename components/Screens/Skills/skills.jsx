import ScreenButton from '@/components/ScreenButton/ScreenButton';
export default function Skills() {
  return (
  
    <div className="text-center items-center flex flex-col align-center justify-center w-[54%] 2xl:mt-[8%] xl:mt-[15%] ml-[2%] 2xl:h-[65%]  xl:h-[48%]">
        <div style={{
        backgroundImage: `url(/images/skills.png)`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "80vh", 
        zIndex: 1,
      }}>
      <p className="text-secondary text-2xl font-sans screen-typing-effect">
        <b>Skills</b>
      </p>
      
      <br />
      <p className='text-secondary text-sm font-sans screen-typing-effect'>
        Bridging creativity with code, I specialize as a <b>Web Developer</b> and <b>UI
        Tester</b>, building immersive digital experiences that solve real-world
        problems. My toolkit is brimming with JavaScript, ReactJS, Tailwind CSS
        for seamless frontend development, coupled with backend technologies
        like Express.js, MySQL and Postgres.
        <br />
        <br />
        My work isn't just about creating; it's about ensuring the reliability
        of those creations. Through meticulous UI Testing with Cypress and
        Selenium, I strive to ensure a bug-free user experience.
        <br />
        <br />
        For a more in-depth look at my skills and experiences, check out my
        comprehensive skills page.
      </p>
      <br/>
      <ScreenButton buttonName={"Skills & Technologies"} />
    </div>
    </div>
  );
}

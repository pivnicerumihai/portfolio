import ScreenButton from '@/components/ScreenButton/ScreenButton';
export default function Skills() {
  return (
  
 
        <div style={{
        backgroundImage: `url(/images/skills.png)`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%", 
        zIndex: 1,
      }}>
   <div className="flex flex-col justify-between items-center h-full px-5">
      <p className="text-white text-2xl font-sans screen-typing-effect  mt-10">
        Skills
      </p>
      
      <br />
      <p className='text-white text-sm font-sans screen-typing-effect'>
        Bridging creativity with code, I specialize as a <b>Web Developer</b> and <b>UI
        Tester</b>, building immersive digital experiences that solve real-world
        problems. My toolkit is brimming with JavaScript, ReactJS, Tailwind CSS
        for seamless frontend development, coupled with backend technologies
        like Express.js, MySQL and Postgres.
        <br />
        <br />
        For a more in-depth look at my skills and experiences, check out my
        comprehensive skills page.
      </p>
      <br/>
      <div className='mb-10'>
      <ScreenButton buttonName={"Skills & Technologies"} />
      </div>
    </div>
    </div>
  );
}

'use client'
import React,{useState} from "react";
import SideButton from "../SideButton/sideButton";
import Screen from '../Screen/screen'
import "./hero.css";
import AboutMe from "../Screens/AboutMe/aboutMe";
import Skills from "../Screens/Skills/skills";
import Contact from "../Screens/Contact/contact";
import Tilt from 'react-parallax-tilt';

export default function Hero() {
  const [screenName,setScreenName] = useState('Initial')

  const changeScreen = (screenName) => { 
    setScreenName(screenName)
  }
  return (
    <Tilt 
      className="w-full h-[100vh] bg-center bg-cover"
      style={{ backgroundImage: `url(/images/home-2.png)` }}
      tiltMaxAngleX={1}
      tiltMaxAngleY={.5}
    >

      <div className='flex flex-row h-[100%]'>
      
      <div className={`skewedSection display flex flex-col relative items-center p-6 2xl:h-[60%] xl:h-[50%] gradient-border  2xl:mt-[8.5%] xl:mt-[14%]  2xl:w-[20.3%] xl:w-[25%] 2xl:ml-[5.5%] xl:ml-[0.3%]`}>
        <div>
          <div className>
            <h1 className="2xl:text-3xl xl:text-xl italic text-secondary-transparent-2 font-sans ">
              Journey Ahead
            </h1>
          </div>
        </div>
        <div className={`relative mt-[5%]`}>
          <SideButton onChangeScreen={()=>changeScreen('aboutme')} buttonName={"Meet the Developer"} />
        </div>
        <div className={`relative mt-[5%]`}>
          <SideButton onChangeScreen={()=>changeScreen('skills')} buttonName={"Skills & Technologies"} />
        </div>
       
        <div className={`relative mt-[5%]`}>
          <SideButton onChangeScreen={()=>changeScreen('contact')} buttonName={"Contact"} />
        </div>
      </div>
      <div className="screen items-center flex flex-col align-center justify-center w-[57%] 2xl:mt-[8%] xl:mt-[15%] 2xl:h-[65%]  xl:h-[48%]">

      {screenName === 'Initial' ? <Screen screenName={screenName} /> : screenName === 'aboutme' ? <AboutMe/> : screenName === 'skills' ? <Skills/> : <Contact/>}
      </div>
      </div>
    </Tilt>
  );
}

'use client'
import React,{useState} from "react";
import SideButton from "../SideButton/sideButton";
import Screen from '../Screens/Default/default'
import "./hero.css";
import AboutMe from "../Screens/AboutMe/aboutMe";
import Skills from "../Screens/Skills/skills";
import Contact from "../Screens/Contact/contact";
import Tilt from 'react-parallax-tilt';
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Default from "../Screens/Default/default";
import ContactForm from "../Screens/ContactForm/contactForm";

export default function Hero() {
  const [screenName,setScreenName] = useState('default')

  const changeScreen = (screenName) => { 
    setScreenName(screenName)
  }
  return (
    <Tilt 
      className="w-full h-[90vh] bg-center bg-cover"
      style={{ backgroundImage: `url(/images/home-2.png)` }}
      tiltMaxAngleX={1}
      tiltMaxAngleY={0}
      tiltReverse={true}
      scale={1.02}
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
    <SwitchTransition>
        <CSSTransition 
            key={screenName} 
            addEndListener={(node, done) => {
                node.addEventListener("transitionend", done, false);
            }}
            classNames='fade'
        >
            <div className='w-full flex items-center justify-center text-center h-[100%] neon-text'>
            {screenName === 'default' && <Default />}
            {screenName === 'aboutme' && <AboutMe />}
            {screenName === 'skills' && <Skills />}
            {screenName === 'contact' && <Contact openContactForm={()=>changeScreen('contact_form')}/>}
            {screenName === 'contact_form' && <ContactForm />}
            </div>
        </CSSTransition>
    </SwitchTransition>
</div>
      </div>
    </Tilt>
  );
}

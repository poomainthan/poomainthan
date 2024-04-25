import "./App.css";

import Porfile from "./assets/me.jpg";
import Project1 from "./assets/UVMoneyDetector.jpg";
import Project2 from "./assets/project02.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/AOSP.jpeg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import git from "./assets/git.svg";
import img from "./assets/hero-lines.svg";
import ArrowDown from "./assets/arrow-down.svg";
import gif from "./assets/unnamed.gif";

import { useEffect, useState } from "react";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if(window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return() => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  return (
    <div id="home">
    <div className="max-w-6xl m-auto relative">
      <header className={`${scrolling ? ' border-b border-gray-900' : ''}  fixed left-0 bg-black right-0 top-0 z-20`} id="home">
        <div className="container m-auto px-4 py-6 max-w-full bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center ">
            <div>
              {
              <a href="#home" className="font-bold text-2xl text-gray-300 hover:text-white cursor-pointer"><img src={gif} width={30} height={30} /></a>
              }
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a href="#projects" className="text-gray-300 hover:text-white cursor-pointer">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="text-gray-300 hover:text-white cursor-pointer">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#aboutme" className="text-gray-300 hover:text-white cursor-pointer">
                    About me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28 body place-items-center" style={{ backgroundImage:`url(${img})`, backgroundPositionX:"center", backgroundRepeat:"no-repeat", backgroundPosition:"cover"}}>

        {
        /* Intro/Banner section */
        }

        <section >
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6  sm:text-left">
            <div>
              <h2 className="font-bold text-4xl ">Hi, Its Poomainthan M,</h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text">Tech Enthusiast...!!!</h2>
              </div>
              <br>
                </br>
                <br>
                </br>
              <div>
                <p className="mt-4 text-gray-400 ">
                Hi, I{"’"}m Poomainthan M , currently am a 3rd-year B.Tech/CSBS Student.
                My goal is to Cloud Engineer (DevOps). Let{"’"}s work together.
                </p>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <form method="get" action="https://drive.google.com/file/d/1RR5jzW5d5xc3gaSrhH436owh_88lfCil/view?usp=sharing">
                <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-400 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-500">
                 View Resume!!
                </button>
                </form>
              </div>
            </div>
            <div className="relative">
              <div className="after:bg-[url('./src/large-long.png') after:bg-contain after:block  after:w-[400px] after:h-[400px] after:absolute  after:top-20 after:-left-40 sm:after:-left-70 before:bg-[url('./src/small.png') before:bg-contain before:block before:bg-no-repeat before:w-[550px] before:h-[550px] before:absolute before:bottom-0 before:-right-50 ">
                <img src={Porfile} className="relative z-10 w-[200px] m-auto sm:w-[550px] profile-picture" />
              </div>
            </div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12 flex flex-col">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-xl p-5 flex-1">
                <img src={Project1} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                Counterfiet Deterrence System using UV 
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                This  project was done  as part of the and <b><u>National level MOE conducted Hackathon (KAVACH 2023) </u></b>coursework for my Computer Science and Business Systems(CSBS) degree at
                  A simple and efficient system for detecting counterfeit products using Ultraviolet(UV) light technology. The project was developed
                  an Artificial Intelligence based system for <b>detecting counterfeit products</b> in  the marketplace utilizing Ultraviolet in Photocopy machine.
                </p>
                <br>
                </br>
                <form>
                <div className="flex mt-12 gap-2">
  

                 
                  <button formMethod="get" formAction="https://github.com/poomainthan/Counterfiet-Deterrence-System-IoT-.git" className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500" >
                    Checkout github
                  </button>
                  
      
                </div>
                </form>
              </div>
              <div className="border border-gray-500 rounded-xl p-5 flex-1">
                <img src={Project2} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Cloud Hosting Space Renting System (Cloudy)
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Developed a IaaS for cloud computing. It is an API based web application which provides services to create, delete and manage virtual machines
                  A simple Iaas platform built with ASP.NET Core,Entity Framework and C# C-Sharp .
                  It provides virtual servers to users on cloud.
                  <br>
                  </br>
                  <br>
                  </br>
                </p>
                <form>
                <div className="flex mt-12 gap-2">
                  <button formMethod="get" formAction="https://github.com/poomainthan/Cloudy-The_Cloud_Space_Renting.git" className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500" >
                    Checkout github
                  </button>
                </div>
                </form>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-xl p-5 flex-1">
                <img src={Project3} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                React and Tailwind based Landing page
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive React and Tailwind CSS layout for front-end
                </p>
                <br>
                  </br>
                  <br>
                  </br>

                <form>
                <div className="flex mt-12 gap-2">
                  <button formMethod="get" formAction="https://github.com/poomainthan/poomainthan.git" className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500" >
                    Checkout github
                  </button>
                </div>
                </form>
              </div>
              <div className="border border-gray-500 rounded-xl p-5 flex-1">
                <img src={Project4} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  AOSP Architecture x86_64 based  Android System
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  
                  AOSP(Android Open Source Project) is an open source project that develops the core software of Android operating system
                  Documentation and analysis of the  X86_64 architecture in
                  the Android Open Source Project{"'"}s kernel.I Build and reverse Engineered some kernels and optimized thE whole System/Project(AOSP).
                  Espicially for gamers who like playing mobile games on Pc.
                  <br></br>
                  Check out my  project here <a href="https://t.me/pgtvgamers"><b><u>PGTVGAMERS</u></b></a>
                </p>
                <form>
                <div className="flex mt-12 gap-2">
                  <button formMethod="get" formAction="https://github.com/poomainthan/Androidx86_based_PGTV_OS.git" className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500" >
                    Checkout github
                  </button>
                  
      
                </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Technoglies section */}
        <section className="py-10" id="technologies">
          
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">Technologies and Skills
            </h2>


            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                Androidx86
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  IoT
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  .NET
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Networking
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                Cybersecurity
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  IoT
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Teamwork
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Quick_learning
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative right-4.5 left-5">
                  Entrepreneurship_Development
                </p>
              </div>
            </div>


            
            









          </div>
        </section>
        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                
                <h4 className="absolute right-[830px] text-lg font-semibold ">
                  2021→2025</h4>
                <p>
                  Currently Pursing my B.Tech(CSBS) Bachelor degree in KIT-KalaignarKarunanidhi Institute Of Technology
                  Coimbatore,TamilNadu-641402
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute right-[830px] text-lg font-semibold">2019→2021</h3>
                <p>
                  HSC - 12th Government Higher Secondary School in Dharapuram,Tirupur District-638641
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute right-[830px] text-lg font-semibold">2018→2019</h3>
                <p>
                SSLC- 10th IGMS-Indhira Gandhi Matriculations  School,Dharapuram,Tirupur District-638641
                </p>
              </div>
              

            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-center px-4 py-6">
      
          <div>
            <ul className="flex gap-4 justify-end items-center">
              <li>
                <a href="https://github.com/poomainthan">
                  <img src={git} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={Instagram} className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0,0);
          }}>
            <img src={ArrowDown} />
          </button>
        )
      }
    </div>
    </div>
  );
}

export default App;
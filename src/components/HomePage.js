import React , {useEffect,useState} from 'react';
import { motion } from 'framer-motion';
import {  LuBuilding2, LuUser } from 'react-icons/lu';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import hero_img from '../img/hero_img.svg'
import JobCard from './JobCard';
import sparkle from '../img/sparkle.png'
import companies from '../img/companies.png'
import { useNavigate } from "react-router-dom";
import google from '../img/companiesLogo/google.svg'
import fb from '../img/companiesLogo/fb.svg'
import slack from '../img/companiesLogo/slack.svg'
import insta from '../img/companiesLogo/insta.svg'
import snap from '../img/companiesLogo/snap.svg'
import airbnb from '../img/companiesLogo/airbnb.svg'
import apple from '../img/companiesLogo/apple.svg'
import mcd from '../img/companiesLogo/mcd.svg'
import Twitter from '../img/companiesLogo/twitter.svg'
import xd from '../img/companiesLogo/xd.svg'
import person1 from '../img/freelancers/person1.png'
import person2 from '../img/freelancers/person2.png'
import person3 from '../img/freelancers/person3.png'
import person4 from '../img/freelancers/person4.png'
import Navbar from './Navbar';


const HomePage = () => {
  const navigate = useNavigate();


 
  

  return (
    <div className="bg-white ">

      <Navbar/>

      <main className="container bg-white mx-auto py-8 px-24">
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6
          }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{once:true}}
        className='flex flex-col justify-center items-center px-24'>
          <div className='flex  justify-center items-center h-[85vh] w-[78vw] rounded-3xl bg-[#FFF0EC] gap-5  overflow-hidden'>
            <div className='flex flex-col flex-[1.1] text-start gap-5 p-12 '>
              <p className='text-[#575757]'>
                More than <span className='text-black '>800+</span> Companies found their right talent
              </p>
              <h1 className='text-6xl flex-wrap font-medium'>
                Find The <span className='font-bold underline underline-offset-8 decoration-yellow-500'>Best Talent</span>
              </h1>
              <p className='text-[#575757] '>
                We can connect you with our extensive network of Freelancers across the world to find your best fit.
              </p>


              <div className='flex justify-around items-center'>
                <motion.div 
                initial={{ scale:0, opacity: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.4
                }}
                whileInView={{ scale: 1,opacity: 1 }}
                viewport={{once:true}}
                className='flex flex-col justify-center items-start bg-white rounded-3xl w-56 h-52 p-3'>
                  <motion.div 
                  initial={{ scale:0, opacity: 0 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.4
                  }}
                  whileInView={{ scale: 1,opacity: 1 }}
                  viewport={{once:true}}
                  className='p-3 bg-white mb-2' >
                    <LuBuilding2 className=' scale-150' />
                  </motion.div>
                  <h1 className='text-black font-bold mb-2'>
                    as Company
                  </h1>
                  <p className='text-sm font-[Pathway Extreme] mb-4  text-[#898989]'>
                    Get oppurtunity to work with big companies
                  </p>
                  <button onClick={()=>{navigate('/auth')}} className='flex justify-center items-center rounded-[50px] px-4 py-2 font-semibold bg-[#FFF0EC] self-end'>
                    Get Started <BsFillArrowRightCircleFill className='inline ml-2 scale-125 ' />
                  </button>

                </motion.div>
                <motion.div 
                initial={{ scale:0, opacity: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.5
                }}
                whileInView={{ scale: 1,opacity: 1 }}
                viewport={{once:true}}
                className='flex flex-col bg-[#FFF0EC] border-2 border-[#bebebe] rounded-3xl w-56 h-52 p-3'>
                  <div className='p-3 mb-2' >
                    <LuUser className=' scale-150' />
                  </div>
                  <h1 className='text-black font-bold mb-2'>
                    as Freelancer
                  </h1>
                  <p className='text-sm font-[Pathway Extreme] mb-4  text-[#898989]'>
                    Find the best frelancer with professional experience
                  </p>
                  <button onClick={()=>{navigate('/auth')}} className='flex justify-center items-center rounded-[50px] px-4 py-2 font-semibold bg-white self-end'>
                    Get Started <BsFillArrowRightCircleFill className='inline ml-2 scale-125 ' />
                  </button>
                </motion.div>
              </div>
            </div>
            <div className='flex-[0.9] flex justify-end items-end relative'>
              <div className='bg-yellow-300 h-[650px] w-[650px] rounded-full right-0 -mr-72 mb-24 bottom-24 z-0 absolute '>

              </div>
              {/* <div className='speech-bubble h-24 w-40 text-white bg-[#FD3C8D] self-center rounded-lg p-2  '>
                      I got the best candidates for my company
                    
                    </div> 
                     */}
              <img className='z-10 h-[600px] mt-20 scale-110 ' src={hero_img} alt="" srcset="" />
            </div>


          </div>

          <motion.div 
          initial={{ scale:0.5, opacity: 0}}
          transition={{
            delay: 0.3,
            duration: 0.4
          }}
          whileInView={{ scale: 1,opacity: 1 }}
          viewport={{once:true}}
          className='flex bg-white h-44 w-[60vw] shadow-2xl rounded-3xl -mt-12 z-20'>
            <div className='flex justify-center items-center flex-col flex-[0.33]'>
              <div className='text-[#BEBEBE] font-medium text-md'>
                Freelancer
              </div>
              <div className='text-3xl font-bold'>
                620K+
              </div>
            </div>

            <div className='border-2 border-[#ececec] h-28 self-center '>

            </div>

            <div className='flex justify-center items-center flex-col flex-[0.33]'>
              <div className='text-[#BEBEBE] font-medium text-md'>
                Job Offers
              </div>
              <div className='text-3xl font-bold'>
                420K+
              </div>
            </div>

            <div className='border-2 border-[#ececec] h-28 self-center '>

            </div>

            <div className='flex justify-center items-center flex-col flex-[0.33]'>
              <div className='text-[#BEBEBE] font-medium text-md'>
                Companies
              </div>
              <div className='text-3xl font-bold'>
                310K+
              </div>
            </div>



          </motion.div>
        </motion.section>


        <section className='flex flex-col justify-center items-center mt-20 w-full px-24 '>
          <div className='font-bold text-3xl flex flex-col justify-start '>
            <h1 className=''>New Jobs</h1>
            <p className='text-sm text-[#BEBEBE] font-semibold'>More than 250 jobs everyday</p>

          </div>

          <div className='flex flex-wrap mt-6 self-center justify-center'>
            <JobCard logo={mcd} name={"McDonalds"} role={"Sr. Web Developer"} description={"Cooperate with web designers to match visual design intent"} salary={15000} location={"MH,India"}/>
            <JobCard logo={apple} name={"Apple"} role={"Jr. Web Developer"} description={"Cooperate with web designers to match visual design intent"} salary={48000} location={"KN,India"}/>
            <JobCard logo={google} name={"Google"} role={"Sr. Web Developer"} description={"Cooperate with web designers to match visual design intent"} salary={25000} location={"Up,India"}/>
            <JobCard logo={fb} name={"Facebook"} role={"Jr. Web Developer"} description={"Cooperate with web designers to match visual design intent"} salary={65000} location={"BI,India"}/>
            <JobCard logo={snap} name={"Snapchat"} role={"Sr. Web Developer"} description={"Cooperate with web designers to match visual design intent"} salary={10000} location={"MH,India"}/>
            <JobCard logo={insta} name={"Instagram"} role={"Sr. Web Developer"} description={"Cooperate with web designers to match visual design intent"} salary={45000} location={"MH,India"}/>
            <JobCard logo={slack} name={"Slack"} role={"Jr. Web Developer"} description={"Cooperate with web designers to match visual design intent"} salary={47000} location={"RJ,India"}/>
            <JobCard logo={airbnb} name={"Airbnb"} role={"Sr. Web Developer"} description={"Cooperate with web designers to match visual design intent"} salary={65000} location={"MH,India"}/>
            <JobCard logo={xd} name={"Adobe"} role={"Jr. Web Developer"} description={"Cooperate with web designers to match visual design intent"} salary={290000} location={"MH,India"}/>
            <JobCard logo={Twitter} name={"Twitter"} role={"Sr. Web Developer"} description={"Cooperate with web designers to match visual design intent"} salary={36000} location={"MP,India"}/>
          </div>

          <motion.button 
          initial={{ y: 20, opacity: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.5
          }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{once:true}}
          className='rounded-[50px] bg-[#f7ded7] px-4 py-2 mt-2 font-semibold cursor-pointer hover:shadow-2xl hover:scale-110 duration-200' >Show More</motion.button>

        </section >

        <motion.section 
        initial={{ y: 30, opacity: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.3
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{once:true}}
        className='flex justify-center items-center mt-20 py-2 px-24'>
          <img src={companies} alt="" srcset="" />
        </motion.section>

        <section className='flex justify-center items-center mt-20 '>

          <motion.div 
          initial={{ y: 30, opacity: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.5
          }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{once:true}}
          className='flex flex-col w-[75%] h-[550px] rounded-3xl bg-black text-white p-4'>

            <motion.div 
            initial={{ scale:0, opacity: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.4
            }}
            whileInView={{ scale: 1,opacity: 1 }}
            viewport={{once:true}}
            className='flex justify-between items-center'>
              <img className='h-48 z-20' src={sparkle} alt="" srcset="" />
              <h1 className='text-3xl font-bold mr-28 text-start'>
                Top Rated <br />Freelancers
              </h1>
            </motion.div>
            <div className='flex justify-center items-center'>

              <motion.div 
              initial={{ scale:0, opacity: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.4
              }}
              whileInView={{ scale: 1,opacity: 1 }}
              viewport={{once:true}}
              className='flex flex-col justify-center items-center mr-4'>
                <div className='h-52 w-48 bg-[#FFA9A8] rounded-3xl flex justify-center items-end'>
                  <img className='h-44 w-40 ' src={person1} alt="" srcset="" />
                </div>
                <div className='bg-white text-black rounded-2xl px-4 py-3 -mt-12 w-[80%] flex flex-col justify-start items-start'>
                  <h1 className='font-bold text-lg'>E. Howard</h1>
                  <p className='font-semibold text-xs text-[#BEBEBE] text-start'>Web Designer</p>
                </div>
              </motion.div>
              <motion.div 
              initial={{ scale:0, opacity: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.4
              }}
              whileInView={{ scale: 1,opacity: 1 }}
              viewport={{once:true}}
              className='flex flex-col justify-center items-center mr-4'>
                <div className='h-52 w-48 bg-[#ECB7FF] rounded-3xl flex justify-center items-end'>
                  <img className='h-44 w-40 ' src={person2} alt="" srcset="" />
                </div>
                <div className='bg-white text-black rounded-2xl px-4 py-3 -mt-12 w-[80%] flex flex-col justify-start items-start'>
                  <h1 className='font-bold text-lg'>Jane Cooper</h1>
                  <p className='font-semibold text-xs text-[#BEBEBE] text-start'>Graphic Designer</p>
                </div>
              </motion.div>
              <motion.div 
              initial={{ scale:0, opacity: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.4
              }}
              whileInView={{ scale: 1,opacity: 1 }}
              viewport={{once:true}}
              className='flex flex-col justify-center items-center mr-4'>
                <div className='h-52 w-48 bg-[#D5FFB4] rounded-3xl flex justify-center items-end'>
                  <img className='h-44 w-40 ' src={person3} alt="" srcset="" />
                </div>
                <div className='bg-white text-black rounded-2xl px-4 py-3 -mt-12 w-[80%] flex flex-col justify-start items-start'>
                  <h1 className='font-bold text-lg'>Robert Fox</h1>
                  <p className='font-semibold text-xs text-[#BEBEBE] text-start'>Android Developer</p>
                </div>
              </motion.div>
              <motion.div 
              initial={{ scale:0, opacity: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.4
              }}
              whileInView={{ scale: 1,opacity: 1 }}
              viewport={{once:true}}className='flex flex-col justify-center items-center mr-4'>

                <div className='h-52 w-48 bg-[#B0C6FE] rounded-3xl flex justify-center items-end'>
                  <img className='h-44 w-40 ' src={person4} alt="" srcset="" />
                </div>
                <div className='bg-white text-black rounded-2xl px-4 py-3 -mt-12 w-[80%] flex flex-col justify-start items-start'>
                  <h1 className='font-bold text-lg'>John Snow</h1>
                  <p className='font-semibold text-xs text-[#BEBEBE] text-start'>HR Manager</p>
                </div>
              </motion.div>
         
            </div>

            <motion.div 
            initial={{ scale:0, opacity: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.4
            }}
            whileInView={{ scale: 1,opacity: 1 }}
            viewport={{once:true}}
            className='flex justify-center items-center self-center mt-8 px-4 py-2 cursor-pointer rounded-[50px] border-2 border-[#616060] w-[150px] hover:bg-white hover:text-black duration-300'>
              Show More
            </motion.div>
          </motion.div>
        </section>


        <section 
       
        className=' flex flex-col justify-center items-start text-black p-56 mt-1 text-start'>
          <motion.h1 
           initial={{ y: 30, opacity: 0 }}
           transition={{
             delay: 0.3,
             duration: 0.4
           }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{once:true}}className='text-3xl font-bold'>

            "As the CEO of Acme Industries, I am thrilled with the outstanding candidates <span className='underline font-bold underline-offset-8 decoration-yellow-500 decoration-4'>HireMonk</span> provided. Their in-depth understanding of our company's needs, meticulous screening process, and unwavering professionalism made the hiring process efficient and successful"
          </motion.h1>

          <motion.div 
           initial={{ y: 30, opacity: 0 }}
           transition={{
             delay: 0.4,
             duration: 0.4
           }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{once:true}}
           className='border-2 border-[#ecdcdc] w-[95%] mt-10 '>

          </motion.div>
          <motion.p 
           initial={{ y: 30, opacity: 0 }}
           transition={{
             delay: 0.5,
             duration: 0.4
           }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{once:true}}
           className='text-xl text-[#151515] font-bold mt-10'>
            John Doe
          </motion.p>
          <motion.p 
           initial={{ y: 30, opacity: 0 }}
           transition={{
             delay: 0.5,
             duration: 0.4
           }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{once:true}}
           className='text-sm mt-2 text-[#acacac] font-semibold'>

            CEO, Acme Industries
          </motion.p>
        </section>

      </main>

      <motion.footer 
       initial={{ y: -30, opacity: 0, scale:0.75 }}
       transition={{
         delay: 0.3,
         duration: 0.1
       }}
       whileInView={{ y: 0, opacity: 1,scale:1 }}
       viewport={{once:true}}
       className=" bg-black text-white shadow-md  px-32 pt-10 flex justify-between items-center">
        <motion.div 
         initial={{ x: -90, opacity: 0 }}
         transition={{
           delay: 0.7,
           duration: 0.4
         }}
         whileInView={{ x: 0, opacity: 1 }}
         viewport={{once:true}}
         className='flex flex-col text-bold text-start '>
        <h2 className='font-bold font-[Oswald] text-4xl'><span className='font-[Oswald] font-medium text-yellow-600'>hire</span>Monk</h2>           
        <p className='text-xl font-normal mt-3 text-[#BEBEBE] '> 11, Vittal Mallya Rd, KG Halli, KP Nagar<br /> Bengaluru, Karnataka 560001
</p>
        <img className='h-48 z-20 ' src={sparkle} alt="" srcset="" />
        </motion.div>
          <motion.div
           initial={{ x: 90, opacity: 0 }}
           transition={{
             delay: 0.7,
             duration: 0.4
           }}
           whileInView={{ x: 0, opacity: 1 }}
           viewport={{once:true}}>
          <div className='flex gap-10 text-start text-2xl font-semibold'> 

          <div className='flex flex-col gap-2'>
                 <a href="/">Careers</a>       
                 <a href="/">About Us</a>       
                 <a href="/">Conatct Us</a>       
          </div>
          <div className='flex flex-col gap-2'>
          <a href="/">Companies</a>       
                 <a href="/">Freelancers</a>       
                 <a href="/">News</a>
          </div>

          </div>
        <p className="text-center text-[#fafafa] mt-20">&copy; 2023 Your Company. All rights reserved.</p>
        </motion.div>
      </motion.footer>
    </div>
  );
}

export default HomePage;

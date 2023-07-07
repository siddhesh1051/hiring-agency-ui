import React , {useEffect,useState} from 'react';
// import { motion } from 'framer-motion';
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


const HomePage = () => {
  const navigate = useNavigate();

  const [isLogin, setisLogin] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem("email");
    console.log(user)
    user==='' || user?
    setisLogin(true)
    :
    setisLogin(false)
  
    
  }, [])
  

  return (
    <div className="bg-white ">
      <header className="p-12 py-4 bg-white px-36 ">
        {/* Navigation bar */}
        <nav className="container mx-auto flex justify-between items-center px-4">
          <h2 className='font-bold font-[Oswald] text-4xl'><span className='font-[Oswald] font-medium text-gray-700 '>hire</span>Monk</h2>
          <div className='flex justify-between items-center'>

            <a href="/" className='mr-16'>Home</a>
            <a href="/" className='mr-16'>Blog</a>
            <a href="/" className='mr-16'>Parters</a>
            <a href="/" className='mr-16'>Contact Us</a>
          </div>{
          !isLogin?<button className='bg-gradient-to-r font-semibold text-[#4a4a4a] shadow-xl from-[#e7dc02] to-[#7d9300] py-2 px-6 rounded-[50px]'
            onClick={()=>{navigate('/auth')}}
          >
            
            Login</button>
          :<button className='bg-gradient-to-r font-semibold text-[#4a4a4a] shadow-xl from-[#e7dc02] to-[#7d9300] py-2 px-6 rounded-[50px]'
            onClick={()=>{navigate('/'); localStorage.removeItem('email'); localStorage.removeItem('password');setisLogin(false)}}
          >
            
            Logout</button>
}

        </nav>
      </header>

      <main className="container bg-white mx-auto py-8 px-24">
        <section className='flex flex-col justify-center items-center px-24'>
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
                <div className='flex flex-col justify-center items-start bg-white rounded-3xl w-56 h-52 p-3'>
                  <div className='p-3 bg-white mb-2' >
                    <LuBuilding2 className=' scale-150' />
                  </div>
                  <h1 className='text-black font-bold mb-2'>
                    as Company
                  </h1>
                  <p className='text-sm font-[Pathway Extreme] mb-4  text-[#898989]'>
                    Get oppurtunity to work with big companies
                  </p>
                  <button onClick={()=>{navigate('/auth')}} className='flex justify-center items-center rounded-[50px] px-4 py-2 font-semibold bg-[#FFF0EC] self-end'>
                    Get Started <BsFillArrowRightCircleFill className='inline ml-2 scale-125 ' />
                  </button>

                </div>
                <div className='flex flex-col bg-[#FFF0EC] border-2 border-[#bebebe] rounded-3xl w-56 h-52 p-3'>
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
                </div>
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

          <div className='flex bg-white h-44 w-[60vw] shadow-2xl rounded-3xl -mt-12 z-20'>
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



          </div>
        </section>


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

          <button className='rounded-[50px] bg-[#f7ded7] px-4 py-2 mt-2 font-semibold cursor-pointer'>Show More</button>

        </section >

        <section className='flex justify-center items-center mt-20 py-2 px-24'>
          <img src={companies} alt="" srcset="" />
        </section>

        <section className='flex justify-center items-center mt-20 '>

          <div className='flex flex-col w-[75%] h-[550px] rounded-3xl bg-black text-white p-4'>

            <div className='flex justify-between items-center'>
              <img className='h-48 z-20' src={sparkle} alt="" srcset="" />
              <h1 className='text-3xl font-bold mr-28 text-start'>
                Top Rated <br />Freelancers
              </h1>
            </div>
            <div className='flex justify-center items-center'>

              <div className='flex flex-col justify-center items-center mr-4'>
                <div className='h-52 w-48 bg-[#FFA9A8] rounded-3xl flex justify-center items-end'>
                  <img className='h-44 w-40 ' src={person1} alt="" srcset="" />
                </div>
                <div className='bg-white text-black rounded-2xl px-4 py-3 -mt-12 w-[80%] flex flex-col justify-start items-start'>
                  <h1 className='font-bold text-lg'>E. Howard</h1>
                  <p className='font-semibold text-xs text-[#BEBEBE] text-start'>Web Designer</p>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center mr-4'>
                <div className='h-52 w-48 bg-[#ECB7FF] rounded-3xl flex justify-center items-end'>
                  <img className='h-44 w-40 ' src={person2} alt="" srcset="" />
                </div>
                <div className='bg-white text-black rounded-2xl px-4 py-3 -mt-12 w-[80%] flex flex-col justify-start items-start'>
                  <h1 className='font-bold text-lg'>Jane Cooper</h1>
                  <p className='font-semibold text-xs text-[#BEBEBE] text-start'>Graphic Designer</p>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center mr-4'>
                <div className='h-52 w-48 bg-[#D5FFB4] rounded-3xl flex justify-center items-end'>
                  <img className='h-44 w-40 ' src={person3} alt="" srcset="" />
                </div>
                <div className='bg-white text-black rounded-2xl px-4 py-3 -mt-12 w-[80%] flex flex-col justify-start items-start'>
                  <h1 className='font-bold text-lg'>Robert Fox</h1>
                  <p className='font-semibold text-xs text-[#BEBEBE] text-start'>Android Developer</p>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center mr-4'>
                <div className='h-52 w-48 bg-[#B0C6FE] rounded-3xl flex justify-center items-end'>
                  <img className='h-44 w-40 ' src={person4} alt="" srcset="" />
                </div>
                <div className='bg-white text-black rounded-2xl px-4 py-3 -mt-12 w-[80%] flex flex-col justify-start items-start'>
                  <h1 className='font-bold text-lg'>John Snow</h1>
                  <p className='font-semibold text-xs text-[#BEBEBE] text-start'>HR Manager</p>
                </div>
              </div>
              {/* <div className='flex flex-col justify-center items-center mr-4'>
                          <div className='h-52 w-48 bg-[#FFCC90] rounded-3xl flex justify-center items-end'>
                            <img className='h-44 w-40 ' src={person} alt="" srcset="" />
                          </div>
                          <div className='bg-white text-black rounded-2xl px-4 py-3 -mt-12 w-[80%] flex flex-col justify-start items-start'>
                            <h1 className='font-bold text-lg'>My name</h1>
                            <p className='font-semibold text-xs text-[#BEBEBE] text-start'>graphic desssss</p>
                          </div>
                      </div> */}
            </div>

            <div className='flex justify-center items-center self-center mt-8 px-4 py-2 cursor-pointer rounded-[50px] border-2 border-[#616060] w-[150px]'>
              Show More
            </div>
          </div>
        </section>


        <section className=' flex flex-col justify-center items-start text-black p-56 mt-1 text-start'>
          <h1 className='text-3xl font-bold'>
            "As the CEO of Acme Industries, I am thrilled with the outstanding candidates <span className='underline font-bold underline-offset-8 decoration-yellow-500 decoration-4'>HireMonk</span> provided. Their in-depth understanding of our company's needs, meticulous screening process, and unwavering professionalism made the hiring process efficient and successful"
          </h1>

          <div className='border-2 border-[#ecdcdc] w-[95%] mt-10 '>

          </div>
          <p className='text-xl text-[#151515] font-bold mt-10'>
            John Doe
          </p>
          <p className='text-sm mt-2 text-[#acacac] font-semibold'>
            CEO, Acme Industries
          </p>
        </section>

      </main>

      <footer className=" bg-black text-white shadow-md  px-32 pt-10 flex justify-between items-center">
        <div className='flex flex-col text-bold text-start '>
        <h2 className='font-bold font-[Oswald] text-4xl'><span className='font-[Oswald] font-medium text-[#959595]'>hire</span>Monk</h2>           
        <p className='text-xl font-normal mt-3 text-[#BEBEBE] '> 11, Vittal Mallya Rd, KG Halli, KP Nagar<br /> Bengaluru, Karnataka 560001
</p>
        <img className='h-48 z-20 ' src={sparkle} alt="" srcset="" />
        </div>
          <div>
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
        </div>
      </footer>
    </div>
  );
}

export default HomePage;

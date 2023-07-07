import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Candidates from '../candidates.json'
import CandidateDiv from './CandidateDiv';
import { toast } from 'react-hot-toast';

const Search = () => {
    const [name, setname] = useState("");
    const [location, setlocation] = useState("");
    const [role, setrole] = useState("");


    // let filteredCandidates = Candidates.candidates.filter(candidate =>
    //     candidate.name.toLowerCase().includes(name.toLowerCase())
    // );



    const handleNamechange = (e) => {
        setname(e.target.value)
    }
    const handleLocationchange = (e) => {
        setlocation(e.target.value)
    }
    const handleRolechange = (e) => {
        setrole(e.target.value)
    }
    const handleSubmit = (e) => {
       
        toast.error("Select all fields")

  
    }


    let filteredCandidates = Candidates.candidates;




    filteredCandidates = filteredCandidates.filter(candidate =>
        candidate.name.toLowerCase().includes(name.toLowerCase())
    );
    console.log(filteredCandidates);
        
        filteredCandidates = Candidates.candidates.filter(candidate =>
            candidate.location.toLowerCase() === location.toLowerCase()
        );
        console.log(filteredCandidates);
     
    
   
        
  
        filteredCandidates = filteredCandidates.filter(candidate =>
            candidate.job_role.toLowerCase() === role.toLowerCase()
        );
     

    






    const uniqueCities = [...new Set(Candidates.candidates.map(candidate => candidate.location))];
    const uniqueRoles = [...new Set(Candidates.candidates.map(candidate => candidate.job_role))];

    return (
        <div className='bg-white px-2'>
            <Navbar />
            <div className='flex flex-col mt-10 justify-center items-center px-44 '>
                <div className='flex flex-col w-[100%]'>
                    <div className='flex '>

                        <input className="inputBox m-1 lg:ml-2 lg:w-[100%] w-[90%]  "
                            type="text"
                            placeholder="Enter Name of Candidate"
                            value={name}
                            onChange={(e) => handleNamechange(e)}

                        />

                        <select className="inputBox m-1 lg:ml-2 lg:w-[100%] w-[90%] " name="" id="" value={location} onChange={handleLocationchange}

                        >

                            <option value="">Select Location</option>
                            {uniqueCities.map((city, key) => (
                                <option key={key} value={city}>
                                    {city}
                                </option>
                            ))}

                        </select>




                    </div>

                    {/* <input className="inputBox m-1 lg:ml-2 lg:w-[50%] w-[90%]  "
                            type="text"
                            placeholder="Search by Location"
                            value={location}
                            onChange={(e) => handleLocationchange(e)}
                        />
                        

                        {/* <input className="inputBox m-1 lg:ml-2 lg:w-[100%] w-[90%]"
                            type="text"
                            placeholder="Search by Job Role"
                            value={role}
                            onChange={(e) => handleRolechange(e)}

                        /> */}

                    <div className='flex'>

                        <select className="inputBox m-1 lg:ml-2 lg:w-[100%] w-[90%]" name="" id="" value={role} onChange={handleRolechange}

                        >

                            <option value="">Select Role</option>
                            {uniqueRoles.map((job, key) => (
                                <option key={key} value={job}>
                                    {job}
                                </option>
                            ))}

                        </select>
                        <button onClick={handleSubmit} className='bg-[#ffcb3e] rounded-lg shadow-2xl w-[20%] mx-2 my-1 text-xl font-medium '>Search</button>

                    </div>

                    <div className='flex flex-col items-center justify-center mt-10'>
                        <div className='w-full h-16 flex justify-start items-center bg-[#0e0d04] shadow-lg border-2 border-[#e0dfd7] text-white mt-4 rounded-md hover:shadow-xl duration-200'>
                            <div className='flex-1  flex justify-center text-xl font-semibold '>Candidate's Name</div>
                            <div className='flex-1  flex justify-center text-xl font-semibold '>Age</div>
                            <div className='flex-1  flex justify-center text-xl font-semibold '>Location</div>
                            <div className='flex-1  flex justify-center text-xl font-semibold '>Role</div>

                        </div>



                        {   
                             filteredCandidates?.length !== 0 && filteredCandidates.map(it => (
                                <CandidateDiv name={it.name} age={it.age} location={it.location} role={it.job_role} />
                            ))
                        }

                        {
                            name === "" && location === "" && role === "" && Candidates.candidates?.length !== 0 && Candidates.candidates.map(it => (
                                <CandidateDiv name={it.name} age={it.age} location={it.location} role={it.job_role} />
                            ))
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Search

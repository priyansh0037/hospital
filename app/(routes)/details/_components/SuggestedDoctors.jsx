import { getDoctor } from '@/app/_utils/GlobalApi';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const SuggestedDoctors = () => {
  const [doctorList, setDoctorList] = useState([]);

  const getDoctorList = async () => {
    try {
      const res = await getDoctor;
      console.log("doctr lsi",res?.data?.data);
      setDoctorList(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctorList();
  }, []);

  return (
    <div className='mt-5 border p-5 rounded-lg'>

<h2 className='font-bold text-2xl mb-5'>Suggestion</h2>
    <div >
        {doctorList.length > 0 ? doctorList.map((doctor,index)=>(
            <div key={index} className='p-3 mt-5 border hover:border-primary rounded-lg hover:shadow-sm transition-all duration-300 '>
       <Image src={doctor?.attributes?.Images?.data?.attributes?.url} alt='doctors' width={500} height={200} className='h-[200px] w-full object-cover object-left-top rounded-lg' />

       <div className='mt-2 flex flex-col gap-1'>
        <h2 className='text-sm bg-blue-100 font-semibold text-primary px-3 py-2 rounded-lg w-fit '>{doctor?.attributes?.categories?.data[0]?.attributes?.Name}</h2>

        <h2 className='font-bold '>{doctor?.attributes?.Name}</h2>
        <h2 className='font-bold text-sm'>{doctor?.attributes?.Year_of_Experience} years Of Experience</h2>
        <h2 className=' text-sm'>{doctor?.attributes?.Adress} </h2>
        <Link href={`/details/${doctor?.id}`}>
        <h2 className='px-3 py-2 border border-primary rounded-full  text-sm mt-1  -translate-x-1 cursor-pointer w-fit hover:bg-primary hover:text-white'>Book Now</h2>
        </Link>
       </div>
        </div>

)) : 
// skeleteon effect
[1,2,3,4,5,6].map((item,index)=>(
    
    <div key={index} className='h-[220px] rounded-lg bg-slate-200 w-full animate-pulse'>
    </div>
    ))

    
  
}
    </div>
</div>
  );
};

export default SuggestedDoctors;

"use client"

// import { Button } from '@/components/ui/button'
import Hero from './_components/Hero'
import CategorySearch from './_components/CategorySearch'
import DoctorList from './_components/DoctorList'
import React, { useEffect, useState } from 'react'
import { getDoctor } from './_utils/GlobalApi'

const page = () => {


  const [doctorList , setDoctorList ] = useState([])

  const getDoctorList = async()=>{
      try {
         const res = await  getDoctor;
        //  console.log(res?.data?.data)
      setDoctorList(res?.data?.data)
      } catch (error) {
          console.log(error)
      }
  }

  useEffect(()=>{
      getDoctorList()
  },[])


  return (
    <div >
      <Hero/>
      <CategorySearch/>
      <DoctorList doctorList={doctorList} heading={"Popular Doctors"}/>
    </div>
  )
}

export default page
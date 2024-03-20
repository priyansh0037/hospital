"use client";

import { getDoctorById } from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import DoctorDetails from "../_components/DoctorDetails";
import SuggestedDoctors from "../_components/SuggestedDoctors";
import Loading from "../_components/Loading";

const Details = ({ params }) => {
  const [doctor, setDoctor] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const doctorbyId = async () => {
    try {
      const res = await getDoctorById(params.recordid);
      console.log(res);
      setDoctor(res?.data?.data);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.log(error);
      setLoading(false); // Set loading to false in case of error
    }
  };

  useEffect(() => {
    doctorbyId();
  }, []);

  return (
    <div className="p-5 md:px-20 ">
      <h2 className="font-bold  text-2xl">Details</h2>
      {loading ? ( // Show loading state while fetching data
        <div className="w-full h-screen flex items-center justify-center">
          <Loading/>
        </div>
      ) : (
        <div className="grid grid-cols-1  md:grid-cols-4 gap-5 ">
          {/* doctor details */}
          <div className="col-span-3">
            {doctor && <DoctorDetails doctor={doctor} />}
          </div>
          {/* suggestions */}
          <div className="w-full">
            <SuggestedDoctors />
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;

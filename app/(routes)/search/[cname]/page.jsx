"use client";

import DoctorList from "@/app/_components/DoctorList";
import { getDoctorByCategory } from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";

const Search = ({ params }) => {
  const [doctorList, setDoctorList] = useState([]);

const parameter = params.cname
const decode = decodeURIComponent(parameter)

  useEffect(() => {
    // console.log(params.cname)
    getDoc();
  }, []);

  const getDoc = async () => {
    try {
      const res = await getDoctorByCategory(params.cname);
      setDoctorList(res?.data?.data);
      // console.log(res)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-5">
      <DoctorList heading={decode} doctorList={doctorList} />
    </div>
  );
};

export default Search;

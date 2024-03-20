"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { getCategory } from "../_utils/GlobalApi";
import Image from "next/image";
import Link from "next/link";

const CategorySearch = () => {
  const [categoryList, setCategoryList] = useState([]);

  const getCategoryList = async () => {
    try {
      const res = await getCategory;
      setCategoryList(res.data.data);
      // console.log(res.data.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <div className="px-4 mb-10 flex items-center flex-col gap-2">
      <h2 className="font-bold text-4xl ">
        Search
        <span className="text-primary"> Doctors</span>{" "}
      </h2>
      <h2 className=" text-gray-500 text-xl tracking-tighter">
        Search Your Doctors And Search Appointment
      </h2>

      <div className="flex w-full max-w-sm items-center space-x-2 mt-2">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          {" "}
          <Search className="h-4 w-4 mr-1" />
          Search
        </Button>
      </div>

      {/* display lsit of categry */}
      <div className=" grid grid-cols-2 md:grid-cols-5  mt-6 ">
        {categoryList.length > 0
          ? categoryList.map(
              (item, index) =>
                index < 5 && (
                  <Link href={`/search/${item?.attributes?.Name}`}
                    key={index}
                    className="flex flex-col text-center gap-2 items-center p-5 m-2 rounded-lg bg-blue-50  hover:scale-110 transition-all duration-300"
                  >
                    <Image
                      src={item?.attributes?.Icon?.data?.attributes?.url}
                      alt="category icon"
                      width={40}
                      height={40}
                    />

                    <p className="text-sm ">{item?.attributes?.Name}</p>
                  </Link>
                )
            )
          : [1, 2, 3, 4, 5].map((item, index) => (
              <div
                key={index}
                className="w-[130px] h-[130px] bg-slate-200 m-2 animate-pulse rounded-lg"
              ></div>
            ))}
      </div>
    </div>
  );
};

export default CategorySearch;

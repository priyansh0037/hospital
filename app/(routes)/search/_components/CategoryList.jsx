"use client"

import React, { useEffect, useState } from 'react'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import Link from 'next/link'
import { getCategory } from "@/app/_utils/GlobalApi";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
  

const CategoryList = () => {
const params = usePathname()
const category = params.split("/")[2]
const decode = decodeURIComponent(category)

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
    <div className='h-screen left-0  mt-5 flex flex-col  '>
<Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList className="overflow-visible">
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions" className="w-full" >
{categoryList && categoryList.map((item,index)=>(

      <CommandItem key={index} >
        <Link href={`${item?.attributes?.Name}`}  className={`p-2 flex gap-2 w-full items-center cursor-pointer ${decode == item?.attributes?.Name && "bg-blue-200 w-full rounded-lg"}`}>
        <Image
                      src={item?.attributes?.Icon?.data?.attributes?.url}
                      alt="category icon"
                      width={25}
                      height={25}
                    />
                    
            <p>{item?.attributes?.Name}</p>
        </Link>
      </CommandItem>
))}
</CommandGroup>
    
  </CommandList>
</Command>


    </div>
  )
}

export default CategoryList
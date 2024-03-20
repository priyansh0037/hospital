"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import React, { useEffect } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";

const Header = () => {
  const Menu = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Explore", path: "/explore" },
    { id: 3, name: "Contact Us", path: "/contactus" },
  ];

  const { user } = useKindeBrowserClient();

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  return (
    <div className="flex justify-between items-center p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <h2 className="font-bold text-primary text-2xl">Paras Hospital</h2>
        <ul className="md:flex gap-8 hidden ">
          {Menu.map((item, index) => (
            <Link key={index} href={item.path}>
              <li className="hover:text-primary cursor-pointer hover:scale-105 transition-all duration-300">
                <h2>{item.name}</h2>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {user ? (
        <Popover>
          <PopoverTrigger>
            {" "}
            <Image
              src={user?.picture}
              alt="user"
              width={40}
              height={40}
              className="rounded-full"
            />
          </PopoverTrigger>
          <PopoverContent className="w-fit">
            <div className="flex flex-col gap-2 cursor-pointer">
              <Button>
                <LogoutLink>Log out</LogoutLink>
              </Button>

              <Button>Profile</Button>
              <Link href={"/my-booking"}>
                <Button> My Booking</Button>
              </Link>
            </div>
          </PopoverContent>
        </Popover>
      ) : (
        <LoginLink>
          <Button>Get Started</Button>
        </LoginLink>
      )}
    </div>
  );
};

export default Header;

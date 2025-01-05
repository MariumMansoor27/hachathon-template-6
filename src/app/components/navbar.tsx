import React from "react";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  let navItems = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Shop",
      link: "#",
    },
    {
      name: "Blog",
      link: "#",
    },
    {
      name: "Contact",
      link: "#",
    },
  ];
  return (
    <div>
      <div className="h-[100px] w-[1440px] flex ">
        <div className="flex h-[41px] w-[1286px] mt-[29px] ml-[54px] justify-between">
          <div className="flex">
            <Image src="/pictures/logo.png" alt="logo" width={50} height={32} />
            <Image
              src="/pictures/logoTxt.png"
              alt="logotxt"
              width={130}
              height={41}
            />
          </div>
          <div className="h-[24px] w-[430px] mt-[06px]">
            {/*<div className="flex h-[24px] w-[430px] mt-[38px] ml-[505px] bg-orange-400 items-center justify-evenly"> </div>*/}
            <ul className="flex font-medium justify-between">
              {navItems.map((item, i) => (
                <li key={i}>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex h-[24px] w-[430px] mt-[06px] justify-between">
            <Image src="/pictures/vector.png" alt="v1" width={28} height={28} />
            <Image
              src="/pictures/search.png"
              alt="search"
              width={28}
              height={28}
            />
            <Image
              src="/pictures/heartlogo.png"
              alt="heartlogo"
              width={28}
              height={28}
            />
            <Image
              src="/pictures/cartlogo.png"
              alt="cartlogo"
              width={28}
              height={28}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,


} from "@material-tailwind/react";
import { NavLink } from "react-router";
import logo from './images/logo.jpg'
import flags from './images/flags.jpg'
 
const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="flex gap-12 font-bold size-20xl mt-4 ml-72">
       <Typography
        as="li"
        variant="medium"
        color="white"
         className="p-1 font-bold text-xl"
      >
       <NavLink to = "/Home">Home</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="white"
        className="p-1 font-bold text-xl"
      >
       <NavLink to = "/Program">Program</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="medium"
       color="white"
          className="p-1 font-bold text-xl"
      >
       <NavLink to = "/Staff Detail"> Staff Detail</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="medium"
       color="white"
         className="p-1 font-bold text-xl"
      >
       <NavLink to = "/Admission Form">Admission Form</NavLink>
      </Typography>
       <Typography
        as="li"
        variant="medium"
       color="white"
         className="p-1 font-bold text-xl"
      >
       <NavLink to = "/Notice">Notice</NavLink>
      </Typography>
       <Typography
        as="li"
        variant="medium"
        color="white"
        className="p-1 font-bold text-xl"
      >
       <NavLink to = "/Syllabus">Syllabus</NavLink>
      </Typography>
       <Typography
        as="li"
        variant="medium"
        color="white"
       className="p-1 font-bold text-xl"
      >
       <NavLink to = "/About Us">About Us</NavLink>
      </Typography>
    </ul>
  );
 
  return (
  <div>
<div className="flex ">
  <div>
    <img src={logo} alt="" className="h-28 w-28 mt-8 ml-48"/>
  </div>
  <div className="text-center mt-4 ml-28  font-bold">
  <h1 className=" text-red-500 ">'सिप हुन्छ हातमा, रोजगारी साथमा'</h1>
  <h2 className=" text-blue-300 ">प्राविधिक शिक्षा तथा व्यवसायिक तालिम परिषद्</h2>
  <h1 className=" text-blue-400 text-4xl m-1">रोल्पा बहुप्राविधिक शिक्षालय</h1>
  <h2 className="text-blue-300 text-center">रोल्पा न.पा.१ मेवाङ,रोल्पा</h2>
</div>
<div>
  <img src={flags} alt="" className="h-28 w-28 mt-7 ml-36"/>

</div>
  </div> 
  <h4 className="bg-red-50 font-bold mt-6 text-center">ROLPA POLYTECHNIC INSTITUTE ROLPA RURAL MUNICIPALITY-1,</h4>
  <div/>

    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
      <Navbar className="sticky mt-6 top-0 z-10 h-max max-w-full rounded-none bg-blue-900 ">
        <div className="flex items-center justify-between text-blue-900">
          <div className="mr-4 hidden lg:block">{navList}</div>
            </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
          </div>
        </MobileNav>
      </Navbar>
    </div>
   </div>
  );
}
export default Header

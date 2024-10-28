import Link from "next/link";
import {Montserrat} from "next/font/google";

const h1font = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets:['latin'],
  display: 'swap'
  })


export default function Navbar() {
  return (
    <div className= "flex items-center justify-center w-full bg-[#252B42]">
    <nav className=" h-[91px] mx-[35px]  flex items-center w-[996px] gap-[6%]">
      {/* Navbar Brand */}
      <h3 className={`${h1font.className}text-[#ffffff] font-bold text-[22px] leading-[32px] tracking-[0.1px]`} >BrandName</h3>
    
      {/* Navbar Collapse */}
      <div className=" flex justify-between grow ">
        {/* Navbar Links */}
        <div className="flex space-x-[21px]  justify-between items-center">
          <Link href="/" className={`${h1font.className} text-[#ffffff] text-[14px] font-semibold leading-[24px] tracking-[0.2px] hover:text-yellow-400`}>Home</Link>
          <Link href="/product" className={`${h1font.className} text-[#ffffff] text-[14px] font-semibold leading-[24px] tracking-[0.2px] hover:text-yellow-400`}>Product</Link>
          <Link href="/pricing" className={`${h1font.className} text-[#ffffff] text-[14px] font-semibold leading-[24px] tracking-[0.2px] hover:text-yellow-400`}>Pricing</Link>
          <Link href="/contact" className={`${h1font.className}text-[#ffffff] text-[14px] font-semibold leading-[24px] tracking-[0.2px] hover:text-yellow-400`}>Contact</Link>
        </div>

        {/* Login and Join Us Buttons */}
        <div className="   flex space-x-[45px]">
          <button className={`${h1font.className}text-[#ffffff] text-[14px] font-semibold hover:text-yellow-400 leading-[22px] tracking-[0.2px] text-right px-4 py-2`}>Login</button>
          <button className={`${h1font.className}rounded-[5px] px-[25px] py-[13px] font-semibold bg-[#23A6F0] text-white  hover:bg-[#252B42] hover:text-yellow-400 text-[14px] leading-[22px] tracking-[0.2px] text-right`}>JOIN US</button>
        </div>
      </div>
    </nav>
    </div>
  );
}
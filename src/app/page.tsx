import {Montserrat} from "next/font/google";

const h1font = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets:['latin'],
  display: 'swap'
  })


export default function Home() {
  return (
    <div className="bg-[#252B42]">
    <div className="flex flex-col items-center justify-center min-h-screen pt-8 pb-20 space-y-10 -mt-20 w-[990px] m-auto bg-[#252B42]">
    {/* Heading Div */}
    <div className="flex flex-col items-center text-center w-[550px] p-11 space-y-4">
      <h5 className={`${h1font.className}text-[16px] leading-[24px] tracking-[0.1px] mt-24 text-[#23A6F0] font-semibold`}>
        Welcome
      </h5>
      <h1 className={`${h1font.className}text-white text-[48px] leading-[70px] tracking-[0.1px] font-semibold pt-3`}>
        Selling on the internet like a pro
      </h1>
      <h4 className={`${h1font.className}text-white text-[18px] font-semibold leading-[30px] tracking-[0.2px] py-3`}>
        We know how large objects will act, but things on a small scale just do not act that way.
      </h4>

      {/* Button Div */}
      <div className="flex space-x-2 pt-4">
        <button className={`${h1font.className}rounded-[5px] px-[25px] py-2 bg-[#23A6F0] text-white text-[14px] font-semibold leading-[22px] tracking-[0.2px]`}>
          Get Quote Now
        </button>
        <button className={`${h1font.className}rounded-[5px] px-[25px] py-2 border border-[#23A6F0] text-white text-[14px] font-semibold leading-[22px] tracking-[0.2px]`}>
          Learn More
        </button>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-5 w-full mt-8">
{/* First Column */}
<div className="bg-[#FFFFFF] rounded w-80 h-72 pt-8 px-12">
  <div className="flex flex-col items-start">
    <div className="w-[70px] h-[76px] bg-[#FFDCD1] rounded-lg mb-4 "></div>
    <h5 className="text-[#252B42] text-[16px] font-semibold leading-[24px] tracking-[0.1px]  ">
      Training Courses
    </h5>
    <div className="w-[50px] h-[2px] bg-[#E74040] mt-4"></div>
    <p className="text-[#737373] text-[14px] leading-[20px] tracking-[0.2px] pt-5 ">
      The gradual accumulation of information about atomic and small-scale behaviour...
    </p>
  </div>
</div>

{/* Second Column */}
<div className="bg-[#FFFFFF] p-4 rounded w-80 h-72 pt-8 px-12">
  <div className="flex flex-col items-start">
    <div className="w-[70px] h-[76px] bg-[#B9EAA8] rounded-lg mb-4"></div>
    <h5 className="text-[#252B42] font-semibold text-[16px] leading-[24px] tracking-[0.1px]  ">
      2,769 online courses
    </h5>
    <div className="w-[50px] h-[2px] bg-[#E74040] mt-4"></div>
    <p className="text-[#737373] text-[14px] leading-[20px] tracking-[0.2px] pt-5  ">
      The gradual accumulation of information about atomic and small-scale behaviour...
    </p>
  </div>
</div>

{/* Third Column */}
<div className="bg-[#23A6F0] p-4 rounded w-80 h-72 pt-8 px-12 ">
  <div className="flex flex-col items-start">
    <div className="w-[70px] h-[76px] bg-[#FFFFFF] rounded-lg"></div>
    <h5 className="text-[#FFFFFF] font-semibold text-[16px] leading-[24px] tracking-[0.1px] pt-4  ">
      Training Courses
    </h5>
    <div className="w-[50px] h-[2px] bg-[#FFFFFF] mt-4 "></div>
    <p className="text-[#FFFFFF] text-[14px] leading-[20px] tracking-[0.2px] pt-5  ">
      The gradual accumulation of information about atomic and small-scale behaviour...
    </p>
  </div>
</div>
</div>
</div>
</div>
)
}
import { mainColor } from "@/Colors";
import { Button } from "@/components/ui/button";
import DataObjectIcon from '@mui/icons-material/DataObject';
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
    </div>
  );
}

function Navbar(){
  return(
    <div className=" flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
      <Logo/>
      <Buttons/>
    </div>
  );
}

function Logo(){
  return(
    <div className=" flex gap-2 items-center">
     <div className={`bg-[#8338ec] p-[6px] rounded-md`}>
      <DataObjectIcon sx={{fontSize: 27,color:"white"}} />
     </div>
     <div className=" flex gap-1 text-[19px]">
      <span className={`font-bold text-[#8338ec]`}>Snippet</span>
      <span className=" text-slate-600">Master</span>
     </div>
    </div>
  )
}

function Buttons(){
  return(
    <div className=" flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
      <Button className={`max-sm:w-full bg-[#8338ec] p-[8px] text-sm text-white rounded-md hover:bg-[#8338eca3]`}>
        Sign In
      </Button>
      <Button className={`text-sm border bg-white border-[#8338ec] text-[#8338ec] hover:bg-[#8338ec] hover:text-white p-[8px] px-6 rounded-md `}>Sign Up</Button>
    </div>
  );
}


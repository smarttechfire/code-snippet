import { mainColor } from "@/Colors";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import DataObjectIcon from '@mui/icons-material/DataObject';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <CTASection />
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
  const { userId } = auth();
  return(
    <div className=" max-sm:w-full">
      {userId ? (
        <Link href="/my-notes">
          <Button className={`max-sm:w-full bg-[#8338ec] p-[8px] px-6 text-sm text-white rounded-md`}>Access To The App</Button>
        </Link>
      ) : (
         <div className=" flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
         <Button className={`max-sm:w-full bg-[#8338ec] p-[8px] text-sm text-white rounded-md hover:bg-[#8338eca3]`}>
           <Link href="/sign-in">Sign In</Link>
         </Button>
         <Link href="/sign-up">
           <Button className={`text-sm border bg-white border-[#8338ec] text-[#8338ec] hover:bg-[#8338ec] hover:text-white p-[8px] px-6 rounded-md `}>Sign Up</Button>
         </Link>

       </div>
      )}
    </div>
   
  );
}

function CTASection(){
  return(
    <div className=" flex flex-col mx-16 items-center mt-[120px] gap-6">
      <h2 className=" font-bold text-2xl text-center">
        Organize Your Code Snippets
        <span className={`text-[#8338ec]`}>Efficiently!</span>
      </h2>
      <p className=" text-center text-sm w-[450px] max-sm:w-full text-slate-500">
        With our advanced tagging and search features,you can quickly find the snippet you need, right when you need it. Spend less time searching for code and more time writing it.
      </p>
      <Button className={`block px-9 py-3 bg-white text-sm font-medium text-black hover:bg-white transition focus:outline-none`}>
        {`Let's get Started!`}
      </Button>
    </div>
  );
}


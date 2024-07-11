import DataObjectIcon from '@mui/icons-material/DataObject';
import Link from 'next/link';
import { Button } from './ui/button';
import { auth } from '@clerk/nextjs/server';

const NavBar = () => {
  const { userId } = auth();

  return (
    <div className=" flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
      {/* Logo */}
      <div className=" flex gap-2 items-center">
        <div className={`bg-[#8338ec] p-[6px] rounded-md`}>
          <DataObjectIcon sx={{ fontSize: 27, color: "white" }} />
        </div>
        <div className=" flex gap-1 text-[19px]">
          <span className={`font-bold text-[#8338ec]`}>Snippet</span>
          <span className=" text-slate-600">Master</span>
        </div>
      </div>
      {/* BUTTONS */}
      <div className=" max-sm:w-full">
        {userId ? (
          <Link href="/my-notes">
            <Button className={`max-sm:w-full bg-[#8338ec] p-[8px] px-6 text-sm text-white rounded-md`}>Access To The App</Button>
          </Link>
        ) : (
          //  max-sm:flex-col max-sm:w-[60%] max-sm:mt-8
          <div className=" flex gap-2 max-sm:flex-col max-sm:mt-8">
            <Button className={`max-sm:w-full bg-[#8338ec] p-[8px] text-sm text-white rounded-md hover:bg-[#8338eca3]`}>
              <Link href="/sign-in">Sign In</Link>
              
            </Button>
            <Button className={`max-sm:w-full text-sm border bg-white border-[#8338ec] text-[#8338ec] hover:bg-[#8338ec] hover:text-white p-[8px] px-6 rounded-md `}>
              <Link href="/sign-up">
                Sign Up
              </Link>
              
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="">
      <CTASection />
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


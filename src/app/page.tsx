
import Image from "next/image";
import pic from "/public/pic.jpg";  

export default function Home() {
  return (
    <div>
      <div className="flex justify-between items-center">
        {/* Left Side Text */}
        <div className="w-fit h-[250px] m-[40px] text-[80px] font-black">
          Hey,
          <br />
          My Name is <span className="pinkColor">Bushra</span>
          <br />I am a Next JS Developer
        </div>
        
        {/* Right Side Image */}
        <div>
          <Image
            src={pic}
            alt="A girl"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

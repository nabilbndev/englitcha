import Image from "next/image";

export default function Advert() {
  return (<div className=" flex px-5 gap-5 items-center py-5 border-blue-200 border rounded-md justify-center md:justify-start" >
    <Image src="/android.png" alt="Play store Logo" height={50} width={40} />

    <p className="text-center text-base md:text-lg lg:text-xl">Get the <span className=" text-blue-500 font-semibold">englitcha</span> Android app</p>

  </div>)
}
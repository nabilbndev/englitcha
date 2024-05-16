import Image from "next/image"
export default function Time() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 py-5 md:py-12">
      <div className=" hidden md:grid md:col-span-2 gap-5">
        <div className=" w-full h-[20rem] md:h-[28rem] lg:h[32rem] relative">
          <Image src="/clock.jpg" alt="Notebook Image" fill className=" object-cover rounded-lg" />
        </div>
        <p className=" text-base md:hidden">By eliminating the need for constant group messaging, &#39;englitcha&#39; frees up your time so you can focus on what really matters: your studies. Stay organized and up-to-date with all your academic information at your fingertips.</p>
      </div>
      <div className=" grid place-content-center gap-5 md:gap-8  max-w-max md:max-w-md">
        <h1 className=" text-2xl md:text-5xl lg:text-6xl font-bold">Save Time and Focus</h1>
        <p className=" hidden md:text-base lg:text-xl md:block">By eliminating the need for constant group messaging, &#39;englitcha&#39; frees up your time so you can focus on what really matters: your studies. Stay organized and up-to-date with all your academic information at your fingertips.</p>
      </div>
      <div className=" grid md:col-span-2 gap-5 md:hidden">
        <div className=" w-full h-[20rem] md:h-[28rem] lg:h[32rem] relative">
          <Image src="/clock.jpg" alt="Notebook Image" fill className=" object-cover rounded-lg" />
        </div>
        <p className=" text-base md:hidden">By eliminating the need for constant group messaging, &#39;englitcha&#39; frees up your time so you can focus on what really matters: your studies. Stay organized and up-to-date with all your academic information at your fingertips.</p>
      </div>

    </div>
  )
}
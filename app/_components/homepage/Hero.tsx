import Image from "next/image";

export default function Hero() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 py-5 md:py-12 ">
      <div className=" grid place-content-center gap-5 md:gap-8  max-w-max md:max-w-md ">
        <h1 className=" text-2xl md:text-5xl lg:text-6xl font-bold">Simplify Your Academic Journey</h1>
        <p className=" hidden md:text-base lg:text-xl md:block">Say goodbye to Facebook Messenger group chaos. Englitcha organizes your academic resources (syllabi, schedules, announcements) in one place, for easy access to everything you need.</p>
      </div>

      <div className=" grid md:col-span-2 gap-5">
        <div className=" w-full h-[20rem] md:h-[28rem] lg:h[32rem] relative">
          <Image src="/abstract.jpg" alt="Notebook Image" fill className=" object-cover rounded-lg" />
        </div>
        {/* <iframe className=" rounded-lg aspect-video w-full" src="https://www.youtube.com/embed/gfU1iZnjRZM" allowFullScreen ></iframe> */}
        <p className=" text-base md:hidden">Say goodbye to Facebook Messenger group chaos. Englitcha organizes your academic resources (syllabi, schedules, announcements) in one place, for easy access to everything you need.</p>
      </div>
    </div>
  )
}
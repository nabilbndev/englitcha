
export default function Page() {
  return (<main className="py-5 flex flex-col gap-8 mx-auto max-w-7xl px-5 min-h-screen">
    <AboutApp />
  </main>)
}


function AboutApp() {
  return (<div className="py-5 flex flex-col gap-5 max-w-7xl">
    <h1 className="text-center text-2xl md:text-3xl font-bold py-0 md:py-5">
      About Englitcha
    </h1>
    <h1 className=" text-xl md:text-2xl font-semibold">
      &#34;An info-hub for AHC&apos;s Department of English Language and Literature.&#34;</h1>
    <p className="text-sm md:text-base">Englitcha is a web and mobile application designed to serve the Department of English Language and Literature at Govt. Azizul Haque College, Bogura. The platform aims to provide a centralized and organized space for department-related information, including notices, news, routines, syllabuses, and updates.</p>
    <div className=" flex flex-col gap-5">
      <p className=" text-base md:text-xl font-semibold"> Key Features:</p>
      <div className=" leading-loose text-sm md:text-base">
        <div className=" flex gap-2"><span className=" text-blue-500">&#x2764;</span>Access to all relevant department information in a single location.</div>
        <div className=" flex gap-2"><span className=" text-blue-500">&#x2764;</span>Ability to organize and access study materials through both web and mobile interfaces.</div>
        <div className=" flex gap-2"><span className=" text-blue-500">&#x2764;</span>Efficient dissemination of information between faculty, department heads, and students.</div>
      </div>
    </div>
    <div className=" flex flex-col gap-5">
      <p className=" text-base md:text-xl font-semibold" > Target audience:</p>
      <div className=" leading-loose text-sm md:text-base">
        <div className="  "> <span className=" text-blue-500">&#x2764;</span> <span className=" font-medium">Students: </span> Stay informed, organized, and on top of your studies.</div>
        <div className="  "> <span className=" text-blue-500">&#x2764;</span> <span className=" font-medium">Faculty: </span> Share information easily with your students.</div>
        <div className=""> <span className=" text-blue-500">&#x2764;</span> <span className=" font-medium">Department Admin: </span> Manage information efficiently and effectively.</div>
      </div>
    </div>
  </div>)
}




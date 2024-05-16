import { LucideMousePointer2 } from "lucide-react"

export default function Page() {
  return (<main className="py-5 flex flex-col gap-8 mx-auto max-w-7xl px-5 min-h-screen">
    <AboutApp />
  </main>)
}


function AboutApp() {
  return (<div className="py-5 flex flex-col gap-8 mx-auto max-w-7xl px-5 md:px-0">
    <h1 className=" text-2xl md:text-4xl font-bold">
      Englitcha: digital hub for AHC&apos;s Department of English Language and Literature</h1>
    <p className="text-base lg:text-xl">Englitcha is a web and mobile application designed to serve the Department of English Language and Literature at Govt. Azizul Haque College, Bogura. The platform aims to provide a centralized and organized space for department-related information, including notices, news, routines, syllabuses, and updates.</p>
    <div className=" flex flex-col gap-5">
      <p className=" text-xl md:text-2xl font-semibold"> Englitcha offers the following features:</p>
      <ul className=" leading-loose text-base lg:text-xl">
        <li className=" flex gap-2 items-center"><LucideMousePointer2 color="gray" /><span className=" font-semibold tex-lg">Centralized Information:</span> Access to all relevant department information in a single location.</li>
        <li className=" flex gap-2 items-center"><LucideMousePointer2 color="gray" /><span className=" font-semibold tex-lg">Enhanced Organization:</span> Ability to organize and access study materials through both web and mobile interfaces.</li>
        <li className=" flex gap-2 items-center"><LucideMousePointer2 color="gray" /><span className=" font-semibold tex-lg">Improved Communication:</span> Efficient dissemination of information between faculty, department heads, and students.</li>
      </ul>
    </div>
    <div className=" flex flex-col gap-5">
      <p className=" text-xl md:text-2xl font-semibold" >Englitcha is for:</p>
      <ul className=" leading-loose text-base lg:text-xl">
        <li className=" flex gap-2 items-center"><LucideMousePointer2 color="gray" /><span className=" font-semibold tex-lg">Students: </span> Stay informed, organized, and on top of your studies.</li>
        <li className=" flex gap-2 items-center"><LucideMousePointer2 color="gray" /><span className=" font-semibold tex-lg">Faculty: </span> Share information easily with your students.</li>
        <li className=" flex gap-2 items-center"><LucideMousePointer2 color="gray" /><span className=" font-semibold tex-lg">Department Admin: </span> Manage information efficiently and effectively.</li>
      </ul>
    </div>
  </div>)
}




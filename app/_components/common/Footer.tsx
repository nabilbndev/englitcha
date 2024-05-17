
export default function Footer() {
  const date = new Date()
  const year = date.getFullYear();
  return (
    <footer className=" flex flex-col gap-2 items-center justify-center py-16 bg-slate-600 text-white t">


      <p className=" text-xs md:text-base text-center">Designed and developed with ❤️ for the teachers and students</p>
      <p className=" text-xs md:text-base text-center">Hosted by vercel</p>
      <p className=" text-xs md:text-base text-center">Copyright ©{year} English Dept. AHC</p>


    </footer>
  )
}
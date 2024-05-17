
export default function Footer() {
  const date = new Date()
  const year = date.getFullYear();
  return (
    <footer className=" flex text-sm md:text-base flex-col gap-2 items-center justify-center h-60 bg-slate-600 text-white t">


      <p className=" text-center">Designed and developed with ❤️ for the teachers and students</p>
      <p className="text-center">Hosted by vercel</p>
      <p className="text-center">Copyright ©{year} English Dept. AHC</p>


    </footer>
  )
}
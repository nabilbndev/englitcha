
export default function Footer() {
  const date = new Date()
  const year = date.getFullYear();
  return (
    <footer className=" flex text-sm md:text-base flex-col gap-2 items-center py-20 bg-slate-600 text-white">


      <p>Designed and developed with ❤️ for the teachers and students</p>
      <p>Hosted by vercel</p>
      <p>Copyright ©{year} English Dept. AHC</p>


    </footer>
  )
}
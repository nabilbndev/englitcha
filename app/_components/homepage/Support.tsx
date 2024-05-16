import Link from "next/link";

export default function Support() {
  return (<div className=" flex flex-col items-center py-8 gap-8 shadow-lg">
    <p className=" text-2xl lg:text-4xl font-bold">Support us</p>
    <p className=" text-center md:text-base lg:text-xl">Currently, the website is hosted on a temporary subdomain provided by Vercel. Your contributions will help us acquire a custom domain name, providing a more professional and recognizable online presence for our department. </p>
    <Link className=" bg-blue-500 text-white font-semibold px-3 py-3 rounded-lg" href="#">Become a sponsor</Link>
  </div>)
}
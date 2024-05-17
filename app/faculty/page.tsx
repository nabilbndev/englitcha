'use client';
import { GraduationCap } from "lucide-react";
import Image from "next/image";

interface PageProps { }

const Page = ({ }: PageProps) => {
  return (
    <div className=" py-10 md:py-20 flex flex-col  items-center gap-10 mx-auto max-w-7xl px-5">
      <div className=" flex items-center gap-3 justify-center">
        <span className=" flex md:hidden"> <GraduationCap size={30} /></span>
        <span className=" hidden md:flex"> <GraduationCap size={50} /></span>
        <h1 className=" font-bold text-2xl md:text-4xl">Faculty</h1>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 place-content-center">
        {profileWidgets}
      </div>
    </div>
  );
};

export default Page;


function ProfileCard({ name, title, imageUrl, cellPhoneNumber }: any) {
  return (
    <div className=" shadow-lg rounded-md max-w-min p-2 grid gap-5">
      <div className=" relative w-36 h-36 md:w-40 md:h-40">
        <Image src={imageUrl} alt="Photo of a faculty member" fill className=" object-cover rounded-md w-full h-full" />
      </div>
      <div className=" gap-3">
        <p className=" text-center text-base font-thin">{name}</p>
        <p className=" text-center text-sm font-medium">{title}</p>
        <p className=" text-center text-xs">{cellPhoneNumber}</p>
      </div>
    </div>
  )
}

const profileData = [
  {
    id: 1,
    name: 'Jack Crawly',
    title: 'Assistant Professor',
    imageUrl: '/crime_punishment.jpg',
    cellPhoneNumber: "+880 1598 888651",


  },
  {
    id: 2,
    name: 'Jennifer Hastings',
    title: 'Assistant Professor',
    imageUrl: '/crime_punishment.jpg',
    cellPhoneNumber: "+880 1598 888651",

  },
  {
    id: 3,
    name: 'Kenneth Williams',
    title: 'Associate Professor',
    imageUrl: '/crime_punishment.jpg',
    cellPhoneNumber: "+880 1598 888651",

  },
  {
    id: 4,
    name: 'Julian Brandt',
    title: 'Associate Professor',
    imageUrl: '/crime_punishment.jpg',
    cellPhoneNumber: "+880 1598 888651",

  },
  {
    id: 5,
    name: 'Jonathon Tah',
    title: 'Lecturer',
    imageUrl: '/crime_punishment.jpg',
    cellPhoneNumber: "+880 1598 888651",

  },
  {
    id: 6,
    name: 'Mitch Marsh',
    title: 'Lecturer',
    imageUrl: '/crime_punishment.jpg',
    cellPhoneNumber: "+880 1598 888651",

  }
]

const profileWidgets = profileData.map((profile) => (<ProfileCard key={profile.id} name={profile.name} title={profile.title} imageUrl={profile.imageUrl} cellPhoneNumber={profile.cellPhoneNumber} />))
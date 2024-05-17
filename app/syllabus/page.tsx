'use client';

import { DownloadIcon, EyeIcon, LibraryBigIcon } from "lucide-react";
import Link from "next/link";

interface PageProps { }

const Page = ({ }: PageProps) => {
  return (
    <div className="py-10 md:py-20 flex flex-col justify-center gap-8 mx-auto max-w-7xl px-5">
      <div className=" flex items-center gap-3 justify-center">
        <LibraryBigIcon size={25} />
        <h1 className=" font-bold text-xl md:text-2xl">Syllabus</h1>
      </div>
      <div className=" flex flex-col gap-5 w-full">
        {syllabusWidgets}
      </div>
    </div>
  );
};

export default Page;


function SyllabusCard({ title, downloadUrl, date }: any) {
  return (<div className=" border flex justify-between items-center rounded-md shadow-sm p-5">
    <div className=" flex flex-col">
      <div className=" flex items-center gap-5">  <p className="text-sm md:text-base font-semibold">{title}</p> </div>
      <p className="text-xs">Published on: {date}</p>
    </div>
    <div className=" flex items-center gap-5">
      <Link href={downloadUrl}><div className="flex flex-col items-center"><DownloadIcon size={20} /><p className=" text-xs">Download</p></div></Link>
      <div className=" flex flex-col items-center">
        <EyeIcon size={20} />
        <p className=" text-xs">View</p>
      </div>
    </div>
  </div>)
}

const syllabusData = [
  {
    id: 1,
    title: 'Honours 1st year syllabus',
    downloadUrl: '#',
    date: "17 May 2024",


  },
  {
    id: 2,
    title: 'Honours 2nd year syllabus',
    downloadUrl: '#',
    date: "17 May 2024",

  },
  {
    id: 3,
    title: 'Honours 3rd year syllabus',
    downloadUrl: '#',
    date: "17 May 2024",

  },
  {
    id: 4,
    title: 'Honours 4th year syllabus',
    downloadUrl: '#',
    date: "17 May 2024",

  },
  {
    id: 5,
    title: 'Masters syllabus',
    downloadUrl: '#',
    date: "17 May 2024",

  }
]

const syllabusWidgets = syllabusData.map((syllabus) => (<SyllabusCard key={syllabus.id} title={syllabus.title} downloadUrl={syllabus.downloadUrl} date={syllabus.date} />))
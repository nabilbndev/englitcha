'use client';

import { DownloadIcon } from "lucide-react";
import Link from "next/link";

interface PageProps { }

const Page = ({ }: PageProps) => {
  return (
    <div className="py-10 md:py-20 flex flex-col justify-center gap-8 mx-auto max-w-7xl px-5 min-h-screen">
      <h1 className=" text-center font-bold text-xl md:text-2xl">Download Syllabus</h1>
      <div className=" flex flex-col gap-2">
        {syllabusWidgets}
      </div>
    </div>
  );
};

export default Page;


function SyllabusCard({ title, downloadUrl }: any) {
  return (<div className=" border flex rounded-md shadow-sm p-5">
    <Link className=" flex gap-5" href={downloadUrl}><DownloadIcon /><p>{title}</p></Link>
  </div>)
}

const syllabusData = [
  {
    id: 1,
    title: 'Honours 1st year syllabus',
    downloadUrl: '#',
  },
  {
    id: 2,
    title: 'Honours 2nd year syllabus',
    downloadUrl: '#',
  },
  {
    id: 3,
    title: 'Honours 3rd year syllabus',
    downloadUrl: '#',
  },
  {
    id: 4,
    title: 'Honours 4th year syllabus',
    downloadUrl: '#',
  },
  {
    id: 5,
    title: 'Masters syllabus',
    downloadUrl: '#',
  }
]

const syllabusWidgets = syllabusData.map((syllabus) => (<SyllabusCard key={syllabus.id} title={syllabus.title} downloadUrl={syllabus.downloadUrl} />))
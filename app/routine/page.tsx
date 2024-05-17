'use client';
import { DownloadIcon, EyeIcon, Sheet } from "lucide-react";
import Link from "next/link";

interface PageProps { }

const Page = ({ }: PageProps) => {
  return (
    <div className="py-10 md:py-20 flex flex-col justify-center gap-10 mx-auto max-w-7xl px-5">
      <div className=" flex items-center gap-3 justify-center">
        <Sheet size={25} />
        <h1 className=" font-bold text-xl md:text-2xl">Routine</h1>
      </div>
      <div className=" flex flex-col md:flex-row gap-8">
        <div className=" flex flex-col gap-8 w-full md:w-1/2">
          <p className=" text-center text-base md:text-xl font-semibold">Class Routine</p>
          {classRoutineWidgets}
        </div>
        <div className=" flex flex-col gap-8 w-full md:w-1/2">
          <p className=" text-center text-base md:text-xl font-semibold">Exam Routine</p>
          {examRoutineWidgets}
        </div>
      </div>
    </div>
  );
};

export default Page;

function RoutineCard({ title, downloadUrl, date }: any) {
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

const classRoutineData = [
  {
    id: 1,
    title: 'Honours 1st year',
    downloadUrl: '#',
    date: "17 May 2024",
  },
  {
    id: 2,
    title: 'Honours 2nd year',
    downloadUrl: '#',
    date: "17 May 2024",

  },
  {
    id: 3,
    title: 'Honours 3rd year',
    downloadUrl: '#',
    date: "17 May 2024",

  },
  {
    id: 4,
    title: 'Honours 4th year ',
    downloadUrl: '#',
    date: "17 May 2024",

  },
  {
    id: 5,
    title: 'Masters',
    downloadUrl: '#',
    date: "17 May 2024",

  }
]

const classRoutineWidgets = classRoutineData.map((routine) => (<RoutineCard key={routine.id} title={routine.title} date={routine.date} downloadUrl={routine.downloadUrl} />))

const examRoutineData = [
  {
    id: 1,
    title: 'Honours 1st year 1st In-course',
    downloadUrl: '#',
    date: "17 May 2024",

  },
  {
    id: 2,
    title: 'Honours 2nd year 1st In-course',
    downloadUrl: '#',
    date: "17 May 2024",

  },
  {
    id: 3,
    title: 'Honours 3rd year 2nd In-course',
    downloadUrl: '#',
    date: "17 May 2024",

  },
  {
    id: 4,
    title: 'Honours 4th year Test',
    downloadUrl: '#',
    date: "17 May 2024",

  },
  {
    id: 5,
    title: 'Masters 1st In-course',
    downloadUrl: '#',
    date: "17 May 2024",

  },
  {
    id: 5,
    title: 'Masters 2nd In-course',
    downloadUrl: '#',
    date: "17 May 2024",

  }
]

const examRoutineWidgets = examRoutineData.map((routine) => (<RoutineCard key={routine.id} title={routine.title} date={routine.date} downloadUrl={routine.downloadUrl} />))

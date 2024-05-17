'use client';
import { DownloadIcon, EyeIcon, Paperclip } from "lucide-react";
import Link from "next/link";
interface PageProps { }

const Page = ({ }: PageProps) => {
  return (
    <div className=" py-10 md:py-20 flex flex-col justify-center gap-10 mx-auto max-w-7xl px-5">
      <div className=" flex items-center gap-3 justify-center">
        <Paperclip size={25} />
        <h1 className=" font-bold text-xl md:text-2xl">  Notice</h1>
      </div>
      <div className=" flex flex-col gap-5 w-full">
        {noticeWidgets}
      </div>
    </div>
  );
};

export default Page;

function NoticeCard({ title, downloadUrl, date }: any) {
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

const noticeData = [
  {
    id: 1,
    title: 'Classes halt for 2 days',
    downloadUrl: '#',
    date: "17 May 2024",


  },
  {
    id: 2,
    title: 'Summer Vacation',
    downloadUrl: '#',
    date: "17 May 2024",

  },
  {
    id: 3,
    title: 'Debate competition',
    downloadUrl: '#',
    date: "17 May 2024",

  },
  {
    id: 4,
    title: 'Sports competition',
    downloadUrl: '#',
    date: "17 May 2024",

  },
  {
    id: 5,
    title: 'Farewell to honours 4th year batch',
    downloadUrl: '#',
    date: "17 May 2024",

  }
]

const noticeWidgets = noticeData.map((notice) => (<NoticeCard key={notice.id} title={notice.title} downloadUrl={notice.downloadUrl} date={notice.date} />))
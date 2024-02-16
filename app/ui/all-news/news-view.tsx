'use client';
import {NewsViewType} from '@/app/lib/definitions';
import {
  NewspaperIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';


export default function NewsView({
    newsview,
}: {
    newsview: NewsViewType;
}) {
    const sampleImageUrl = 'https://picsum.photos/200/300?grayscale';
    return (
        <div className="bg-stone-800 p-4 md:p-6 h-auto w-auto ">
            <div className='mb-5  text-center '>
                <h1 className="text-2xl font-bold  text-amber-500 uppercase underline shadow-sm">{newsview.headline}</h1>
            </div>

            <div className="flex items-center justify-center bg-black rounded-md p-5">
                <Image src="/news.jpg" width={1000} height={760} className="hidden md:block" alt="Screenshots of the dashboard project showing desktop version" />
                      <Image src="/news.jpg" width={560} height={620} className="block md:hidden" alt="Screenshot of the dashboard project showing mobile version"
                />
            </div>

            <div className="mb-4">
                <p className="text-gray-600">{newsview.content}</p>
            </div>

            <div className="flex items-center text-gray-500">
                <NewspaperIcon className="h-5 w-5 mr-1" />
                <span>Channel: {newsview.name}</span>
            </div>

            <div className="mt-4">
                <h2 className="text-sm font-medium text-gray-500">Published on blockchain:</h2>
                <p className={`text-sm font-bold ${newsview.published_on_blockchain === 'yes' ? 'text-green-500' : 'text-red-500'}`}>
                    {newsview.published_on_blockchain === 'yes' ? 'Yes' : 'No'}
                </p>
            </div>
    </div>
);
}

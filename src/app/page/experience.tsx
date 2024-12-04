'use client';

import Image from 'next/image';
import jm from '../../../public/jm.jpg';
import rx from '../../../public/rx.png';
import btf from '../../../public/btf.jpg';
import inno from '../../../public/inno.jpg';
import { useState } from 'react';
const Experience = () => {
  const [page, setPage] = useState(0);
  return (
    <div className="gap-1 h-full">
      {/* JM */}
      <div className="col-span-2 row-span-5 h-full">
        <div className="h-1/2 flex justify-center items-center">
          <div className="relative">
            <Image
              src={jm}
              alt="Image"
              layout="intrinsic"
              width={256}
              height={256}
              objectFit="contain"
            />
            <a
              className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-30 cursor-pointer"
              href="https://www.facebook.com/jmandjmsolution/"
              target="_blank"
            ></a>
          </div>
        </div>
        <div className="h-1/2 border-b border-black mx-auto w-[80%]">
          <div className="h-full  p-4 overflow-y-auto max-h-[300px] break-words">
            <h3 className="font-bold">Role: Fullstack Devloper</h3>
            <div className="border-b-0 border-black group relative p-1 font-light hover:font-normal mb-3">
              <p className="font-sans">
                • Developed an application for Queen Sirikit Botanic Garden at
                Chiang Mai. This application is for visitors to the garden,
                featuring a map and information about various plant species, as
                well as missions to complete in exchange for rewards before
                leaving the garden. Backend use MongoDB and Mongoose
              </p>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full group-hover:transition-all "></span>
            </div>
            <div className="border-b-0 border-black group relative p-1 font-light hover:font-normal mb-3">
              <p className="font-sans">
                • Developed a web application for managing class schedules under
                the Education 4.0 initiative, including functionalities for
                assigning homework, submitting homework, and attendance tracking
                through the web application.
              </p>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full group-hover:transition-all"></span>
            </div>
          </div>
        </div>
      </div>
      {/* BTF */}
      <div className="col-span-2 row-span-5 h-full">
        <div className="h-1/2 flex justify-center items-center ">
          <div className="relative">
            <Image
              src={btf}
              alt="Image"
              layout="intrinsic"
              width={256}
              height={256}
              objectFit="contain"
            />
            <a
              className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-30 cursor-pointer"
              href="https://www.facebook.com/BackToTheFutureSH"
              target="_blank"
            ></a>
          </div>
        </div>
        <div className="h-1/2 border-b border-black mx-auto w-[80%]">
          <div className="h-full  p-4 overflow-y-auto max-h-[300px] break-words">
            <h3 className="font-bold">Role: Fullstack Devloper</h3>
            <div className="border-b-0 border-black group relative p-1 font-light hover:font-normal mb-3">
              <p className="font-sans">
                • Use puppeteer and Node.JS Develop a service that search for
                comment or message in social media by entering keywords into the
                parameters, then crawl data from leading social media platforms
                such as Facebook, Twitter, Instagram, and various forums,
                including YouTube and Google. This data will be used to create
                statistics to determine whether the mentions are positive or
                negative.
              </p>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full group-hover:transition-all "></span>
            </div>
            <div className="border-b-0 border-black group relative p-1 font-light hover:font-normal mb-3">
              <p className="font-sans">
                • Developed a web application for managing class schedules under
                the Education 4.0 initiative, including functionalities for
                assigning homework, submitting homework, and attendance tracking
                through the web application.
              </p>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full group-hover:transition-all"></span>
            </div>
          </div>
        </div>
      </div>

      {/* REALNEX */}
      <div className="col-span-2 row-span-5  h-full">
        <div className="h-1/2 flex justify-center items-center ">
          <div className="relative ">
            <Image
              src={rx}
              alt="Image"
              layout="intrinsic"
              width={256}
              height={256}
              objectFit="contain"
            />
            <a className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-30"></a>
          </div>
        </div>
        <div className="h-1/2 border-b border-black mx-auto w-[80%]">
          <div className="h-full  p-4 overflow-y-auto max-h-[300px] break-words">
            <h3 className="font-bold">Role: Frontend Dev</h3>
            <div className="border-b-0 border-black group relative p-1 font-light hover:font-normal mb-3">
              <p className="font-sans">
                • Developed a web application for electricity bill payment,
                meter reading, meter installation, reporting issues for Sattahip
                Electricity Authority also develop backend for make a report.
                This project use React.js with Recoil & Material Ui backend we
                use GraphQL to fetch data from the database
              </p>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full group-hover:transition-all "></span>
            </div>
          </div>
        </div>
      </div>
      {/* INNOPIA */}
      <div className="col-span-2 row-span-5  h-full">
        <div className="h-1/2 flex justify-center items-center ">
          <div className="relative">
            <Image
              src={inno}
              alt="Image"
              layout="intrinsic"
              width={256}
              height={256}
              objectFit="contain"
            />
            <a
              className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-30 cursor-pointer"
              href="https://innopiaglobal.com/"
              target="_blank"
            ></a>
          </div>
        </div>
        <div className="h-1/2 mx-auto w-[80%]">
          <div className="h-full  p-4 overflow-y-auto max-h-[300px] break-words">
            <h3 className="font-bold">Role: Frontend Dev</h3>
            <div className="border-b-0 border-black group relative p-1 font-light hover:font-normal mb-3">
              <a className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300  cursor-pointer"></a>
              <p className="font-sans">
                • Developed an in-house website for SAMMITR managing trailer
                orders and trailer extensions, use React.js with Recoil &
                Material Ui And connect the backend with a REST API.
              </p>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full group-hover:transition-all "></span>
            </div>
            <div className="border-b-0 border-black group relative p-1 font-light hover:font-normal mb-3">
              <p>
                • Developed an in-house website for HINO managing trailer orders
                and trailer extensions, use React.js with Redux & Tailwind And
                connect the backend with a REST API.
              </p>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full group-hover:transition-all "></span>
            </div>
            <div className="border-b-0 border-black group relative p-1 font-light hover:font-normal mb-3">
              <p>
                • Integration data from another DB to new DB with Oracle
                Integration Cloud
              </p>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full group-hover:transition-all "></span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="col-span-6 row-span-1 h-full flex justify-end items-center">
        <button
          onClick={() => setPage(0)}
          className="relative border border-black group  py-1.5 px-2.5 text-black m-5 w-20"
        >
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full group-hover:transition-all"></span>
          <p>Previous</p>
        </button>
        <button
          onClick={() => setPage(1)}
          className="relative border border-black group  py-1.5 px-2.5 text-black m-5 w-20"
        >
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full group-hover:transition-all"></span>
          <p>Next</p>
        </button>
      </div> */}
    </div>
  );
};

export default Experience;

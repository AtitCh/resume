import Atit from '../../../public/Atit.jpg';
import Image from 'next/image';
import nest from '../../../public/nest.png';
import flutter from '../../../public/flutter.png';
import lk from '../../../public/lkdin.png';
import gm from '../../../public/gmail.png';
import cell from '../../../public/cell.png';
import React from 'react';
import { toast } from 'react-hot-toast';

const Home = () => {
  const copyEmail = (v: string) => {
    navigator.clipboard.writeText(v);
    toast.success('Email copied to clipboard!');
  };
  const copyNumber = (v: string) => {
    navigator.clipboard.writeText(v);
    toast.success('Telephone Number copied to clipboard!');
  };

  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-1 h-full ">
      <div className="col-span-2 row-span-5 h-full ">
        <div className="h-1/2 flex justify-start items-center  border-black mx-auto">
          <div className="relative rounded-lg overflow-hidden ml-4 w-1/2">
            <Image
              src={Atit}
              alt="Image"
              layout="intrinsic"
              width={400}
              height={400}
              objectFit="contain"
            />
            <a className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-30 cursor-pointer"></a>
          </div>
          <div className="relative  ml-2 w-1/2 h-full">
            <div className="  p-4 overflow-y-auto max-h-[300px] w-full h-full break-words flex flex-col justify-start mt-5">
              <h3 className="font-bold">Atit Chanvenukool</h3>
              <div className="border-b-0 border-black group relative p-1 font-light  mb-3">
                <p className="font-sans">
                  • I am a Front-End Developer based in Bangkok, specializing in
                  React, MUI5, JavaScript, and TypeScript, focused on delivering
                  scalable and efficient solutions while enhancing user
                  experiences through optimized front-end architecture and
                  flexible form validation, and I am seeking opportunities to
                  contribute to innovative projects and collaborate with dynamic
                  teams.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1/2">
          <div className="grid grid-cols-1 grid-rows-1 gap-1 h-full  w-full">
            <div className="  p-2 overflow-y-auto max-h-[360px] w-full break-words">
              <h3 className="font-bold">Planning to learn</h3>
              <div className="grid grid-cols-2 grid-rows-1 gap-1 h-5/6  w-full">
                <div className="relative flex justify-center items-center border-black mx-auto w-full ">
                  <div className=" overflow-hidden group">
                    <Image
                      src={flutter}
                      alt="Image"
                      layout="intrinsic"
                      width={256}
                      height={256}
                      objectFit="contain"
                    />
                    <a
                      className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-30 cursor-pointer"
                      href="https://flutter.dev/"
                      target="_blank"
                    ></a>
                    <div
                      data-tooltip="tooltip"
                      className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-0  left-1/2 transform -translate-x-1/2 "
                    >
                      Flutter
                    </div>
                  </div>
                </div>
                <div className="relative flex justify-center items-center border-black mx-auto w-full ">
                  <div className=" overflow-hidden group">
                    <Image
                      src={nest}
                      alt="Image"
                      layout="intrinsic"
                      width={256}
                      height={256}
                      objectFit="contain"
                    />
                    <a
                      className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-30 cursor-pointer"
                      href="https://nestjs.com/"
                      target="_blank"
                    ></a>
                    <div
                      data-tooltip="tooltip"
                      className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-0  left-1/2 transform -translate-x-1/2 "
                    >
                      Nest JS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="col-span-2 row-span-5 h-full ">
        <div className="h-1/2 flex justify-start items-center  border-black mx-auto">
          <div className="relative rounded-lg overflow-hidden ml-4 w-1/2 h-full">
            <div className="  p-4 overflow-y-auto max-h-[300px] w-full break-words flex flex-col justify-start mt-5">
              <h3 className="font-bold">Info</h3>
              <div className="border-b-0 border-black group relative p-1 font-light  mb-3">
                <p className="font-medium">Education</p>
                <p className="font-sans">Rangsit University 2012-2016</p>
                <p className="font-sans">Bachelor of Faculty of Art & Design</p>
                <p className="font-medium">Date of birth</p>
                <p className="font-sans">08 July 1994 - Thai nationality</p>
                <p className="font-medium">Current Address</p>
                <p className="font-sans">Moniiq-Condo Sukhumvit-64</p>
              </div>
            </div>
          </div>
          <div className="relative  ml-2 w-1/2 h-full">
            <div className="p-4 overflow-y-auto max-h-[300px] w-full  break-words flex flex-col justify-start mt-5">
              <h3 className="font-bold mb-3">Contact</h3>
              <div className="border-b-0 border-black group relative p-1 font-light mb-3">
                <div className=" overflow-hidden group flex item-center">
                  <Image
                    src={lk}
                    alt="Image"
                    layout="intrinsic"
                    width={30}
                    height={30}
                    objectFit="contain"
                  />
                  <p className="ml-5 font-bold">Atit Chanvenukool</p>
                  <a
                    className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-30 cursor-pointer"
                    href="https://www.linkedin.com/in/atit-chanvenukool-5b9703246/"
                    target="_blank"
                  ></a>
                </div>
              </div>
              <div className="border-b-0 border-black group relative p-1 font-light mb-3">
                <div
                  className=" overflow-hidden group flex item-center"
                  onClick={() => copyEmail('atit8794@gmail.com')}
                >
                  <Image
                    src={gm}
                    alt="Image"
                    layout="intrinsic"
                    width={30}
                    height={30}
                    objectFit="contain"
                  />
                  <p className="ml-5 font-bold">atit8794@gmail.com</p>
                  <a className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-30 cursor-pointer"></a>
                </div>
              </div>
              <div className="border-b-0 border-black group relative p-1 font-light mb-3">
                <div
                  className=" overflow-hidden group flex item-center"
                  onClick={() => {
                    copyNumber('(+66)818187118');
                  }}
                >
                  <Image
                    src={cell}
                    alt="Image"
                    layout="intrinsic"
                    width={30}
                    height={30}
                    objectFit="contain"
                  />
                  <p className="ml-5 font-bold">(+66)818187118</p>
                  <a className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-30 cursor-pointer"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1/2 flex justify-start items-center  border-black mx-auto">
          <div className="relative rounded-lg overflow-hidden ml-4 w-1/2 h-full">
            <div className="  p-4 overflow-y-auto max-h-[300px] w-full break-words flex flex-col justify-start mt-5">
              <h3 className="font-bold">Preffered language</h3>
              <div className="border-b-0 border-black group relative p-1 font-light  mb-3">
                <p className="font-sans">Thai</p>
                <p className="font-sans">English</p>
              </div>
            </div>
          </div>
          <div className="relative  ml-2 w-1/2 h-full bg-gray-200">
            <div className="p-4 overflow-y-auto max-h-[300px] w-full  break-words flex flex-col justify-start mt-5 ">
              <h3 className="font-bold mb-3">Advertising space</h3>
              <div className="border-b-0 border-black group relative p-1 font-light mb-3">
                if not hire me atleast buy this space
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

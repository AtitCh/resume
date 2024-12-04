import Image from 'next/image';
import tailwind from '../../../public/tailwind.png';
import tsx from '../../../public/ts.png';
import js from '../../../public/js.png';
import kotlin from '../../../public/kotlin.png';
import html5 from '../../../public/html5.png';
import css3 from '../../../public/css3.png';
import reactJS from '../../../public/react.png';
import vueJS from '../../../public/vueJs.png';
import nextJS from '../../../public/next.png';
import mui from '../../../public/mui.png';
import nodeJS from '../../../public/node.png';
import puppy from '../../../public/puppeteer.png';
import mongo from '../../../public/MongoDB-Logo.png';
import graph from '../../../public/graph.png';

const Skill = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-3 gap-1 h-full">
      <div className="col-span-6 row-span-1 h-full">
        <div className="grid grid-cols-6 grid-rows-1 gap-1 h-full">
          <div className="relative flex justify-center items-center border-black mx-auto w-full ">
            <div className=" overflow-hidden group">
              <Image
                src={tsx}
                alt="Image"
                layout="intrinsic"
                width={128}
                height={128}
                objectFit="contain"
              />
              <a className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-30 cursor-pointer"></a>
              <div
                data-tooltip="tooltip"
                className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-0  left-1/2 transform -translate-x-1/2 "
              >
                1.5 year experience
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center border-black mx-auto w-full ">
            <div className=" overflow-hidden group rounded-xl">
              <Image
                src={js}
                alt="Image"
                layout="intrinsic"
                width={128}
                height={128}
                objectFit="contain"
              />
              <a className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-30 cursor-pointer"></a>
              <div
                data-tooltip="tooltip"
                className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-0  left-1/2 transform -translate-x-1/2 "
              >
                5 years+ experience
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center border-black mx-auto w-full ">
            <div className=" overflow-hidden group">
              <Image
                src={kotlin}
                alt="Image"
                layout="intrinsic"
                width={128}
                height={128}
                objectFit="contain"
              />
              <a className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-30 cursor-pointer"></a>
              <div
                data-tooltip="tooltip"
                className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-0  left-1/2 transform -translate-x-1/2 "
              >
                0.5 year experience
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center border-black mx-auto w-full ">
            <div className=" overflow-hidden group">
              <Image
                src={vueJS}
                alt="Image"
                layout="intrinsic"
                width={128}
                height={128}
                objectFit="contain"
              />
              <a className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-30 cursor-pointer"></a>
              <div
                data-tooltip="tooltip"
                className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-0  left-1/2 transform -translate-x-1/2 "
              >
                1.5 years experience
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center border-black mx-auto w-full ">
            <div className=" overflow-hidden group">
              <Image
                src={nodeJS}
                alt="Image"
                layout="intrinsic"
                width={128}
                height={128}
                objectFit="contain"
              />
              <a className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-30 cursor-pointer"></a>
              <div
                data-tooltip="tooltip"
                className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-0  left-1/2 transform -translate-x-1/2 "
              >
                2 years experience
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center border-black mx-auto w-full ">
            <div className=" overflow-hidden group">
              <Image
                src={reactJS}
                alt="Image"
                layout="intrinsic"
                width={128}
                height={128}
                objectFit="contain"
              />
              <a className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-30 cursor-pointer"></a>
              <div
                data-tooltip="tooltip"
                className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-0  left-1/2 transform -translate-x-1/2 "
              >
                3 years+ experience
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-6 row-span-1 h-full">
        <div className="grid grid-cols-6 grid-rows-1 gap-1 h-full">
          <div className="relative flex justify-center items-center border-black mx-auto w-full ">
            <div className=" overflow-hidden group">
              <Image
                src={html5}
                alt="Image"
                layout="intrinsic"
                width={128}
                height={128}
                objectFit="contain"
              />
              <a className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-30 cursor-pointer"></a>
              <div
                data-tooltip="tooltip"
                className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-0  left-1/2 transform -translate-x-1/2 "
              >
                3 years+ experience
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center border-black mx-auto w-full ">
            <div className=" overflow-hidden group">
              <Image
                src={css3}
                alt="Image"
                layout="intrinsic"
                width={128}
                height={128}
                objectFit="contain"
              />
              <a className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-30 cursor-pointer"></a>
              <div
                data-tooltip="tooltip"
                className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-0  left-1/2 transform -translate-x-1/2 "
              >
                3 years+ experience
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center border-black mx-auto w-full ">
            <div className=" overflow-hidden group">
              <Image
                src={nextJS}
                alt="Image"
                layout="intrinsic"
                width={128}
                height={128}
                objectFit="contain"
              />
              <a className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-30 cursor-pointer"></a>
              <div
                data-tooltip="tooltip"
                className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-0  left-1/2 transform -translate-x-1/2 "
              >
                This website used nextJS
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center border-black mx-auto w-full ">
            <div className=" overflow-hidden group">
              <Image
                src={mui}
                alt="Image"
                layout="intrinsic"
                width={128}
                height={128}
                objectFit="contain"
              />
              <a className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-30 cursor-pointer"></a>
              <div
                data-tooltip="tooltip"
                className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-0  left-1/2 transform -translate-x-1/2 "
              >
                3 years experience
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center border-black mx-auto w-full ">
            <div className=" overflow-hidden group">
              <Image
                src={tailwind}
                alt="Image"
                layout="intrinsic"
                width={128}
                height={128}
                objectFit="contain"
              />
              <a className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-30 cursor-pointer"></a>
              <div
                data-tooltip="tooltip"
                className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-0  left-1/2 transform -translate-x-1/2 "
              >
                This website used Tailwind
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center border-black mx-auto w-full ">
            <div className=" overflow-hidden group">
              <Image
                src={puppy}
                alt="Image"
                layout="intrinsic"
                width={128}
                height={128}
                objectFit="contain"
              />
              <a className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-30 cursor-pointer"></a>
              <div
                data-tooltip="tooltip"
                className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-0  left-1/2 transform -translate-x-1/2 "
              >
                1 year experience
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-6 row-span-1 h-full">
        <div className="grid grid-cols-6 grid-rows-1 gap-1 h-full">
          <div className="relative flex justify-center items-center border-black mx-auto w-full ">
            <div className=" overflow-hidden group">
              <Image
                src={graph}
                alt="Image"
                layout="intrinsic"
                width={128}
                height={128}
                objectFit="contain"
              />
              <a className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-30 cursor-pointer"></a>
              <div
                data-tooltip="tooltip"
                className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-0  left-1/2 transform -translate-x-1/2 "
              >
                1 year experience
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center border-black mx-auto w-full ">
            <div className=" overflow-hidden group">
              <Image
                src={mongo}
                alt="Image"
                layout="intrinsic"
                width={128}
                height={128}
                objectFit="contain"
              />
              <a className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-30 cursor-pointer"></a>
              <div
                data-tooltip="tooltip"
                className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-0  left-1/2 transform -translate-x-1/2 "
              >
                1 year experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

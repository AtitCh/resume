import Image from 'next/image';

const Skill = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-3 gap-1 h-full">
      <div className="col-span-6 row-span-1 h-full">
        <div className="grid grid-cols-6 grid-rows-1 gap-1 h-full">
          <div className="relative flex justify-center items-center border-black mx-auto w-full ">
            <div className=" overflow-hidden group">
              <Image
                src={
                  process.env.NEXT_PUBLIC_APP_ENVIRONMENT
                    ? '/ts.png'
                    : 'resume/ts.png'
                }
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
                src={
                  process.env.NEXT_PUBLIC_APP_ENVIRONMENT
                    ? '/js.png'
                    : 'resume/js.png'
                }
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
                src={
                  process.env.NEXT_PUBLIC_APP_ENVIRONMENT
                    ? '/kotlin.png'
                    : 'resume/kotlin.png'
                }
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
                src={'/vueJs.png'}
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
                src={'/node.png'}
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
                src={'/react.png'}
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
                src={'/html5.png'}
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
                src={'css3.png'}
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
                src={'/next.png'}
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
                src={'/mui.png'}
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
                src={'/tailwind.png'}
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
                src={'/puppeteer.png'}
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
                src={'/graph.png'}
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
                src={'/mongoDB-Logo.png'}
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

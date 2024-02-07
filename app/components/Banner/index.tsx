import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-header" id="home">
      <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-7 flex flex-col justify-evenly relative">
            <Image
              src="/assets/banner/star.svg"
              alt="star-image"
              width={95}
              height={97}
              className="absolute top-[-74px] right-[51px]"
            />
            <Image
              src="/assets/banner/lineone.svg"
              alt="line-image"
              width={190}
              height={148}
              className="absolute top-[-74px] right-[51px]"
            />
            <h2 className="text-midnightblue text-4xl md:text-6xl	 text-center lg:text-start font-semibold lh-133 pt-5">
              Secret to our success is our customer's loyalty{" "}
            </h2>
            <h3 className="text-black opacity-75 text-lg font-normal text-center lg:text-start pt-8">
            Falon has established a standard of excellence by providing comprehensive support services to Federal, State, Local Governments, Corporations and Associations through delivering high quality cost effective innovative solutions. In addition, Falon is a graduate of the U.S. Small Business Administration 8(a) business development program.

            </h3>
           
          </div>

          <div className="col-span-5 flex justify-center xl:-mb-32 xl:-mr-32 pt-10 lg:pt-0">
            <img className="h-[80%]"  src="/hero.png"/>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

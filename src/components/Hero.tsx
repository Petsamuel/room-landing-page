import { useState, useEffect } from "react";
import arrow from "../assets/images/icon-arrow.svg";
import prev from "../assets/images/icon-angle-left.svg";
import next from "../assets/images/icon-angle-right.svg";
import { HeroContent } from "./data";

interface Herocontent {
  name: string;
  heading: JSX.Element;
  content: JSX.Element;
  cta: string;
  image: string;
  image2: string;
}

export const Hero = () => {
  const [load, setLoad] = useState<Herocontent>();
  const [count, setCounter] = useState<number>(0);

  useEffect(() => {
    setLoad(HeroContent[count]);
  }, [count]);

  const nextSlide = () => {
    setCounter((count + 1) % HeroContent.length);
  };
  const PrevSlide = () => {
    if (count != 0) {
      setCounter((count - 1) % HeroContent.length);
    }
  };

  return (
    <section className="flex gap-4 lg:flex-row flex-col">
      <div className="hidden lg:block">
        <img src={load?.image} alt="image" />
      </div>
      <div className="lg:hidden block">
        <img src={load?.image2} alt="image" className="h-[20rem] w-full" />
      </div>
      {/* section2 */}
      <div className="flex flex-col gap-4  lg:p-[4rem] p-6 leading-5 basis-1/2 relative">
        <div className="mt-8 text-4xl font-bold">{load?.heading}</div>
        <div className="text-gray-400 lg:text-start text-justify">
          {load?.content}
        </div>
        <div className="flex gap-3 uppercase font-semibold items-center tracking-[0.4rem] cursor-pointer hover:text-gray-400">
          {load?.cta} <img src={arrow} alt="shop now" className="" />
        </div>

        {/* hero controller */}
        <div className="absolute lg:bottom-0  end-0 lg:start-[-16px] flex  item-center mt-[-95px]">
          <div
            className="flex bg-black p-4 lg:p-6 hover:bg-gray-800 cursor-pointer"
            onClick={PrevSlide}
          >
            <img src={prev} alt="previous" />
          </div>
          <div
            className="bg-black flex  p-4 lg:p-6 hover:bg-gray-800 cursor-pointer"
            onClick={nextSlide}
          >
            {" "}
            <img src={next} alt=" next" />
          </div>
        </div>
      </div>
    </section>
  );
};

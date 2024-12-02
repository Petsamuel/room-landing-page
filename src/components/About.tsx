import { Suspense } from "react";
import { AboutContent } from "./data";

const About = () => {
  return (
    <Suspense
      fallback={
        <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
          <span className="sr-only">Loading...</span>
          <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-8 w-8 bg-black rounded-full animate-bounce"></div>
        </div>
      }
    >
      <section className="relative">
        <div className="pb-7 flex lg:flex-row flex-col lg:justify-start justify-center lg:mx-0  items-center  h-fit ">
          <img
            src={AboutContent[0].image2}
            className=" mb-auto w-full lg:w-fit"
          />

          {/* content */}
          <div className="lg:m-8 m-5 basis-1/3 text-pretty text-justify text-[--DarkGray] flex flex-col space-y-4">
            <span className=" lg:text-start text-center uppercase text-black font-bold pt-5">
              {AboutContent[0].heading}
            </span>
            {AboutContent[0].content}
          </div>
          {/* end content */}

          <img
            src={AboutContent[0].image1}
            alt=""
            className="mb-auto w-full lg:w-fit"
          />
        </div>
      </section>
    </Suspense>
  );
};

export default About;

import { AboutContent } from "./data";

const About = () => {
  return (
    <section className="relative">
      <div className="pb-7 flex lg:flex-row flex-col lg:justify-start justify-center lg:mx-0  items-center  h-fit ">
        <img src={AboutContent[0].image2} className="h-fit w-fit mb-auto" />
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
          className="mb-auto h-fit w-fit"
        />
      </div>
    </section>
  );
};

export default About;

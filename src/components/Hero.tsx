import { useState, useEffect, Suspense } from "react";
import arrow from "../assets/images/icon-arrow.svg";
import prev from "../assets/images/icon-angle-left.svg";
import next from "../assets/images/icon-angle-right.svg";
import placeholder from "../assets/images/desktop-image-hero-1.jpg";
import { HeroContent, ShopContent } from "./data";
import { ShopCart } from "./ShopCart";

interface Herocontent {
  name: string;
  heading: JSX.Element;
  content: JSX.Element;
  cta: string;
  image: string;
  image2: string;
}
interface ShopContent {
  title: string;
  heading: JSX.Element;
  content: JSX.Element;
}
type shopToggle = {
  shopToggle: boolean;
  setToggleShop: (arg: boolean) => void;
};

export const Hero = ({ shopToggle, setToggleShop }: shopToggle) => {
  const [load, setLoad] = useState<Herocontent>();
  const [count, setCounter] = useState<number>(0);
  const [shop, setShop] = useState<boolean>(false);
  const [itemCount, setItemCount] = useState<number>(1);
  const [showCart, setShowCart] = useState<boolean>(false);

  useEffect(() => {
    setLoad(HeroContent[count]);
  }, [count]);

  useEffect(() => {
    setShop(shopToggle);
  }, [shopToggle]);

  const nextSlide = () => {
    setCounter((count + 1) % HeroContent.length);
  };
  const PrevSlide = () => {
    if (count != 0) {
      setCounter((count - 1) % HeroContent.length);
    }
  };

  return (
    <section
      className={`${
        shop && "h - screen"
      } flex gap-4 lg:flex-row flex-col relative`}
    >
      <div className="hidden lg:block">
        <Suspense fallback={<div>Component1 are loading please wait...</div>}>
          <img
            src={load?.image ? load?.image : placeholder}
            alt="image"
            className={`${shop && "h-screen"}
          `}
          />
        </Suspense>
      </div>
      <div className="lg:hidden block">
        <img src={load?.image2} alt="image" className="" />
      </div>
      {/* section2 */}
      {showCart && (
        <ShopCart
          itemCount={itemCount}
          closeCart={() => setShowCart(!showCart)}
        />
      )}
      <div className="flex flex-col gap-4  lg:p-[4rem] p-6 leading-5 basis-1/2 relative">
        <div className="mt-8 text-4xl font-bold">
          {shop && (
            <p className="text-sm font-semibold text-black lowercase tracking-widest">
              {ShopContent[0].title}
            </p>
          )}
          {!shop ? load?.heading : ShopContent[0].heading}
        </div>
        <div className="text-gray-400 lg:text-start text-justify">
          {!shop ? load?.content : ShopContent[0].content}
        </div>
        {!shop ? (
          <div
            className="flex gap-3 uppercase font-semibold items-center tracking-[0.4rem] cursor-pointer hover:text-gray-400"
            onClick={() => {
              setToggleShop(true);
            }}
          >
            {load?.cta} <img src={arrow} alt="shop now" className="" />
          </div>
        ) : (
          <div className="flex flex-col gap-4 font-bold ">
            <div className="text-2xl flex flex-col lg:justify-end items-end">
              {ShopContent[0].price} {ShopContent[0].discount}
            </div>
            <div className="flex space-x-2 lg:justify-end">
              <div className="bg-gray-100 text-gray-900  cursor-pointer flex space-x-5 text-sm items-center">
                <p
                  className="text-2xl p-2 hover:bg-neutral-500 rounded-l-md"
                  onClick={() => {
                    setItemCount(itemCount == 1 ? 1 : itemCount - 1);
                  }}
                >
                  -
                </p>
                <p>{itemCount}</p>
                <p
                  className="text-2xl hover:bg-neutral-500 p-2 rounded-r-md"
                  onClick={() => {
                    setItemCount(itemCount + 1);
                  }}
                >
                  +
                </p>
              </div>
              <div
                onClick={() => setShowCart(!showCart)}
                className="bg-black text-white p-2 cursor-pointer flex items-center text-sm hover:bg-neutral-500"
              >
                🛒 Add to Cart
              </div>
            </div>
          </div>
        )}
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

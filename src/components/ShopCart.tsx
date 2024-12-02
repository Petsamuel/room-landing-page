import productImg from "../assets/images/desktop-image-hero-3.jpg";
import { ShopContent } from "./data";
import { useState, useEffect } from "react";

type cartCost = {
  itemCount: number;
  closeCart: () => void;
};

export const ShopCart = ({ itemCount, closeCart }: cartCost) => {
  const [result, setResult] = useState<number>();
  const price = 120.0;
  useEffect(() => {
    setResult(itemCount * price);
  }, [itemCount]);


  return (
    <>
      <section className="bg-white p-8 fixed left-0 shadow-md z-50 top-0] h-full">
        <div className="flex flex-col rounded-sm bg-white">
          <div className="flex justify-between">
            <p>Cart</p>
            <p
              onClick={() => closeCart()}
              className="p-2 cursor-pointer font-bold"
            >
              X
            </p>
          </div>
          <div className="my-2 border-b-2 h-3" />
          <div className="flex space-x-5">
            <div>
              <img src={productImg} className="rounded-sm w-[5rem] h-auto" />
            </div>
            <div className="text-sm">
              {ShopContent[0].heading}
              <p className="text-right ">
                {ShopContent[0].price} X {itemCount}
              </p>
              <p className="text-right">${result}</p>
            </div>
          </div>
          <div className="my-4 bg-black flex items-center text-white p-4  justify-center cursor-pointer">
            Checkout
          </div>
        </div>
      </section>
      <span className="fixed bg-black w-screen h-screen left-0 top-0 z-20 opacity-50 backdrop-blur-sm" />
    </>
  );
};

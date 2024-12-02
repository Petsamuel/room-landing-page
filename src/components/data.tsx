export const Navlist = [
  {
    name: "home",
    link: "#home",
  },
  {
    name: "shop",
    link: "#shop",
  },
  {
    name: "about",
    link: "/#about",
  },
  {
    name: "contact",
    link: "#contact",
  },
];
import hero1 from "../assets/images/desktop-image-hero-1.jpg";
import hero2 from "../assets/images/desktop-image-hero-2.jpg";
import hero3 from "../assets/images/desktop-image-hero-3.jpg";
import Mhero1 from "../assets/images/mobile-image-hero-1.jpg";
import Mhero2 from "../assets/images/mobile-image-hero-2.jpg";
import Mhero3 from "../assets/images/mobile-image-hero-3.jpg";

export const HeroContent = [
  {
    name: "slide 1",
    heading: <h1> Discover innovative ways to decorate</h1>,
    content: (
      <p>
        We provide unmatched quality, comfort, and style for property owners
        across the country. Our experts combine form and function in bringing
        your vision to life. Create a room in your own style with our collection
        and make your property a reflection of you and what you love.
      </p>
    ),
    cta: "Shop now",
    image: hero1,
    image2: Mhero1,
  },
  {
    name: "slide 2",
    heading: <h1> We are available all across the globe</h1>,
    content: (
      <p>
        {" "}
        With stores all over the world, it's easy for you to find furniture for
        your home or place of business. Locally, we’re in most major cities
        throughout the country. Find the branch nearest you using our store
        locator. Any questions? Don't hesitate to contact us today.
      </p>
    ),
    cta: "Shop now",
    image: hero2,
    image2: Mhero2,
  },
  {
    name: "slide 3",
    heading: <h1> Manufactured with the best materials</h1>,
    content: (
      <p>
        {" "}
        Our modern furniture store provide a high level of quality. Our company
        has invested in advanced technology to ensure that every product is made
        as perfect and as consistent as possible. With three decades of
        experience in this industry, we understand what customers want for their
        home and office.
      </p>
    ),
    cta: "Shop now",
    image: hero3,
    image2: Mhero3,
  },
];
import AboutImage1 from "../assets/images/image-about-light.jpg";
import AboutImage2 from "../assets/images/image-about-dark.jpg";
export const AboutContent = [
  {
    heading: <h1> About our funiture</h1>,
    content: (
      <p>
        Our multifunctional collection blends design and function to suit your
        individual taste. Make each room unique, or pick a cohesive theme that
        best express your interests and what inspires you. Find the furniture
        pieces you need, from traditional to contemporary styles or anything in
        between. Product specialists are available to help you create your dream
        space.
      </p>
    ),
    image1: AboutImage1,
    image2: AboutImage2,
  },
];
export const ShopContent = [
  {
    title: <p className="lg:text-right font-bold">room Shop</p>,
    heading: <h1 className="lg:text-right">Multifunctional collection</h1>,
    price: <p className="lg:text-right">$120.00</p>,
    discount: <p className="text-xs line-through text-gray-600">$250.00</p>,
    content: (
      <p className="lg:text-right">
        Find the furniture pieces you need, from traditional to contemporary
        styles or anything in between.
      </p>
    ),
  },
];

import Link from "next/link";
import heroCard from "./components/hero_card";
import { Gauge, Shield, UsersRound } from "lucide-react";
import Button from "./components/button";
import HandBurger from "./components/HandBurger";

export default function Home() {

  const heroCards: { title: string; description: string }[] = [
    {
      title: "Connect with your community",
      description: "Engage with your audience through instant messaging, live streaming, and interactive content."
    },
    {
      title: "Create and share content",
      description: "Easily create and share content with your followers, from videos to blog posts."
    },
    {
      title: "Trade and monetize",
      description: "Sell your products and services directly to your audience, with seamless payment integration."
    }
  ];

  return (
    <>
      <header className="w-full flex flex-row items-center justify-between">
        <Link href={"/"} id="logo" className="flex flex-col items-center gap-x-5">
          <img src="logo_transparent.png" alt="logo" width={100} height={200} />
          <p className="text-indigo-800 font-bold">Shaine</p>
        </Link>
        <nav className="hidden md:flex flex-row items-center gap-x-5">
          <Link href={"/#/about"} className="text-indigo-800 font-bold visited:text-indigo-500 hover:underline">
            About Us
          </Link>
          <Link href={"/#/contact"} className="text-indigo-800 font-bold visited:text-indigo-500 hover:underline">
            Contact Us
          </Link>
          <Link href={"/#/sign-in"} className="p-2 rounded-md bg-indigo-800 text-white visited:bg-indigo-500 hover:bg-blue-500 active:bg-indigo-400">
            Sign In
          </Link>
        </nav>
        <span className="sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden">
          <HandBurger />
        </span>
      </header>
      <main className="">
        <div id="hero" className="flex flex-col space-y-5 text-white bg-linear-to-r from-indigo-700 via-blue-500 to-cyan-500 rounded-t-2xl px-1 md:px-5 py-5 ">
          <div className="flex flex-row justify-between items-center">
            <div className="p-10 flex flex-col gap-y-5">
              <h1 className="text-4xl font-bold">
                Connect, Create and Trade in one Place
              </h1>
              <p className="text-lg">
                The next generation of social media and e-commerce, built for authentic interaction,
                instant messaging and seenless user storefront between creators and their communities.
              </p>
              <div id="CTO" className="flex flex-row space-x-5">
                <Link href={"/sign-in"} className="p-2 rounded-md bg-indigo-800 text-white shadow-lg hover:scale-105 active:scale-80 duration-500">
                  Get Started
                </Link>
                <Link href={"/about"} className="p-2 rounded-md bg-white text-indigo-800 shadow-lg hover:scale-105 active:scale-80 duration-500">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden md:flex">
              <img src="desktop.png" alt="hero image" width={1000} height={500} />
            </div>
          </div>
          <div id="hero-cards" className="flex flex-col md:flex-row flex-nowrap justify-around items-center space-x-5">
            {heroCards.map((card, index) => (
              <div key={index} className="p-5">
                {heroCard(card.title, card.description)}
              </div>
            ))}
          </div>
        </div>
        <div id="built-for-performance" className="flex flex-col-reverse md:flex-row justify-around items-center p-10 md:space-x-5">
          <div className="flex flex-col justify-center items-center gap-y-5">
            <h2 className="text-3xl font-bold text-indigo-800">
              Built for Performance and Security. Engineered with Modern Web Standard...
            </h2>
          </div>
          <div className="flex flex-row gap-x-10">
            <Shield className="text-indigo-800 w-20 h-20 md:w-50 md:h-50" />
            <Gauge className="text-indigo-800 w-20 h-20 md:w-50 md:h-50" />
          </div>
        </div>
        <div id="creators-business" className="w-full px-5 bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-700 text-white flex flex-row justify-between md:justify-around items-center rounded-t-2xl p-10 space-x-3 md:space-x-5">
          <div className="flex flex-col justify-center items-center gap-y-5">
            <UsersRound className="w-15 h-15 md:w-30 md:h-30" />
            <h2 className="text-2xl font-bold">
              For Creators and Businesses
            </h2>
            <p className="text-lg">
              Shaine is designed to help creators and businesses connect with their communities, create and share content, and trade and monetize their products and services.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-5">
            <UsersRound className="w-15 h-15 md:w-30 md:h-30" />
            <h2 className="text-2xl font-bold">
              For Everyday Users
            </h2>
            <p className="text-lg">
              Shaine is designed to help everyday users connect with their favorite creators and businesses, discover new content, and engage with their communities.
            </p>
          </div>
        </div>
      </main>
      <footer className="flex flex-col items-center gap-y-2 p-10 bg-indigo-500 text-gray-200">
        <h3 className="text-xl font-bold">Join the Waitlist</h3>
        <p>Be the first to know when we launch!</p>
        <div className="flex flex-row space-x-4 items-center">
          <input type="text" className="bg-white text-black h-8 w-50 p-4 border-4 rounded-md" />
          <Button content="Join Now" />
        </div>
        <div className="md:w-full border-t border-gray-400 flex flex-col md:flex-row justify-between items-center gap-y-5 md:gap-x-5">
          <div>
            <Link href={"/privacy-policy"} className="text-white font-bold visited:text-indigo-500 hover:underline">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link href={"/terms-of-service"} className="text-white font-bold visited:text-indigo-500 hover:underline">
              Terms of Service
            </Link>
          </div>
          <div id="socials">
            <Link href={"https://twitter.com/shaineplatform"} target="_blank" className="text-white font-bold visited:text-indigo-500 hover:underline">
              Twitter
            </Link>
            <span className="mx-2">|</span>
            <Link href={"https://www.instagram.com/shaineplatform/"} target="_blank" className="text-white font-bold visited:text-indigo-500 hover:underline">
              Instagram
            </Link>
            <span className="mx-2">|</span>
            <Link href={"https://www.linkedin.com/company/shaineplatform/"} target="_blank" className="text-white font-bold visited:text-indigo-500 hover:underline">
              LinkedIn
            </Link>
          </div>
        </div>
        <div>
          <p>&copy; 2026 Shaine. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

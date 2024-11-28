import Link from "next/link";
import { BlogCard } from "./components/blog-card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="container max-w-2xl px-4 py-8 mx-auto space-y-8">
        <div id="header" className="flex justify-between py-4 text-sm">
          <button>Subscribe</button>
          <button>Share</button>
        </div>
        <div id="hero" className="flex flex-col items-center space-y-4 text-center">
          <span className="relative flex shrink-0 overflow-hidden rounded-full w-24 h-24"><img className="aspect-square h-full w-full" alt="Profile Picture" src="https://v0.dev/placeholder.svg" /></span>
          <div className="space-y-2">
            <div className="flex justify-center items-center gap-2">
              <h1 className="text-2xl font-bold">Enric Trillo</h1>
              <Image
                src={"/images/twitter-badge.png"}
                alt=""
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </div>
            <p className="font-medium text-muted-foreground">Building with disruptive tech</p>
            <p className="text-muted-foreground">My name is Enric J Trillo Nchana and I'm a fullstack developer, solopreneur and creator based in 🇬🇧 London. Focused on disruptive technologies. Nice to have you here!</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <div className="rounded-full bg-slate-200 cursor-pointer hover:bg-slate-300 duration-300 px-4 py-1">@ricomeetsworld</div>
          <div className="rounded-full bg-slate-200 cursor-pointer hover:bg-slate-300 duration-300 px-4 py-1">@ricomeetsworld</div>
          <div className="rounded-full bg-slate-200 cursor-pointer hover:bg-slate-300 duration-300 px-4 py-1">/enrictrillo</div>
          <div className="rounded-full bg-slate-200 cursor-pointer hover:bg-slate-300 duration-300 px-4 py-1">@ricomeetsworld</div>
        </div>
        <div className="">
          <h3 className="mb-8 mt-16 text-base border-b border-slate-600/15 pb-4">Blogs</h3>
          <div className=" space-y-4">
            {Array(3).fill({ title: "How to get started with Phidata Agents" }).map((p, idx) => (
              <div key={idx} className="border relative duration-300 transition-all border-slate-300 rounded-lg hover:border-indigo-200 bg-white group hover:cursor-pointer shadow-sm hover:shadow-md">
                {/* <span className="absolute inset-0" aria-hidden></span> */}
                <div className="p-6 pb-2 flex justify-between">
                  <h3 className="font-semibold group-hover:text-indigo-600">{p.title}</h3>
                  <span className="text-muted-foreground">Nov 28, 2018</span>
                </div>
                <p className="text-gray-600 p-6 pt-0">A comprehensive guide to building your first AI-powered application</p>
              </div>
            ))}
          </div>
          <button
            className="bg-black hover:bg-opacity-80 transition-colors duration-300 w-full py-2 font-semibold text-white rounded-md"
          >View blog archive</button>
        </div>
        <div className="">
          <h3 className="mb-8 mt-16 text-base border-b border-slate-600/15 pb-4">Short Bio</h3>
          <p className="mb-5">My journey began with Python in February 2016 at St Francis Xavier. Progressing into a bachelor's degree at University of Northampton (2017-2020) helped me explore my passion for systems design and problem solving, contributing towards my foundation that led to me landing a £5,500/month tech contract role at 23, and building a tiny ChatGPT chrome extension with +1,100 users at its peak.</p>
          <p>Now, I'm focused on evolving as a fullstack developer, building with disruptive technologies, and creating interactive software solutions that explore new possibilities.</p>
          <button
            className="bg-black hover:bg-opacity-80 transition-colors duration-300 w-full py-2 font-semibold text-white rounded-md"
          >View blog archive</button>
        </div>
        <div id="newsletter" className="space-y-4 bg-slate-100 p-6 rounded-md">
          <h2 className="text-xl font-semibold">Email Newsletter</h2>
          <p>Join <strong>[Shift Forward]</strong> for disruptive tech updates, exclusive offers & members only content directly from me. We don't do spam over here, I promise!</p>
          <form className="flex flex-col gap-4">
            <div className="">
              <label htmlFor="name">First Name</label>
              <input
                id="name"
                type="text"
                placeholder="Type your first name"
                className="block border py-1 px-2 rounded-md w-full"
              />
            </div>
            <div className="">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Type your email address"
                className="block border py-1 px-2 rounded-md w-full"
              />
            </div>
            <button
              className="bg-black hover:bg-opacity-80 transition-colors duration-300 w-full py-2 font-semibold text-white rounded-md"
            >Become a Shifter</button>
          </form>
        </div>
        <footer className="mt-16 border-t border-white/15 pt-8 sm:flex items-center flex-row sm:justify-between">
          <p className="text-sm leading-5 text-muted-foreground">
            <p>© {new Date().getFullYear()} | <Link className="text-muted-foreground underline hover:text-black hover:no-underline duration-300" href={'https://metasyde.com'} target="_blank">Metasyde</Link> - All rights reserved.</p>
          </p>
        </footer>
      </div>
    </main>
  );
}

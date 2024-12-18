import Link from "next/link";
import { BlogCard } from "./components/blog-card";
import Image from "next/image";
import { Hanken_Grotesk, Cormorant_Garamond } from 'next/font/google'
import localFont from 'next/font/local'
import { socialSoup } from "@/lib/constants";

  // const brandFont = Hanken_Grotesk({
  //   weight: ["600", "700", "800", "900"],
  //   subsets: ['latin']
  // })
const italicFont = Cormorant_Garamond({
  weight: ['700'],
  style: 'italic',
  subsets: ['latin'],
})
const brandFont = localFont({
  src: '../public/fonts/ClashGrotesk-Variable.ttf',
  weight: "100 900"
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="space-y-8 mx-auto mt-32 px-6 py-8 max-w-screen-md">
        <div id="hero" className="flex flex-col items-center text-center">
          <span className="relative hidden rounded-full w-24 h-24 overflow-hidden shrink-0"><img className="left-1/2 absolute -translate-x-1/2" alt="Profile Picture" src="/images/graduation.jpg" /></span>
          <div className="space-y-2">
            <div
              className="justify-center items-center gap-1 hidden"
            >
              <h1 className="font-bold text-2xl">Enric J Trillo Nchana</h1>
              <Image
                src={"/images/twitter-badge.png"}
                alt=""
                width={20}
                height={20}
                className="w-5 h-5 select-none"
              />
            </div>
            <p className="hidden font-medium text-muted-foreground">
              <span>Est. 1999</span>
              <span className="mx-2">·</span>
              <span>London, UK</span>
              <span className="mx-2">·</span>
              <span>🇬🇶, 🇪🇸</span>
            </p>   
            <h1 className={`text-3xl md:text-[44px] text-center font-black ${italicFont.className}`}>I'm Enric 💫 and I build what's next with <span className={`uppercase font-black p-1 inline-block bg-clip-text bg-gradient-to-r from-blue-500 to-amethyst-500 text-transparent ${brandFont.className}`}>Disruptive Technologies</span></h1>
            <p className="text-balance text-lg text-muted-foreground">I'm a fullstack developer, solopreneur and creator currently based in 🇬🇧 London. Focused on disruptive technologies. Nice to have you here!</p>
          </div>
        </div>
        <div id="soup" className="flex flex-wrap justify-center gap-2 mx-auto max-w-lg text-sm">
          {
            socialSoup.map((s, idx) => (
              <Link key={idx} href={s.href} target="_blank">
                <div className="flex items-center gap-1 hover:bg-accent px-4 py-1 rounded-full duration-300 cursor-pointer">
                  <div className="w-5 h-5">
                    <Image
                      src={s.imagePath}
                      alt={`${s.platform} Profile`}
                      width={20}
                      height={20}
                      className={`w-5 h-5 ${s.invert && 'dark:invert'}`}
                    />
                  </div>
                  {s.username}
                </div>
              </Link>
            ))
          }
        </div>
        <div className="space-y-4 border-obsidian-300 dark:border-obsidian-800 bg-card p-6 border rounded-md">
          <h3 className="border-slate-600/15 mb-6 pb-4 border-b font-semibold text-base">Blogs</h3>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
            {Array(4).fill({
              title: "How to get started with Phidata Agents",
              description: "A comprehensive guide to building your first AI-powered application using top notch tools like Convex and Beacon AI"
            }).map((p, idx) => (
              <BlogCard key={idx} date="Nov 29, 2024" title={p.title} description={p.description} />
            ))}
          </div>
          <button
            className="bg-black dark:bg-celuria-500 hover:bg-opacity-80 mt-6 py-2 rounded-md w-full font-semibold text-white dark:text-black transition-colors duration-300"
          >See all posts</button>
        </div>
        <div className="space-y-4 border-obsidian-300 dark:border-obsidian-800 bg-card p-6 border rounded-md">
          <div id="bio">
            <h3 className="border-slate-600/15 mb-6 pb-4 border-b font-semibold text-base">Short Bio</h3>
            <p className="mb-5">My programming journey began in February 2016 by learning Python at St Francis Xavier. Progressing into a bachelor's degree at University of Northampton (2017-2020) helped me explore my passion for systems design and problem solving, contributing towards my foundation that led to me landing a £5,500/month tech contract role at 23, and building a tiny ChatGPT chrome extension with +1,100 users at its peak.</p>
            <p>Now, I'm focused on evolving as a fullstack developer, building with disruptive technologies, and creating interactive software solutions that explore new possibilities. Beyond tech, I'm a DJ and Producer using music as a melodic expression of my soul.</p>
            <button
              className="bg-black dark:bg-amethyst-500 hover:bg-opacity-80 mt-6 py-2 rounded-md w-full font-semibold text-white dark:text-black transition-colors duration-300"
            >More about me</button>
          </div>
        </div>
        <div id="cta" className="flex md:flex-row flex-col justify-between items-center gap-4 bg-white p-12 border border-border rounded-md text-secondary-foreground">
          <p className={`text-xl md:text-2xl font-black text-secondary ${brandFont.className}`}>Stack skills to thrive, in the age of AI</p>
          <button className="bg-secondary hover:bg-secondary-hover px-4 py-1 rounded-md text-secondary-foreground">Start Learning</button>
        </div>
        <div id="newsletter" className="space-y-4 border-obsidian-300 dark:border-obsidian-800 bg-card p-6 border rounded-md">
          <h3 className="border-slate-600/15 mb-6 pb-4 border-b font-semibold text-base">Newsletter</h3>
          <p>Join <strong>[Shift Forward]</strong> for disruptive tech updates, exclusive offers & members only content directly from me. We don't do spam, and you can unsub anytime!</p>
          <form className="flex flex-col gap-4">
            <div className="">
              <label htmlFor="name" className="font-medium">First Name</label>
              <input
                id="name"
                type="text"
                placeholder="Type your first name"
                className="block border-obsidian-300 dark:border-obsidian-800 bg-white dark:bg-[#171717] px-2 py-1 border rounded-md w-full"
              />
            </div>
            <div className="">
              <label htmlFor="email" className="font-medium">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="name@email.com"
                className="block border-obsidian-300 dark:border-obsidian-800 bg-white dark:bg-[#171717] px-2 py-1 border rounded-md w-full"
              />
            </div>
            <button
              className="bg-amethyst-500 hover:bg-opacity-80 py-2 rounded-md w-full font-semibold text-white transition-colors duration-300"
            >Become a Shifter</button>
          </form>
        </div>
        <div id="contact">
          <section className="space-y-4 border-obsidian-300 dark:border-obsidian-800 bg-card p-6 border rounded-md">
            <h3 className="border-slate-600/15 mb-6 pb-4 border-b font-semibold text-base">Get In Touch</h3>
            <form className="flex flex-col gap-4">
              <div className="">
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="First name"
                  className="block border-obsidian-300 dark:border-obsidian-800 bg-white dark:bg-[#171717] px-2 py-1 border rounded-md w-full"
                />
              </div>
              <div className="">
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="name@email.com"
                  className="block border-obsidian-300 dark:border-obsidian-800 bg-white dark:bg-[#171717] px-2 py-1 border rounded-md w-full"
                />
              </div>
              <div className="">
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Type your message"
                  className="flex border-obsidian-300 dark:border-obsidian-800 bg-white dark:bg-[#171717] px-2 py-1 border rounded-md w-full min-h-[80px]"
                />
              </div>
              <button
                className="bg-black hover:bg-opacity-80 py-2 rounded-md w-full font-semibold text-white transition-colors duration-300"
              >Send</button>
            </form>
          </section>
        </div>
        <div id="outro" className="bg-foreground p-12 border border-border rounded-lg text-background">
          <h3 className={`text-4xl font-black ${brandFont.className}`}>Let's build visions into reality 🧿</h3>
          <p>Looking to start a new project, build with either AI, Web3 or No-Code, or just want to chat disruptive ideas? I’d love to hear from you!</p>
          <button className="bg-secondary mt-6 px-4 py-2 rounded-md ring-0 hover:ring-4 hover:ring-secondary/60 font-medium text-secondary-foreground text-sm transition-all duration-300">Talk to me</button>
        </div>
      </div>
    </main>
  );
}

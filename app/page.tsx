import Link from "next/link";
import { BlogCard } from "./components/blog-card";
import Image from "next/image";

interface ISocialSoup {
  imagePath: string
  username: string
  href: string
  platform: string
  invert?: boolean
}

export default function Home() {
  const socialSoup: ISocialSoup[] = [
    {
      imagePath: '/x.svg',
      platform: 'X',
      username: '@ricomeetsworld',
      href: 'https://x.com/ricomeetsworld',
      invert: true
    },
    {
      imagePath: '/linkedin.svg',
      platform: 'LinkedIn',
      username: '/enrictrillo',
      href: 'https://linkedin.com/in/enrictrillo'
    },
    {
      imagePath: '/youtube.svg',
      platform: 'YouTube',
      username: '@ricomeetsworld',
      href: 'https://youtube.com/@ricomeetsworld'
    },
    {
      imagePath: '/github.svg',
      platform: 'GitHub',
      username: '@ricomeetsworld',
      href: 'https://github.com/ricomeetsworld',
      invert: true
    },
    {
      imagePath: '/bsky.svg',
      platform: 'BlueSky',
      username: '@ricomeetsworld',
      href: 'https://bsky.app/profile/ricomeetsworld.bsky.social'
    },
  ]
  return (
    <main className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="container max-w-2xl px-4 py-8 mx-auto space-y-8">
        <div id="header" className="flex justify-between py-4 text-sm">
          <button>Subscribe</button>
          <button>Share</button>
        </div>
        <div id="hero" className="flex flex-col items-center space-y-4 text-center">
          <span className="relative flex w-24 h-24 overflow-hidden rounded-full shrink-0"><img className="absolute -translate-x-1/2 left-1/2" alt="Profile Picture" src="/images/graduation.jpg" /></span>
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-2xl font-bold">Enric Trillo</h1>
              <Image
                src={"/images/twitter-badge.png"}
                alt=""
                width={20}
                height={20}
                className="w-5 h-5 select-none"
              />
            </div>
            <p className="font-semibold text-muted-foreground">Building with disruptive tech</p>
            <p className="text-muted-foreground">My name is Enric J Trillo Nchana and I'm a fullstack developer, solopreneur and creator based in 🇬🇧 London. Focused on disruptive technologies. Nice to have you here!</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 text-sm">
          {
            socialSoup.map((s, idx) => (
              <Link href={s.href} target="_blank">
                <div key={idx} className="rounded-full flex items-center gap-1 bg-slate-200 dark:bg-[#111111] cursor-pointer hover:bg-slate-300 dark:hover:bg-[#161616] duration-300 px-4 py-1">
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
        <div className="">
          <h2 className="pb-4 mt-16 mb-8 text-base font-semibold border-b border-slate-600/15">Blogs</h2>
          <div className="space-y-4">
            {Array(3).fill({ title: "How to get started with Phidata Agents" }).map((p, idx) => (
              <div key={idx} className="relative p-4 overflow-hidden transition-all duration-300 border rounded-md shadow-sm group hover:cursor-pointer hover:shadow-md hover:bg-muted border-obsidian-300 hover:border-amethyst-300 dark:border-obsidian-800 dark:hover:border-amethyst-800">
                <span className="absolute inset-0" aria-hidden></span>
                <div className="flex items-center space-x-3">
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-semibold group-hover:text-amethyst-600">{p.title}</h3>
                      <span>Nov 28, 2024</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-1">A comprehensive guide to building your first AI-powered application using top notch tools like Convex and Beacon AI</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="w-full py-2 mt-6 font-semibold text-white transition-colors duration-300 bg-black rounded-md dark:bg-celuria-500 hover:bg-opacity-80 dark:text-black"
          >See all posts</button>
        </div>
        <div className="">
          <h3 className="pb-4 mt-16 mb-8 text-base font-semibold border-b border-slate-600/15">Short Bio</h3>
          <p className="mb-5">My journey began with Python in February 2016 at St Francis Xavier. Progressing into a bachelor's degree at University of Northampton (2017-2020) helped me explore my passion for systems design and problem solving, contributing towards my foundation that led to me landing a £5,500/month tech contract role at 23, and building a tiny ChatGPT chrome extension with +1,100 users at its peak.</p>
          <p>Now, I'm focused on evolving as a fullstack developer, building with disruptive technologies, and creating interactive software solutions that explore new possibilities.</p>
          <button
            className="w-full py-2 mt-6 font-semibold text-white transition-colors duration-300 bg-black rounded-md dark:bg-amethyst-500 hover:bg-opacity-80 dark:text-black"
          >More about me</button>
        </div>
        <div id="newsletter" className="p-6 space-y-4 bg-white border rounded-md">
          <p>Join <strong>[Shift Forward]</strong> for disruptive tech updates, exclusive offers & members only content directly from me. We don't do spam, and you can unsub anytime!</p>
          <form className="flex flex-col gap-4">
            <div className="">
              <label htmlFor="name">First Name</label>
              <input
                id="name"
                type="text"
                placeholder="Type your first name"
                className="block w-full px-2 py-1 border rounded-md"
              />
            </div>
            <div className="">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Type your email address"
                className="block w-full px-2 py-1 border rounded-md"
              />
            </div>
            <button
              className="w-full py-2 font-semibold text-white transition-colors duration-300 rounded-md bg-amethyst-500 hover:bg-opacity-80"
            >Become a Shifter</button>
          </form>
        </div>
        <div id="contact" className="">
          <h3 className="pb-4 mt-16 mb-8 text-base font-semibold border-b border-slate-600/15">Get In Touch</h3>
          <form className="flex flex-col gap-4">
            <div className="">
              <label
                htmlFor="name"
                className="block mb-2 font-medium"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                className="block w-full px-2 py-1 border rounded-md"
              />
            </div>
            <div className="">
              <label
                htmlFor="email"
                className="block mb-2 font-medium"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Your email address"
                className="block w-full px-2 py-1 border rounded-md"
              />
            </div>
            <div className="">
              <label
                htmlFor="message"
                className="block mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Your message"
                className="flex w-full px-2 py-1 border rounded-md min-h-[80px]"
              />
            </div>
            <button
              className="w-full py-2 font-semibold text-white transition-colors duration-300 bg-black rounded-md hover:bg-opacity-80"
            >Send</button>
          </form>
        </div>
        <footer className="flex-row items-center pt-8 mt-16 border-t border-white/15 sm:flex sm:justify-between">
          <div className="text-sm leading-5 text-muted-foreground">
            <p>© {new Date().getFullYear()} | <Link className="underline duration-300 text-muted-foreground hover:text-black hover:no-underline" href={'https://metasyde.com'} target="_blank">Metasyde</Link> - All rights reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}

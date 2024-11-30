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
      <div className="container max-w-2xl px-6 py-8 mx-auto mt-32 space-y-8">
        <div id="hero" className="flex flex-col items-center space-y-4 text-center">
          <span className="relative flex w-24 h-24 overflow-hidden rounded-full shrink-0"><img className="absolute -translate-x-1/2 left-1/2" alt="Profile Picture" src="/images/graduation.jpg" /></span>
          <div className="space-y-2">
            <div
              className="flex items-center justify-center gap-2"
            >
              <h1 className="text-2xl font-bold">Enric J Trillo Nchana</h1>
              <Image
                src={"/images/twitter-badge.png"}
                alt=""
                width={20}
                height={20}
                className="w-5 h-5 select-none"
              />
            </div>
            <p className="font-medium text-muted-foreground">
              <span>Est. 1999</span>
              <span className="mx-2">·</span>
              <span>London, UK</span>
              <span className="mx-2">·</span>
              <span>🇬🇶, 🇪🇸</span>
            </p>
            <p className="text-lg text-muted-foreground text-balance">I'm a fullstack developer, solopreneur and creator currently based in 🇬🇧 London. Focused on disruptive technologies. Nice to have you here!</p>
          </div>
        </div>
        <div id="soup" className="flex flex-wrap justify-center gap-2 text-sm">
          {
            socialSoup.map((s, idx) => (
              <Link key={idx} href={s.href} target="_blank">
                <div className="rounded-full flex items-center gap-1 bg-slate-200 dark:bg-[#111111] cursor-pointer hover:bg-slate-300 dark:hover:bg-[#161616] duration-300 px-4 py-1">
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
            {Array(3).fill({
              title: "How to get started with Phidata Agents",
              description: "A comprehensive guide to building your first AI-powered application using top notch tools like Convex and Beacon AI"
            }).map((p, idx) => (
              <BlogCard key={idx} date="Nov 29, 2024" title={p.title} description={p.description} />
            ))}
          </div>
          <button
            className="w-full py-2 mt-6 font-semibold text-white transition-colors duration-300 bg-black rounded-md dark:bg-celuria-500 hover:bg-opacity-80 dark:text-black"
          >See all posts</button>
        </div>
        <div className="bg-white dark:bg-[#101010] p-4 rounded-lg border border-obsidian-300 dark:border-obsidian-800">
          <div id="bio">
            <h3 className="pb-4 mb-6 text-base font-semibold border-b border-slate-600/15">Short Bio</h3>
            <p className="mb-5">My journey began with Python in February 2016 at St Francis Xavier. Progressing into a bachelor's degree at University of Northampton (2017-2020) helped me explore my passion for systems design and problem solving, contributing towards my foundation that led to me landing a £5,500/month tech contract role at 23, and building a tiny ChatGPT chrome extension with +1,100 users at its peak.</p>
            <p>Now, I'm focused on evolving as a fullstack developer, building with disruptive technologies, and creating interactive software solutions that explore new possibilities.</p>
            <button
              className="w-full py-2 mt-6 font-semibold text-white transition-colors duration-300 bg-black rounded-md dark:bg-amethyst-500 hover:bg-opacity-80 dark:text-black"
            >More about me</button>
          </div>
        </div>
        <div id="newsletter" className="p-6 space-y-4 bg-white dark:bg-[#101010] border border-obsidian-300 dark:border-obsidian-800 rounded-md">
          <p>Join <strong>[Shift Forward]</strong> for disruptive tech updates, exclusive offers & members only content directly from me. We don't do spam, and you can unsub anytime!</p>
          <form className="flex flex-col gap-4">
            <div className="">
              <label htmlFor="name" className="font-medium">First Name</label>
              <input
                id="name"
                type="text"
                placeholder="Type your first name"
                className="block w-full px-2 py-1 bg-white border rounded-md border-obsidian-300 dark:border-obsidian-800 dark:bg-[#171717]"
              />
            </div>
            <div className="">
              <label htmlFor="email" className="font-medium">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Type your email address"
                className="block w-full px-2 py-1 border rounded-md bg-white border-obsidian-300 dark:border-obsidian-800 dark:bg-[#171717]"
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
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                className="block w-full px-2 py-1 bg-white border rounded-md border-obsidian-300 dark:border-obsidian-800 dark:bg-[#171717]"
              />
            </div>
            <div className="">
              <input
                id="email"
                type="email"
                required
                placeholder="Your email"
                className="block w-full px-2 py-1 bg-white border rounded-md border-obsidian-300 dark:border-obsidian-800 dark:bg-[#171717]"
              />
            </div>
            <div className="">
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Your message"
                className="flex w-full px-2 py-1 border rounded-md min-h-[80px] bg-white border-obsidian-300 dark:border-obsidian-800 dark:bg-[#171717]"
              />
            </div>
            <button
              className="w-full py-2 font-semibold text-white transition-colors duration-300 bg-black rounded-md hover:bg-opacity-80"
            >Send</button>
          </form>
        </div>
      </div>
    </main>
  );
}

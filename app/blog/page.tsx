import localFont from "next/font/local";
import { BlogCard } from "../components/blog-card";

const brandFont = localFont({
  src: '../../public/fonts/ClashGrotesk-Variable.ttf',
  weight: "100 900"
})

export default function Blog() {
  return (
    <main className="min-h-screen">
      <div className="relative flex flex-col gap-8 space-y-8 mx-auto mt-32 px-6 max-w-screen-md">
        <h1 className={`text-4xl md:text-[44px] font-black ${brandFont.className}`}>Blog</h1>
        <div className="gap-6 grid grid-cols-1">
          {Array(4).fill({
            title: "How to get started with Phidata Agents",
            description: "A comprehensive guide to building your first AI-powered application using top notch tools like Convex and Beacon AI"
          }).map((p, idx) => (
            <BlogCard key={idx} date="Nov 29, 2024" title={p.title} description={p.description} />
          ))}
        </div>
      </div>
    </main>
  )
}
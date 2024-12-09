import Image from "next/image"

interface IBlogCard {
  date: string
  title: string
  description: string
}

export function BlogCard({ date, title, description }: IBlogCard) {
  return (
    <div className="relative shadow-sm hover:shadow-lg rounded-lg ring-0 ring-secondary/40 hover:ring-4 transition-all duration-300 hover:cursor-pointer overflow-hidden group">
      <span className="z-10 absolute inset-0" aria-hidden></span>
      <div className="relative overflow-hidden">
        <img src="https://framerusercontent.com/images/fjZU9bhpU198PKLMfIpvzagvT4.jpg" alt="" width={600} height={600} className="rounded-md w-full h-48 duration-300 object-cover" />
        <span className="noise"></span>
      </div>
      <div className="bottom-0 absolute flex p-1">
        <div className="group-hover:bg-secondary group-hover:text-primary-foreground flex-1 bg-card p-2 rounded-md transition-all duration-300">
          <span className="group-hover:text-primary-foreground text-muted-foreground text-xs">{date}</span>
          <div className="flex justify-between">
            <h3 className="group-hover:text-primary-foreground font-medium text-muted-foreground">{title}</h3>
          </div>
          <p className="group-hover:text-primary-foreground line-clamp-1 text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}
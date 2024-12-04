import Image from "next/image"

interface IBlogCard {
  date: string
  title: string
  description: string
}

export function BlogCard({ date, title, description }: IBlogCard) {
  return (
    <div className="relative shadow-sm hover:shadow-md border border-border rounded-lg transition-all duration-300 hover:cursor-pointer overflow-hidden group">
      <span className="absolute inset-0" aria-hidden></span>
      <div className="relative overflow-hidden">
        <img src="https://framerusercontent.com/images/fjZU9bhpU198PKLMfIpvzagvT4.jpg" alt="" width={600} height={600} className="group-hover:opacity-40 rounded-md w-full h-48 duration-300 object-cover" />
        <span className="noise"></span>
      </div>
      <div className="bottom-0 absolute flex p-1">
        <div className="flex-1 bg-white p-2 rounded-md">
          <span className="text-muted-foreground text-xs">{date}</span>
          <div className="flex justify-between">
            <h3 className="group-hover:text-primary font-medium text-muted-foreground">{title}</h3>
          </div>
          <p className="line-clamp-1 text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}
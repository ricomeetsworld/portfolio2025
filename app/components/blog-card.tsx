interface IBlogCard {
  date: string
  title: string
  description: string
}

export function BlogCard({date, title, description }: IBlogCard) {
  return (
    <div className="relative hover:bg-hovered shadow-sm hover:shadow-md p-4 border border-border rounded-lg transition-all duration-300 hover:cursor-pointer overflow-hidden group">
      <span className="absolute inset-0" aria-hidden></span>
      <div className="flex items-center space-x-3">
        <div className="flex-1">
          <span className="text-xs">{date}</span>
          <div className="flex justify-between">
            <h3 className="group-hover:text-amethyst-600 font-semibold">{title}</h3>
          </div>
          <p className="line-clamp-1 text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}
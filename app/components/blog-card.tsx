interface IBlogCard {
  date: string
  title: string
  description: string
}

export function BlogCard({date, title, description }: IBlogCard) {
  return (
    <div className="relative p-4 overflow-hidden transition-all duration-300 border rounded-md shadow-sm group hover:cursor-pointer hover:shadow-md hover:bg-muted border-obsidian-300 hover:border-amethyst-300 dark:border-obsidian-800 dark:hover:border-amethyst-800">
      <span className="absolute inset-0" aria-hidden></span>
      <div className="flex items-center space-x-3">
        <div className="flex-1">
          <span className="text-xs">{date}</span>
          <div className="flex justify-between">
            <h3 className="font-semibold group-hover:text-amethyst-600">{title}</h3>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-1">{description}</p>
        </div>
      </div>
    </div>
  )
}
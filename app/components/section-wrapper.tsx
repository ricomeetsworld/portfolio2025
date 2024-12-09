import { slugify } from "@/lib/utils"
import { ReactNode } from "react"

interface SectionProps {
  label?: string
  children: ReactNode
}

export function Section({ label, children }: SectionProps) {
  return (
    <div id={slugify(label?.toLocaleLowerCase() as string)} className="space-y-4 bg-card p-6 border border-border rounded-md">
      {label && <h3 className="mb-6 pb-4 border-b border-border font-semibold text-base">{label}</h3>}
      {children}
    </div>
  )
}
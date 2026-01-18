"use client"

import * as React from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface TabProps {
  text: string
  selected: boolean
  setSelected: (text: string) => void
  badge?: string
  badgeVariant?: "default" | "secondary" | "destructive" | "outline"
  tip?: string
}

export function Tab({
  text,
  selected,
  setSelected,
  badge,
  badgeVariant = "secondary",
  tip,
}: TabProps) {
  return (
    <button
      onClick={() => setSelected(text)}
      className={cn(
        "relative w-fit px-4 py-2 text-sm font-semibold capitalize",
        "text-foreground transition-colors",
        badge && "flex items-center justify-center gap-2.5"
      )}
      title={tip} // 添加tooltip提示
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-full bg-background shadow-sm"
        />
      )}
      {badge && (
        <Badge
          variant={badgeVariant}
          className={cn(
            "relative z-10 whitespace-nowrap shadow-none",
            selected && "bg-muted"
          )}
        >
          {badge}
        </Badge>
      )}
    </button>
  )
}

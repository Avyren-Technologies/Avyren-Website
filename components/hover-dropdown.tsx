"use client"

import * as React from "react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface HoverDropdownProps {
  trigger: React.ReactNode
  children: React.ReactNode
}

export function HoverDropdown({ trigger, children }: HoverDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          {trigger}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
          {children}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface SearchProps {
  className?: string
}

export function SearchBar({ className }: SearchProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // Handle Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault()
        setIsOpen(true)
      }
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Implement search functionality here
      console.log("Searching for:", searchQuery)
      // You can redirect to a search results page or implement search logic
    }
  }

  return (
    <div className={cn("relative", className)}>
      {/* Search Icon Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="h-8 w-8 p-0 hover:bg-muted/50"
      >
        <Search className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Button>

      {/* Search Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-2xl">
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search for solutions, features, or help..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-12 py-4 text-lg border-2 focus:border-primary rounded-xl"
                    autoFocus
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    Press <kbd className="px-2 py-1 bg-muted rounded text-xs">Ctrl + K</kbd> to search
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

"use client"

import * as React from "react"
import { Search, Command } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface SearchProps {
  className?: string
}

// Search data - in a real app, this would come from an API or database
const searchData = [
  {
    title: "Avy Tracker",
    description: "AI-powered workforce management and HRMS solution",
    url: "/products/avy-tracker",
    category: "Product"
  },
  {
    title: "E-Commerce & Service Booking",
    description: "Dual platform solution for retail and service businesses",
    url: "/products/ecommerce-booking",
    category: "Product"
  },
  {
    title: "About Avyren Technologies",
    description: "Learn about our company, mission, and vision",
    url: "/about",
    category: "Company"
  },
  {
    title: "Contact Us",
    description: "Get in touch with our team for support and inquiries",
    url: "/contact",
    category: "Support"
  },
  {
    title: "Workforce Management",
    description: "AI-powered attendance tracking and HR operations",
    url: "/products/avy-tracker",
    category: "Feature"
  },
  {
    title: "Face Recognition",
    description: "Advanced biometric attendance tracking",
    url: "/products/avy-tracker",
    category: "Feature"
  },
  {
    title: "GPS Tracking",
    description: "Location-based attendance monitoring",
    url: "/products/avy-tracker",
    category: "Feature"
  },
  {
    title: "Service Booking",
    description: "Online appointment and service scheduling",
    url: "/products/ecommerce-booking",
    category: "Feature"
  },
  {
    title: "Customer Exclusivity",
    description: "UID/QR-based login system for customer loyalty",
    url: "/products/ecommerce-booking",
    category: "Feature"
  },
  {
    title: "Real-time Analytics",
    description: "Live insights and comprehensive reporting",
    url: "/products/avy-tracker",
    category: "Feature"
  }
]

export function SearchBar({ className }: SearchProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const router = useRouter()

  // Filter search results based on query
  const filteredResults = React.useMemo(() => {
    if (!query.trim()) return []
    
    const lowercaseQuery = query.toLowerCase()
    return searchData.filter(item => 
      item.title.toLowerCase().includes(lowercaseQuery) ||
      item.description.toLowerCase().includes(lowercaseQuery) ||
      item.category.toLowerCase().includes(lowercaseQuery)
    )
  }, [query])

  // Handle keyboard shortcut
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault()
        setIsOpen(true)
      }
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleResultClick = (url: string) => {
    router.push(url)
    setIsOpen(false)
    setQuery("")
  }

  return (
    <>
      {/* Search Trigger Button */}
      <Button
        variant="outline"
        className={`relative h-9 w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64 ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        <span className="hidden lg:inline-flex">Search...</span>
        <span className="lg:hidden">Search</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      {/* Search Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl p-0" style={{ zIndex: 9999 }}>
          <DialogHeader className="px-6 py-4 border-b">
            <DialogTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search
            </DialogTitle>
          </DialogHeader>
          
          <div className="p-6">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products, features, or pages..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 pr-4"
                autoFocus
              />
              <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 hidden sm:flex items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
                <Command className="h-3 w-3" />
                K
              </kbd>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {query.trim() && filteredResults.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>No results found for "{query}"</p>
                </div>
              ) : query.trim() && filteredResults.length > 0 ? (
                <div className="space-y-2">
                  {filteredResults.map((result, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                      onClick={() => handleResultClick(result.url)}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-sm truncate">{result.title}</h4>
                          <span className="text-xs bg-muted px-2 py-0.5 rounded-full">
                            {result.category}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {result.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>Start typing to search...</p>
                  <p className="text-xs mt-1">Try searching for "Avy Tracker", "E-commerce", or "Contact"</p>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

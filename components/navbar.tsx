"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    { name: "Beranda", path: "/" },
    { name: "Tentang", path: "/tentang" },
    {
      name: "Destinasi",
      path: "/destinasi",
      children: [
        { name: "Menara Kudus", path: "/destinasi/menara-kudus" },
        { name: "Museum Kretek", path: "/destinasi/museum-kretek" },
        { name: "Tugu Identitas", path: "/destinasi/tugu-identitas" },
      ],
    },
    { name: "Budaya", path: "/budaya" },
    { name: "Kuliner", path: "/kuliner" },
  ]

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">Kota Kudus</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route) =>
            !route.children ? (
              <Link
                key={route.path}
                href={route.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(route.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {route.name}
              </Link>
            ) : (
              <DropdownMenu key={route.path}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="link"
                    className="gap-1 p-0 h-auto text-sm font-medium text-muted-foreground hover:text-primary"
                  >
                    {route.name}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                  {route.children.map((child) => (
                    <DropdownMenuItem key={child.path} asChild>
                      <Link href={child.path}>{child.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ),
          )}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button>Jelajahi Sekarang</Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid gap-4">
            {routes.map((route) =>
              !route.children ? (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(route.path) ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route.name}
                </Link>
              ) : (
                <div key={route.path} className="grid gap-2">
                  <div className="font-medium">{route.name}</div>
                  <div className="grid gap-2 pl-4">
                    {route.children.map((child) => (
                      <Link
                        key={child.path}
                        href={child.path}
                        className="text-sm text-muted-foreground hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ),
            )}
            <div className="pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm">Ubah Tema</span>
                <ThemeToggle />
              </div>
              <Button className="w-full">Jelajahi Sekarang</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}


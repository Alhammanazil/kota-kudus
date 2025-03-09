import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-muted/80 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-md">
            <h3 className="text-lg font-bold mb-4">Kota Kudus</h3>
            <p className="text-muted-foreground mb-4">
              Jelajahi keindahan, sejarah, dan budaya kota yang terkenal dengan industri rokok dan tradisi religiusnya.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="text-muted-foreground hover:text-primary transition-colors">
                  Tentang Kudus
                </Link>
              </li>
              <li>
                <Link href="/destinasi" className="text-muted-foreground hover:text-primary transition-colors">
                  Destinasi Wisata
                </Link>
              </li>
              <li>
                <Link href="/budaya" className="text-muted-foreground hover:text-primary transition-colors">
                  Budaya & Tradisi
                </Link>
              </li>
              <li>
                <Link href="/kuliner" className="text-muted-foreground hover:text-primary transition-colors">
                  Kuliner Khas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Kota Kudus. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}


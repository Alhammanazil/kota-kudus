import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function DestinasiPage() {
  const destinations = [
    {
      id: "menara-kudus",
      name: "Menara Kudus",
      description:
        "Menara Kudus adalah salah satu peninggalan sejarah Islam di Indonesia yang dibangun oleh Sunan Kudus pada abad ke-16.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "museum-kretek",
      name: "Museum Kretek",
      description:
        "Museum yang menampilkan sejarah industri rokok kretek di Kudus, termasuk peralatan tradisional dan modern dalam pembuatan rokok.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "tugu-identitas",
      name: "Tugu Identitas Kudus",
      description:
        "Monumen yang menjadi simbol identitas Kota Kudus, menampilkan berbagai elemen budaya dan sejarah kota.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "masjid-agung",
      name: "Masjid Agung Kudus",
      description:
        "Masjid bersejarah yang menjadi pusat kegiatan keagamaan di Kota Kudus dengan arsitektur yang indah.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "air-terjun-montel",
      name: "Air Terjun Montel",
      description: "Destinasi wisata alam yang menawarkan keindahan air terjun dan kesejukan udara pegunungan.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "bukit-rahtawu",
      name: "Bukit Rahtawu",
      description:
        "Area pegunungan yang menawarkan pemandangan alam yang indah dan udara yang sejuk, cocok untuk hiking.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <div className="container px-4 py-16 mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Destinasi Wisata Kota Kudus</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Jelajahi berbagai tempat menarik di Kota Kudus, dari situs bersejarah hingga destinasi wisata alam yang
          menakjubkan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="group bg-background rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-all"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
              <p className="text-muted-foreground mb-4">{destination.description}</p>
              <Link href={`/destinasi/${destination.id}`} className="text-primary font-medium inline-flex items-center">
                Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-muted/50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Rencanakan Kunjungan Anda</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Dapatkan informasi lengkap tentang transportasi, akomodasi, dan panduan wisata untuk memaksimalkan pengalaman
          Anda di Kota Kudus.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button>Panduan Wisata</Button>
          <Button variant="outline">Peta Wisata</Button>
        </div>
      </div>
    </div>
  )
}
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/header.jpg?height=1080&width=1920"
            alt="Kota Kudus"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 px-4 mx-auto text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Kudus Kota Kretek
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-200 mb-8">
            Jelajahi keindahan, sejarah, dan budaya kota yang terkenal dengan industri rokok dan tradisi religiusnya.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Mengenal Kota Kudus</h2>
              <p className="text-muted-foreground mb-4">
                Kudus adalah kabupaten terkecil di Jawa Tengah dengan luas wilayah 42.516 hektar. Meski kecil, Kudus
                memiliki peran penting dalam sejarah dan ekonomi Indonesia.
              </p>
              <p className="text-muted-foreground mb-6">
                Terkenal sebagai kota kretek dan kota santri, Kudus memiliki warisan budaya yang kaya dan industri rokok
                yang menjadi tulang punggung ekonomi daerah.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Jawa Tengah, Indonesia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Didirikan tahun 1549</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Kota Kudus Aerial View"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Destinasi Wisata</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Jelajahi tempat-tempat menarik di Kota Kudus, dari situs bersejarah hingga destinasi wisata modern.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Attraction Card 1 */}
            <div className="group bg-background rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-all">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Menara Kudus"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Menara Kudus</h3>
                <p className="text-muted-foreground mb-4">
                  Menara Kudus adalah salah satu peninggalan sejarah Islam di Indonesia yang dibangun oleh Sunan Kudus
                  pada abad ke-16.
                </p>
                <Link href="/destinasi/menara-kudus" className="text-primary font-medium inline-flex items-center">
                  Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Attraction Card 2 */}
            <div className="group bg-background rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-all">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Museum Kretek"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Museum Kretek</h3>
                <p className="text-muted-foreground mb-4">
                  Museum yang menampilkan sejarah industri rokok kretek di Kudus, termasuk peralatan tradisional dan
                  modern dalam pembuatan rokok.
                </p>
                <Link href="/destinasi/museum-kretek" className="text-primary font-medium inline-flex items-center">
                  Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Attraction Card 3 */}
            <div className="group bg-background rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-all">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Tugu Identitas Kudus"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Tugu Identitas Kudus</h3>
                <p className="text-muted-foreground mb-4">
                  Monumen yang menjadi simbol identitas Kota Kudus, menampilkan berbagai elemen budaya dan sejarah kota.
                </p>
                <Link href="/destinasi/tugu-identitas" className="text-primary font-medium inline-flex items-center">
                  Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" className="gap-2">
              Lihat Semua Destinasi <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Tradisi Dandangan"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden mt-8">
                  <Image src="/placeholder.svg?height=400&width=300" alt="Jenang Kudus" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image src="/placeholder.svg?height=400&width=300" alt="Soto Kudus" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden mt-8">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Kerajinan Kudus"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Budaya & Kuliner</h2>
              <p className="text-muted-foreground mb-4">
                Kudus memiliki kekayaan budaya yang unik, perpaduan antara tradisi Jawa dan nilai-nilai Islam yang kuat.
                Tradisi seperti Dandangan dan Buka Luwur menjadi daya tarik tersendiri.
              </p>
              <p className="text-muted-foreground mb-6">
                Kuliner khas Kudus seperti Soto Kudus, Jenang Kudus, dan Lentog Tanjung juga menjadi bagian penting dari
                identitas kota ini.
              </p>
              <Button className="gap-2">
                Eksplorasi Budaya <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Rencanakan Kunjungan Anda</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-primary-foreground/90">
            Temukan keindahan dan keunikan Kota Kudus. Rencanakan perjalanan Anda sekarang dan nikmati pengalaman yang
            tak terlupakan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg">
              Peta Wisata
            </Button>
            <Button variant="outline" size="lg" className="bg-primary-foreground/10 hover:bg-primary-foreground/20">
              Informasi Akomodasi
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
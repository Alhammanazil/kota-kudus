import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, MapPin, Clock, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"

// This would typically come from a database or API
const destinations = {
  "menara-kudus": {
    name: "Menara Kudus",
    description:
      "Menara Kudus adalah salah satu peninggalan sejarah Islam di Indonesia yang dibangun oleh Sunan Kudus pada abad ke-16. Menara ini memiliki arsitektur yang unik, perpaduan antara budaya Hindu dan Islam.",
    longDescription: `
      Menara Kudus atau Menara Al-Aqsa adalah sebuah menara yang terletak di kompleks Masjid Menara Kudus, Kudus, Jawa Tengah. Menara ini dibangun oleh Sunan Kudus (Ja'far Shadiq) pada tahun 1549 Masehi.
      
      Menara ini memiliki keunikan arsitektur yang menggabungkan unsur budaya Hindu dan Islam, sebagai simbol toleransi dan akulturasi budaya. Bentuknya menyerupai bangunan candi Hindu dengan ornamen-ornamen Islam.
      
      Tinggi menara sekitar 18 meter dengan lebar dasar 10 meter. Bagian dasar menara berbentuk persegi dengan relief-relief yang menghiasi dindingnya. Di bagian atas terdapat ruangan kecil yang biasa digunakan sebagai tempat muadzin mengumandangkan adzan.
      
      Menara Kudus menjadi salah satu objek wisata religi yang paling terkenal di Kota Kudus dan menjadi bukti sejarah penyebaran Islam di Jawa yang mengedepankan pendekatan kultural.
    `,
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    location: "Jl. Menara, Kauman, Kec. Kota, Kabupaten Kudus",
    openHours: "08.00 - 17.00 WIB",
    entryFee: "Gratis (Donasi sukarela)",
    established: "1549 Masehi",
    facilities: ["Tempat Ibadah", "Toilet", "Area Parkir", "Pusat Informasi"],
  },
  "museum-kretek": {
    name: "Museum Kretek",
    description:
      "Museum yang menampilkan sejarah industri rokok kretek di Kudus, termasuk peralatan tradisional dan modern dalam pembuatan rokok.",
    longDescription: `
      Museum Kretek adalah museum yang didedikasikan untuk menampilkan sejarah dan perkembangan industri rokok kretek di Indonesia, khususnya di Kudus. Museum ini didirikan pada tahun 1986 dan diresmikan pada tanggal 3 Oktober 1986.
      
      Museum ini menampilkan berbagai koleksi yang berkaitan dengan industri kretek, mulai dari peralatan tradisional untuk membuat rokok kretek, mesin-mesin produksi modern, hingga berbagai jenis dan merek rokok kretek yang pernah diproduksi di Kudus.
      
      Selain itu, museum ini juga menampilkan sejarah para pionir industri kretek di Kudus seperti Nitisemito dengan perusahaan rokoknya yang terkenal, Bal Tiga. Pengunjung dapat melihat replika rumah dan pabrik Nitisemito serta berbagai memorabilia lainnya.
      
      Museum Kretek menjadi saksi sejarah betapa pentingnya industri kretek bagi perekonomian Kudus dan Indonesia secara keseluruhan.
    `,
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    location: "Jl. Getas Pejaten No.155, Getas Pejaten, Kec. Jati, Kabupaten Kudus",
    openHours: "08.00 - 15.00 WIB (Tutup hari Senin)",
    entryFee: "Rp 5.000 per orang",
    established: "1986",
    facilities: ["Toilet", "Area Parkir", "Kantin", "Toko Suvenir"],
  },
  "tugu-identitas": {
    name: "Tugu Identitas Kudus",
    description:
      "Monumen yang menjadi simbol identitas Kota Kudus, menampilkan berbagai elemen budaya dan sejarah kota.",
    longDescription: `
      Tugu Identitas Kudus adalah monumen yang dibangun sebagai simbol identitas dan kebanggaan masyarakat Kudus. Tugu ini terletak di pusat kota dan menjadi landmark yang mudah dikenali.
      
      Desain tugu ini menggabungkan berbagai elemen yang mewakili identitas Kudus, seperti Menara Kudus yang mewakili aspek religius, gambar tembakau dan cengkeh yang mewakili industri kretek, serta berbagai simbol budaya lokal lainnya.
      
      Tugu ini sering menjadi tempat berkumpul warga Kudus pada acara-acara tertentu dan juga menjadi spot foto yang populer bagi wisatawan yang berkunjung ke Kudus.
      
      Area sekitar tugu juga telah dikembangkan menjadi ruang publik yang nyaman dengan taman dan bangku-bangku, menjadikannya tempat yang ideal untuk bersantai dan menikmati suasana kota.
    `,
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    location: "Simpang Tujuh, Pusat Kota Kudus",
    openHours: "24 jam",
    entryFee: "Gratis",
    established: "1990-an",
    facilities: ["Taman", "Bangku Taman", "Area Parkir", "Penerangan"],
  },
}

export default function DestinationDetailPage({ params }: { params: { slug: string } }) {
  const destination = destinations[params.slug as keyof typeof destinations]

  if (!destination) {
    notFound()
  }

  return (
    <div className="container px-4 py-16 mx-auto">
      <Link href="/destinasi" className="inline-flex items-center text-primary mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Destinasi
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{destination.name}</h1>
          <p className="text-muted-foreground mb-8">{destination.description}</p>

          <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
            <Image
              src={destination.images[0] || "/placeholder.svg"}
              alt={destination.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose max-w-none dark:prose-invert mb-8">
            {destination.longDescription.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">Galeri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {destination.images.map((image, index) => (
              <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${destination.name} - Gambar ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-muted/50 rounded-lg p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-4">Informasi</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Lokasi</p>
                  <p className="text-muted-foreground">{destination.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Jam Buka</p>
                  <p className="text-muted-foreground">{destination.openHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Didirikan</p>
                  <p className="text-muted-foreground">{destination.established}</p>
                </div>
              </div>

              <div>
                <p className="font-medium mb-1">Tiket Masuk</p>
                <p className="text-muted-foreground">{destination.entryFee}</p>
              </div>

              <div>
                <p className="font-medium mb-1">Fasilitas</p>
                <ul className="list-disc list-inside text-muted-foreground">
                  {destination.facilities.map((facility, index) => (
                    <li key={index}>{facility}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <Button className="w-full">Dapatkan Petunjuk Arah</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


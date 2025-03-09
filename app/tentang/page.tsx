import Image from "next/image"
import { MapPin, Users, Building, History } from "lucide-react"

export default function TentangPage() {
  return (
    <div className="container px-4 py-16 mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Tentang Kota Kudus</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Mengenal lebih dekat Kota Kudus, sejarah, budaya, dan perkembangannya hingga saat ini.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=800&width=1200" alt="Kota Kudus" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Sejarah Singkat</h2>
          <p className="text-muted-foreground mb-4">
            Kudus didirikan pada tahun 1549 oleh Ja'far Shadiq, yang kemudian dikenal sebagai Sunan Kudus, salah satu
            dari Wali Songo yang menyebarkan agama Islam di Pulau Jawa.
          </p>
          <p className="text-muted-foreground mb-4">
            Nama "Kudus" berasal dari bahasa Arab "Al-Quds" yang berarti suci, menunjukkan pentingnya nilai-nilai
            keagamaan dalam sejarah kota ini.
          </p>
          <p className="text-muted-foreground">
            Selama berabad-abad, Kudus berkembang menjadi pusat perdagangan dan industri yang penting di Jawa Tengah,
            terutama setelah munculnya industri rokok kretek pada awal abad ke-20.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-muted/30 p-6 rounded-lg">
          <MapPin className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Geografi</h3>
          <p className="text-muted-foreground">
            Kudus adalah kabupaten terkecil di Jawa Tengah dengan luas wilayah 42.516 hektar. Terletak di antara Gunung
            Muria dan Gunung Patiayam, dengan ketinggian antara 0-1600 meter di atas permukaan laut.
          </p>
        </div>

        <div className="bg-muted/30 p-6 rounded-lg">
          <Users className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Demografi</h3>
          <p className="text-muted-foreground">
            Kudus memiliki populasi sekitar 850.000 jiwa dengan kepadatan penduduk yang cukup tinggi. Mayoritas penduduk
            beragama Islam dengan budaya yang kuat dipengaruhi oleh nilai-nilai keagamaan.
          </p>
        </div>

        <div className="bg-muted/30 p-6 rounded-lg">
          <Building className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Ekonomi</h3>
          <p className="text-muted-foreground">
            Ekonomi Kudus didominasi oleh industri, terutama industri rokok kretek, tekstil, elektronik, dan kertas.
            Kudus juga dikenal dengan industri bordir dan konveksi yang berkembang pesat.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Lini Masa Sejarah</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-muted"></div>

          <div className="grid grid-cols-1 gap-8">
            <div className="relative flex items-center">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="order-1 md:order-1 md:w-1/2 flex justify-end">
                  <div className="bg-background p-6 rounded-lg shadow-sm border max-w-md">
                    <h3 className="text-xl font-bold mb-2">1549</h3>
                    <p className="text-muted-foreground">
                      Ja'far Shadiq (Sunan Kudus) mendirikan Kota Kudus dan membangun Menara Kudus sebagai bagian dari
                      Masjid Al-Aqsa.
                    </p>
                  </div>
                </div>
                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                  <History className="h-4 w-4" />
                </div>
                <div className="order-2 md:order-3 md:w-1/2"></div>
              </div>
            </div>

            <div className="relative flex items-center">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="order-1 md:order-1 md:w-1/2"></div>
                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                  <History className="h-4 w-4" />
                </div>
                <div className="order-2 md:order-3 md:w-1/2">
                  <div className="bg-background p-6 rounded-lg shadow-sm border max-w-md">
                    <h3 className="text-xl font-bold mb-2">Awal 1900-an</h3>
                    <p className="text-muted-foreground">
                      Nitisemito mendirikan perusahaan rokok kretek pertama di Kudus dengan merek "Bal Tiga", mengawali
                      era industri kretek di kota ini.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="order-1 md:order-1 md:w-1/2 flex justify-end">
                  <div className="bg-background p-6 rounded-lg shadow-sm border max-w-md">
                    <h3 className="text-xl font-bold mb-2">1950-an</h3>
                    <p className="text-muted-foreground">
                      Industri rokok kretek di Kudus berkembang pesat setelah kemerdekaan Indonesia, menjadikan Kudus
                      sebagai pusat produksi rokok nasional.
                    </p>
                  </div>
                </div>
                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                  <History className="h-4 w-4" />
                </div>
                <div className="order-2 md:order-3 md:w-1/2"></div>
              </div>
            </div>

            <div className="relative flex items-center">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="order-1 md:order-1 md:w-1/2"></div>
                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                  <History className="h-4 w-4" />
                </div>
                <div className="order-2 md:order-3 md:w-1/2">
                  <div className="bg-background p-6 rounded-lg shadow-sm border max-w-md">
                    <h3 className="text-xl font-bold mb-2">1980-an hingga sekarang</h3>
                    <p className="text-muted-foreground">
                      Kudus berkembang menjadi kota industri yang lebih beragam dengan munculnya industri tekstil,
                      elektronik, kertas, dan konveksi, meskipun industri rokok tetap menjadi yang utama.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-muted/30 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Kota Kudus Hari Ini</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
          Saat ini, Kudus terus berkembang sebagai kota industri yang penting di Jawa Tengah. Dengan perpaduan antara
          nilai-nilai tradisional dan modernitas, Kudus menawarkan pengalaman unik bagi pengunjung yang ingin mengenal
          lebih dekat sejarah, budaya, dan kehidupan masyarakatnya.
        </p>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Sebagai "Kota Kretek" dan "Kota Santri", Kudus mempertahankan identitas gandanya yang unik, mencerminkan
          harmoni antara kehidupan industri dan nilai-nilai religius yang kuat.
        </p>
      </div>
    </div>
  )
}


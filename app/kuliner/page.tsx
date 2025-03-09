import Image from "next/image"

export default function KulinerPage() {
  const culinaryItems = [
    {
      name: "Soto Kudus",
      description:
        "Soto ayam khas Kudus dengan kuah bening, potongan daging ayam suwir, tauge, dan telur. Disajikan dengan nasi dan sambal.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      name: "Jenang Kudus",
      description:
        "Makanan tradisional berbahan dasar tepung beras yang dimasak dengan santan dan gula merah. Jenang Kudus memiliki tekstur lembut dan rasa manis yang khas.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      name: "Lentog Tanjung",
      description:
        "Makanan berupa lontong yang disiram dengan sayur lodeh dan ditambah dengan tahu, tempe, dan kerupuk. Berasal dari daerah Tanjung, Kudus.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      name: "Nasi Jangkrik",
      description:
        "Nasi dengan lauk berupa daging kerbau yang dimasak dengan bumbu khas. Nama 'jangkrik' berasal dari suara daging yang dimasak.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      name: "Garang Asem",
      description:
        "Olahan ayam yang dimasak dengan bumbu asam, cabai, dan belimbing wuluh, dibungkus dengan daun pisang dan dikukus.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      name: "Pecel Pakis",
      description:
        "Sayur pakis yang direbus dan disiram dengan bumbu pecel kacang. Makanan ini memiliki cita rasa yang unik dan segar.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <div className="container px-4 py-16 mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Kuliner Khas Kota Kudus</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Jelajahi kekayaan cita rasa kuliner tradisional yang menjadi kebanggaan Kota Kudus.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Cita Rasa Kudus</h2>
          <p className="text-muted-foreground mb-4">
            Kudus memiliki beragam kuliner khas yang menawarkan cita rasa unik dan autentik. Dari hidangan utama hingga
            makanan ringan dan kudapan tradisional, kuliner Kudus mencerminkan kekayaan budaya dan sejarah kota ini.
          </p>
          <p className="text-muted-foreground mb-4">
            Banyak kuliner khas Kudus yang telah ada sejak puluhan bahkan ratusan tahun yang lalu, diwariskan dari
            generasi ke generasi dengan resep yang terjaga keasliannya.
          </p>
          <p className="text-muted-foreground">
            Menikmati kuliner khas Kudus tidak hanya memberikan pengalaman gastronomi yang menyenangkan, tetapi juga
            menjadi bagian dari menjelajahi kekayaan budaya kota ini.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=800&width=1200" alt="Kuliner Kota Kudus" fill className="object-cover" />
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-8 text-center">Menu Khas Kudus</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {culinaryItems.map((item, index) => (
          <div
            key={index}
            className="bg-background rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-all"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-muted/30 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Wisata Kuliner</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
          Kudus menawarkan berbagai destinasi wisata kuliner, dari warung tradisional hingga restoran modern yang
          menyajikan hidangan khas daerah.
        </p>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Jelajahi berbagai sudut kota untuk menemukan tempat-tempat kuliner terbaik dan nikmati pengalaman gastronomi
          yang tak terlupakan di Kota Kudus.
        </p>
      </div>
    </div>
  )
}
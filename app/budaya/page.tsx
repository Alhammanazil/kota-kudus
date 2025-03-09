import Image from "next/image"

export default function BudayaPage() {
  const culturalItems = [
    {
      title: "Dandangan",
      description:
        "Festival tradisional yang diadakan menjelang bulan Ramadhan. Dandangan berasal dari bunyi bedug yang ditabuh untuk menandai masuknya bulan puasa.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Buka Luwur",
      description:
        "Upacara penggantian kain kelambu (luwur) yang menutupi makam Sunan Kudus. Acara ini diadakan setiap tanggal 10 Muharram dalam penanggalan Hijriah.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Ampyang Maulid",
      description:
        "Tradisi membuat dan membagikan makanan khas bernama ampyang saat perayaan Maulid Nabi Muhammad SAW.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Seni Ukir Kudus",
      description:
        "Kerajinan ukir kayu khas Kudus yang terkenal dengan motif-motif yang detail dan rumit, terutama pada furnitur dan arsitektur rumah.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <div className="container px-4 py-16 mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Budaya & Tradisi Kota Kudus</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Mengenal lebih dekat kekayaan budaya dan tradisi yang menjadi identitas Kota Kudus.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=800&width=1200" alt="Budaya Kota Kudus" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Warisan Budaya</h2>
          <p className="text-muted-foreground mb-4">
            Kudus memiliki kekayaan budaya yang unik, perpaduan antara tradisi Jawa dan nilai-nilai Islam yang kuat.
            Sebagai kota yang didirikan oleh Sunan Kudus, salah satu dari Wali Songo, nilai-nilai keagamaan sangat
            melekat dalam kehidupan masyarakat.
          </p>
          <p className="text-muted-foreground mb-4">
            Berbagai tradisi dan upacara adat masih dilestarikan hingga saat ini, menjadi daya tarik tersendiri bagi
            wisatawan yang ingin mengenal lebih dekat budaya Kudus.
          </p>
          <p className="text-muted-foreground">
            Selain itu, Kudus juga terkenal dengan kerajinan ukir kayu yang memiliki ciri khas tersendiri, terutama pada
            arsitektur rumah tradisional Kudus.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Tradisi & Kesenian</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {culturalItems.map((item, index) => (
            <div key={index} className="bg-muted/30 rounded-lg overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-muted/30 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Melestarikan Budaya</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
          Berbagai upaya terus dilakukan untuk melestarikan kekayaan budaya Kudus, baik oleh pemerintah maupun
          masyarakat. Festival budaya, workshop kesenian, dan dokumentasi tradisi menjadi bagian dari upaya pelestarian
          tersebut.
        </p>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Dengan menjaga dan melestarikan warisan budaya, Kudus tidak hanya mempertahankan identitasnya, tetapi juga
          memberikan pengalaman yang berharga bagi generasi mendatang dan wisatawan yang berkunjung.
        </p>
      </div>
    </div>
  )
}
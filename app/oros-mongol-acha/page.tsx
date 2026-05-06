import type { Metadata } from "next";

const siteUrl = "https://bechekhan.mn";

export const metadata: Metadata = {
    title: "Орос Монгол Ачаа Тээвэр | Улаан-Үд УБ Cargo | Bechekhan MN",
    description:
        "ОХУ-ын Улаан-Үдээс Монгол хүртэл авто болон төмөр замын ачаа тээвэр. Сборный груз, FTL, гаалийн бүрдүүлэлт, агуулах үйлчилгээ.",
    keywords: [
        "Улаан-Үд УБ ачаа",
        "сборный груз",
        "FTL тээвэр",
        "Орос Монгол logistics",
        "импорт экспорт",
    ],
    alternates: {
        canonical: `${siteUrl}/oros-mongol-acha`,
    },
    openGraph: {
        type: "website",
        url: `${siteUrl}/oros-mongol-acha`,
        title: "Орос Монгол Ачаа Тээвэр | Улаан-Үд УБ",
        description:
            "ОХУ-ын Улаан-Үдээс Монгол хүртэл авто болон төмөр замын ачаа тээвэр. Сборный груз, FTL, гаалийн бүрдүүлэлт.",
        siteName: "Bechekhan MN",
        locale: "mn_MN",
        images: [
            {
                url: "/facebook-preview.jpg",
                width: 1200,
                height: 630,
                alt: "Улаан-Үд УБ cargo",
            },
        ],
    },
};

export default function Page() {
    return (
        <main className="bg-white">

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-orange-600 py-24">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="relative mx-auto max-w-6xl px-4 text-center text-white">
                    <span className="inline-block rounded-full bg-white/20 backdrop-blur px-4 py-1.5 text-sm font-semibold mb-6">
                        🌍 Олон улсын маршрут
                    </span>

                    <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
                        Улаан-Үд ↔ <br /> Улаанбаатар
                    </h1>

                    <p className="mx-auto max-w-2xl text-xl text-white/90 mb-8 leading-relaxed">
                        ОХУ-ын Улаан-Үд хотоос Монгол улс хүртэлх хамгийн хурдан, найдвартай ачаа тээврийн шийдэл
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-100 shadow-2xl transition transform hover:scale-105">
                            Үнийн санал авах
                        </button>
                        <a
                            href="tel:+79914271904"
                            className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition"
                        >
                            📞 Одоо залгах
                        </a>
                    </div>
                </div>
            </section>

            {/* ================= STATS ================= */}
            <section className="bg-zinc-50 py-12">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="grid grid-cols-3 gap-8 text-center">
                        <div>
                            <p className="text-4xl font-bold text-red-600">5-10</p>
                            <p className="text-zinc-600 mt-2">Хоног хүргэлт</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-red-600">1кг-100т</p>
                            <p className="text-zinc-600 mt-2">Ачааны хэмжээ</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-red-600">24/7</p>
                            <p className="text-zinc-600 mt-2">Үйлчилгээ</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <section className="py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Үйлчилгээнүүд</h2>
                        <p className="text-zinc-600 text-lg">Бүрэн логистик шийдэл</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: "📦 Сборный груз", desc: "Хуваарьт ачаа, үндэстэн үл хүргүүлэх" },
                            { title: "🚚 FTL тээвэр", desc: "Бүтэн машинаар ачаа тээврийн үйлчилгээ" },
                            { title: "🏭 Том оврын тоног", desc: "Машины эд ангиуд, үйлдвэрийн нэрэх бараа" },
                            { title: "📋 Гааль бүрдүүлэлт", desc: "Профессионал гаалийн дээд баримтжуулалт" },
                        ].map((service, i) => (
                            <div
                                key={i}
                                className="group bg-gradient-to-br from-zinc-50 to-white border-2 border-zinc-200 rounded-2xl p-8 hover:border-red-600 hover:shadow-xl transition duration-300"
                            >
                                <p className="text-2xl mb-3">{service.title}</p>
                                <p className="text-zinc-600">{service.desc}</p>
                                <div className="mt-4 h-1 w-0 group-hover:w-12 bg-red-600 transition-all duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= WHY ULAN-UDE ================= */}
            <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 py-20 text-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Яагаад Улаан-Үд?</h2>
                        <p className="text-zinc-300 text-lg">Стратегийн чухал үйлчилгээний төв</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: "⚡", title: "Хурдан", desc: "5-10 хоног дундаж хүргэлт" },
                            { icon: "💰", title: "Хямд", desc: "Үнэ төлбөргүй оновчтой маршрут" },
                            { icon: "🛂", title: "Энгийн", desc: "Хялбар гаалийн үйл явц" },
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <p className="text-5xl mb-4">{item.icon}</p>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-zinc-300">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CUSTOMS & WAREHOUSE ================= */}
            <section className="py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-3xl p-12">
                        <h2 className="text-3xl font-bold mb-6">🏢 Гааль & Агуулах үйлчилгээ</h2>
                        <p className="text-zinc-700 text-lg leading-relaxed">
                            Бид гаалийн бүрдүүлэлт, бичиг баримтын боловсруулалт, түр агуулахад хадгалалт зэрэг <b>бүрэн үйлчилгээ</b> үзүүлнэ.
                            Манай мэргэжлийн баг таны ачааны асуудлыг эхнээс нь дуустал бүрэн хариуцна.
                        </p>
                        <div className="mt-8 grid sm:grid-cols-3 gap-4">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">✓</span>
                                <span className="font-semibold">Гаалийн оршуулга</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">✓</span>
                                <span className="font-semibold">ВЭД консультац</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">✓</span>
                                <span className="font-semibold">Түр агуулах</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section className="py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <h2 className="text-3xl font-bold mb-10 text-center">Түгээмэл асуултууд</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Улаан-Үдээс Улаанбаатар хүртэл хэдэн хоногт хүрдэг вэ?", a: "Авто тээврээр дундаж 5-7 хоног, төмөр замаар 7-12 хоног зарцуулдаг. Цаг агаар болон гаалийн шалгалтаас хамаарч өөрчлөгдөж болно." },
                            { q: "Хамгийн бага ачааны хэмжээ хэд вэ?", a: "Сборный груз үйлчилгээгээр 1 кг-аас тээвэрлэнэ. FTL буюу бүтэн машины тээврийг том хэмжээний ачаанд ашиглана." },
                            { q: "Гаалийн бүрдүүлэлтийг та нар хийдэг үү?", a: "Тийм. Бид Орос болон Монгол талын гаалийн бүрдүүлэлтийг бүрэн хариуцна. Бичиг баримт, HS код, татварын тооцоог мэргэжилтнүүд гүйцэтгэнэ." },
                            { q: "Казахстан, Беларусиас Монгол руу тээвэрлэж болох уу?", a: "Тийм. Бид ОХУ-аас гадна Казахстан болон Беларусиас Монгол руу ачаа тээвэрлэх боломжтой. Дэлгэрэнгүй нөхцөлийг манай менежерт лавлана уу." },
                            { q: "Үнийн санал хэрхэн авах вэ?", a: "Манай вэб хуудсаар дамжуулан форм бөглөх, эсвэл утас болон WhatsApp-аар холбогдож үнийн саналаа аваарай. Анхны зөвлөгөө үнэгүй." },
                        ].map((f, i) => (
                            <div key={i} className="border border-zinc-200 rounded-2xl p-6">
                                <h3 className="font-bold text-lg mb-2 text-red-600">❓ {f.q}</h3>
                                <p className="text-zinc-600">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CTA FINAL ================= */}
            <section className="relative bg-gradient-to-r from-red-600 to-orange-600 py-20">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=%2260%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffffff%27 fill-opacity=%270.1%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
                </div>

                <div className="relative mx-auto max-w-4xl px-4 text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Үнийн санал авахын цаг боллоо!
                    </h2>

                    <p className="text-xl text-white/90 mb-8">
                        Орос Монгол ачаа тээврийн хамгийн сайн үнэ, хугацаа авахын тулд бидэнтэй холбоотуулаарай.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-red-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-zinc-100 shadow-xl transition transform hover:scale-105">
                            Үнийн санал авах →
                        </button>
                        <a
                            href="tel:+79914271904"
                            className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition"
                        >
                            📞 +7 991 427 19 04
                        </a>
                    </div>
                </div>
            </section>

        </main>
    );
}
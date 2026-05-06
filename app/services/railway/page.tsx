import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://bechekhan.mn";

export const metadata: Metadata = {
    title: "Төмөр Замын Тээвэр | Наушки Улаанбаатар | Bechekhan MN",
    description:
        "Орос Монгол төмөр замын тээвэр. Наушки–Улаанбаатар чиглэлд том хэмжээний ачаа тээвэрлэлт. Аюулгүй, найдвартай, хэмнэлттэй шийдэл.",
    keywords: [
        "төмөр замын тээвэр Монгол",
        "Наушки Улаанбаатар ачаа",
        "ЖД тээвэр Орос Монгол",
        "железная дорога Монголия",
        "ЖД перевозки Монголия",
        "контейнер тээвэр",
    ],
    alternates: {
        canonical: `${siteUrl}/services/railway`,
        languages: { mn: `${siteUrl}/services/railway` },
    },
    openGraph: {
        type: "website",
        url: `${siteUrl}/services/railway`,
        title: "Төмөр Замын Тээвэр | Bechekhan MN",
        description: "Орос Монгол төмөр замын тээвэр. Наушки–УБ чиглэлд найдвартай логистик.",
        siteName: "Bechekhan MN",
        locale: "mn_MN",
        images: [{ url: "/facebook-preview.jpg", width: 1200, height: 630, alt: "Төмөр замын тээвэр Монгол" }],
    },
};

const faqs = [
    { q: "Төмөр замаар хэдэн хоногт хүрдэг вэ?", a: "Улаан-Үдээс Улаанбаатар хүртэл дундаж 7-12 хоног зарцуулдаг. Контейнерийн дүүргэлтээс шалтгаалан өөрчлөгдөж болно." },
    { q: "Хамгийн бага ачааны хэмжээ хэд вэ?", a: "Төмөр замаар тээвэрлэхэд ихэвчлэн 1 тонноос дээш ачаанд илүү ашигтай. Жижиг ачааг авто тээврийг зөвлөдөг." },
    { q: "Контейнерийн хэмжээ ямар байдаг вэ?", a: "20 фут (20GP) болон 40 фут (40GP, 40HC) стандарт контейнер ашиглана. Хэрэгцээнээс хамаарч сонгоно." },
    { q: "Том тоног төхөөрөмж тээвэрлэж болох уу?", a: "Тийм. Төмөр зам нь том хэмжээний тоног төхөөрөмж, машин механизм тээвэрлэхэд хамгийн тохиромжтой." },
    { q: "Гаалийн бүрдүүлэлт хэрхэн хийгддэг вэ?", a: "Наушки (Орос тал) болон Сүхбаатар (Монгол тал) гаалийн боомтоор дамждаг. Бид гаалийн бүрдүүлэлтийг бүрэн хариуцна." },
];

export default function Page() {
    return (
        <main className="bg-white">
            {/* BREADCRUMB */}
            <nav className="bg-zinc-50 border-b px-4 py-3">
                <div className="mx-auto max-w-6xl text-sm text-zinc-500 flex gap-2">
                    <Link href="/" className="hover:text-red-600">Нүүр</Link>
                    <span>/</span>
                    <span className="text-zinc-900">Төмөр замын тээвэр</span>
                </div>
            </nav>

            {/* HERO */}
            <section className="relative overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 py-20">
                <div className="relative mx-auto max-w-6xl px-4 text-white">
                    <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold mb-4">
                        🚂 Төмөр замын тээвэр
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black mb-4">
                        Төмөр замын тээвэр <br />
                        <span className="text-red-400">Наушки → Улаанбаатар</span>
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mb-8">
                        Том хэмжээний ачаа болон контейнерийг ОХУ-аас Монгол руу
                        төмөр замаар найдвартай, хэмнэлттэй тээвэрлэнэ.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-block bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition"
                    >
                        Үнийн санал авах →
                    </Link>
                </div>
            </section>

            {/* STATS */}
            <section className="bg-zinc-50 py-10">
                <div className="mx-auto max-w-6xl px-4 grid grid-cols-3 gap-6 text-center">
                    {[
                        { v: "7-12", l: "Хоног хүргэлт" },
                        { v: "20/40ft", l: "Контейнер хэмжээ" },
                        { v: "∞", l: "Хэмжээний хязгааргүй" },
                    ].map((s, i) => (
                        <div key={i}>
                            <p className="text-3xl font-bold text-red-600">{s.v}</p>
                            <p className="text-zinc-600 mt-1">{s.l}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ҮЙЛЧИЛГЭЭ */}
            <section className="py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-3xl font-bold mb-4">Төмөр замын тээврийн үйлчилгээ</h2>
                    <p className="text-zinc-600 mb-10">
                        Bechekhan MN нь Орос-Монгол төмөр замын маршрутаар том хэмжээний ачаа болон
                        контейнер тээвэрлэх мэргэжлийн үйлчилгээ үзүүлдэг. Наушки–Сүхбаатар–Улаанбаатар
                        чиглэл нь хамгийн найдвартай маршрут юм.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { icon: "📦", title: "FCL — Бүтэн контейнер", desc: "20ft эсвэл 40ft контейнерийг бүрэн ашиглан ачаа тээвэрлэнэ." },
                            { icon: "🗂️", title: "LCL — Хуваарьт контейнер", desc: "Олон захиалагчийн ачааг нэг контейнерт нэгтгэн тээвэрлэнэ." },
                            { icon: "⚙️", title: "Том тоног төхөөрөмж", desc: "Машин, трактор, үйлдвэрийн тоног төхөөрөмжийг тусгай платформ вагонаар." },
                            { icon: "📋", title: "Гааль + баримт бичиг", desc: "Орос болон Монгол гаалийн бүрдүүлэлтийг бүрэн хариуцна." },
                        ].map((s, i) => (
                            <div key={i} className="group border-2 border-zinc-200 rounded-2xl p-8 hover:border-red-600 hover:shadow-lg transition">
                                <p className="text-3xl mb-3">{s.icon}</p>
                                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                                <p className="text-zinc-600">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* МАРШРУТ */}
            <section className="bg-zinc-900 text-white py-20">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">Маршрут</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        {["🇷🇺 Улаан-Үд", "→", "Наушки (гааль)", "→", "Сүхбаатар (гааль)", "→", "🇲🇳 Улаанбаатар"].map((s, i) => (
                            <div key={i} className={s === "→" ? "text-red-400 text-2xl" : "bg-white/10 rounded-xl px-4 py-3 font-semibold"}>
                                {s}
                            </div>
                        ))}
                    </div>
                    <p className="mt-8 text-zinc-300">Дундаж хугацаа: 7–12 хоног</p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <h2 className="text-3xl font-bold mb-10 text-center">Түгээмэл асуултууд</h2>
                    <div className="space-y-4">
                        {faqs.map((f, i) => (
                            <div key={i} className="border border-zinc-200 rounded-2xl p-6">
                                <h3 className="font-bold text-lg mb-2 text-red-600">❓ {f.q}</h3>
                                <p className="text-zinc-600">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-zinc-800 to-zinc-900 py-16 text-white text-center">
                <div className="mx-auto max-w-4xl px-4">
                    <h2 className="text-3xl font-bold mb-4">Төмөр замын тээврийн үнэ авах</h2>
                    <p className="text-white/80 mb-8 text-lg">Ачааны хэмжээ, чиглэлийг мэдэгдэж үнийн санал авна уу.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/#contact" className="bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition">
                            Үнийн санал авах →
                        </Link>
                        <a href="tel:+79914271904" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition">
                            📞 +7 991 427 19 04
                        </a>
                    </div>
                </div>
            </section>

            {/* ХОЛБООТОЙ */}
            <section className="py-12 bg-zinc-50">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-xl font-bold mb-6">Бусад үйлчилгээнүүд</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        <Link href="/services/auto-transport" className="border rounded-xl p-4 hover:border-red-600 hover:shadow transition">
                            <p className="font-semibold">🚚 Авто тээвэр</p>
                            <p className="text-sm text-zinc-500 mt-1">Дэлгэрэнгүй →</p>
                        </Link>
                        <Link href="/services/customs" className="border rounded-xl p-4 hover:border-red-600 hover:shadow transition">
                            <p className="font-semibold">🛂 Гаалийн бүрдүүлэлт</p>
                            <p className="text-sm text-zinc-500 mt-1">Дэлгэрэнгүй →</p>
                        </Link>
                        <Link href="/services/ved" className="border rounded-xl p-4 hover:border-red-600 hover:shadow transition">
                            <p className="font-semibold">📋 ВЭД зөвлөгөө</p>
                            <p className="text-sm text-zinc-500 mt-1">Дэлгэрэнгүй →</p>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

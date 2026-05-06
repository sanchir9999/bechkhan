import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://bechekhan.mn";

export const metadata: Metadata = {
    title: "Гаалийн Бүрдүүлэлт | Орос Монгол | Bechekhan MN",
    description:
        "Орос Монгол чиглэлд мэргэжлийн гаалийн бүрдүүлэлтийн үйлчилгээ. Импорт, экспорт, транзит бараа. Бичиг баримт боловсруулалт, гаалийн брокер.",
    keywords: [
        "гаалийн бүрдүүлэлт Монгол",
        "гаалийн брокер",
        "импорт гааль",
        "экспорт гааль",
        "таможенное оформление Монголия",
        "таможенный брокер Монголия",
        "Монгол гааль",
    ],
    alternates: {
        canonical: `${siteUrl}/services/customs`,
        languages: { mn: `${siteUrl}/services/customs` },
    },
    openGraph: {
        type: "website",
        url: `${siteUrl}/services/customs`,
        title: "Гаалийн Бүрдүүлэлт | Bechekhan MN",
        description: "Орос Монгол чиглэлд мэргэжлийн гаалийн бүрдүүлэлт. Импорт, экспорт.",
        siteName: "Bechekhan MN",
        locale: "mn_MN",
        images: [{ url: "/facebook-preview.jpg", width: 1200, height: 630, alt: "Гаалийн бүрдүүлэлт Монгол" }],
    },
};

const faqs = [
    { q: "Ямар бичиг баримт шаардагддаг вэ?", a: "Инвойс, упаковочный лист, гэрээ, ачааны бичиг (CMR/коносамент), барааны гарал үүслийн гэрчилгээ зэрэг шаардагдана. Барааны төрлөөс хамаарч нэмэлт бичиг баримт шаардагдаж болно." },
    { q: "Гаалийн татвар хэзээ тооцогддог вэ?", a: "Монгол руу оруулж ирэх барааны гаалийн татвар нь барааны код (HS code), үнэ, гарал үүслийн улсаас хамаарна. Манай мэргэжилтнүүд тооцоог хийж өгнө." },
    { q: "Гаалийн бүрдүүлэлт хэдэн хоног үргэлжилдэг вэ?", a: "Ердийн бараанд 1-3 хоног. Тусгай зөвшөөрөл шаардах бараанд 5-10 хоног болж болно. Бичиг баримт бүрэн бэлэн байвал хурдан явагдана." },
    { q: "Хориотой бараа юу байдаг вэ?", a: "Аюултай химийн бодис, зэвсэг, тодорхой ургамал, амьтны гаралтай зарим бүтээгдэхүүн хориотой байдаг. Дэлгэрэнгүй зөвлөгөө авна уу." },
    { q: "Гаалийн талбайд хадгалалтын үйлчилгээ байна уу?", a: "Тийм. Бид гаалийн боловсруулалтын хугацаанд ачааг гаалийн агуулахад хадгалах боломжтой." },
];

export default function Page() {
    return (
        <main className="bg-white">
            {/* BREADCRUMB */}
            <nav className="bg-zinc-50 border-b px-4 py-3">
                <div className="mx-auto max-w-6xl text-sm text-zinc-500 flex gap-2">
                    <Link href="/" className="hover:text-red-600">Нүүр</Link>
                    <span>/</span>
                    <span className="text-zinc-900">Гаалийн бүрдүүлэлт</span>
                </div>
            </nav>

            {/* HERO */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 to-blue-900 py-20">
                <div className="relative mx-auto max-w-6xl px-4 text-white">
                    <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold mb-4">
                        🛂 Гаалийн бүрдүүлэлт
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black mb-4">
                        Гаалийн бүрдүүлэлт <br />
                        <span className="text-yellow-300">Орос ↔ Монгол</span>
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mb-8">
                        Мэргэжлийн гаалийн брокер, импорт болон экспортын бичиг баримтын
                        бүрэн боловсруулалт. Ачааны саатлыг арилгаж хурдан гаалийг нэвтрүүлнэ.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-block bg-white text-blue-700 px-8 py-4 rounded-full font-bold hover:bg-zinc-100 transition"
                    >
                        Үнийн санал авах →
                    </Link>
                </div>
            </section>

            {/* STATS */}
            <section className="bg-zinc-50 py-10">
                <div className="mx-auto max-w-6xl px-4 grid grid-cols-3 gap-6 text-center">
                    {[
                        { v: "1-3", l: "Хоног бүрдүүлэлт" },
                        { v: "100%", l: "Бичиг баримт бүрэн" },
                        { v: "24/7", l: "Зөвлөгөө үнэгүй" },
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
                    <h2 className="text-3xl font-bold mb-4">Гаалийн бүрдүүлэлтийн үйлчилгээ</h2>
                    <p className="text-zinc-600 mb-10">
                        Bechekhan MN нь Орос-Монгол хоёр талын гаалийн мэдэлтийн мэргэжилтнүүдтэй.
                        Ачааны HS код тодорхойлолт, татварын тооцоо, бичиг баримт бэлтгэл хүртэлх
                        бүх үе шатыг хариуцна.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { icon: "📥", title: "Импорт бүрдүүлэлт", desc: "ОХУ-аас Монгол руу оруулж ирэх барааны гаалийн мэдэлт, татварын тооцоо." },
                            { icon: "📤", title: "Экспорт бүрдүүлэлт", desc: "Монголоос ОХУ болон бусад улс руу гаргах барааны бүрдүүлэлт." },
                            { icon: "🔄", title: "Транзит тээвэр", desc: "Казахстан, Беларусь дамжуулан транзит ачааны гаалийн бүрдүүлэлт." },
                            { icon: "📑", title: "Бичиг баримт", desc: "Инвойс, упаковочный лист, гарал үүслийн гэрчилгээ бэлтгэх зөвлөгөө." },
                        ].map((s, i) => (
                            <div key={i} className="group border-2 border-zinc-200 rounded-2xl p-8 hover:border-blue-600 hover:shadow-lg transition">
                                <p className="text-3xl mb-3">{s.icon}</p>
                                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                                <p className="text-zinc-600">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* АЛХМУУД */}
            <section className="bg-zinc-50 py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Гаалийн бүрдүүлэлтийн үйл явц</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { n: "1", t: "Бичиг баримт", d: "Инвойс, гэрээ бэлдэнэ" },
                            { n: "2", t: "HS код", d: "Барааны кодыг тодорхойлно" },
                            { n: "3", t: "Татварын тооцоо", d: "Гаалийн татвар тооцоолно" },
                            { n: "4", t: "Мэдэлт", d: "Гаальд мэдэлт өгч нэвтрүүлнэ" },
                        ].map((s, i) => (
                            <div key={i} className="text-center">
                                <div className="w-12 h-12 rounded-full bg-red-600 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">{s.n}</div>
                                <h3 className="font-bold mb-2">{s.t}</h3>
                                <p className="text-zinc-600 text-sm">{s.d}</p>
                            </div>
                        ))}
                    </div>
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
            <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-16 text-white text-center">
                <div className="mx-auto max-w-4xl px-4">
                    <h2 className="text-3xl font-bold mb-4">Гаалийн зөвлөгөө авах</h2>
                    <p className="text-white/80 mb-8 text-lg">Ачааны мэдээллийг өгч гаалийн дэлгэрэнгүй зөвлөгөө аваарай.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/#contact" className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold hover:bg-zinc-100 transition">
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
                        <Link href="/services/railway" className="border rounded-xl p-4 hover:border-red-600 hover:shadow transition">
                            <p className="font-semibold">🚂 Төмөр зам</p>
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

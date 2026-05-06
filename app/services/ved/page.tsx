import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://bechekhan.mn";

export const metadata: Metadata = {
    title: "ВЭД Зөвлөгөө | Гадаад Худалдааны Дэмжлэг | Bechekhan MN",
    description:
        "Гадаад эдийн засгийн үйл ажиллагааны (ВЭД) мэргэжлийн зөвлөгөө. Импорт, экспорт, гааль, татвар, гэрээ боловсруулалт. Орос Монгол чиглэлд туршлагатай.",
    keywords: [
        "ВЭД зөвлөгөө Монгол",
        "гадаад худалдаа зөвлөгөө",
        "импорт экспорт зөвлөгөө",
        "ВЭД консультация Монголия",
        "внешнеэкономическая деятельность Монголия",
        "гааль ВЭД",
    ],
    alternates: {
        canonical: `${siteUrl}/services/ved`,
        languages: { mn: `${siteUrl}/services/ved` },
    },
    openGraph: {
        type: "website",
        url: `${siteUrl}/services/ved`,
        title: "ВЭД Зөвлөгөө | Bechekhan MN",
        description: "Гадаад эдийн засгийн үйл ажиллагааны мэргэжлийн зөвлөгөө. Орос Монгол.",
        siteName: "Bechekhan MN",
        locale: "mn_MN",
        images: [{ url: "/facebook-preview.jpg", width: 1200, height: 630, alt: "ВЭД зөвлөгөө Монгол" }],
    },
};

const faqs = [
    { q: "ВЭД гэж юу вэ?", a: "ВЭД (Внешнеэкономическая деятельность) — Гадаад эдийн засгийн үйл ажиллагаа. Гадаадтай хийх худалдаа, импорт, экспорт, гэрээт хамтын ажиллагаа зэрэг бүх үйл ажиллагааг хамардаг." },
    { q: "Ямар компаниуд ВЭД зөвлөгөө авдаг вэ?", a: "ОХУ-аас бараа нийлүүлэх хүсэлтэй, эсвэл Монголоос ОХУ руу бараа экспортлох аливаа компани, хувиарлагч, худалдаачид хамаарна." },
    { q: "Гэрээ боловсруулалт хийдэг үү?", a: "Тийм. Бид ОХУ болон Монгол хоёрын хооронд хийгдэх худалдааны гэрээний загвар боловсруулж, хуулийн хяналт хийхэд дэмжлэг үзүүлнэ." },
    { q: "Татварын зөвлөгөө авах боломжтой юу?", a: "Тийм. Импорт, экспортын татварын ачаалал, НӨАТ, гаалийн татвар зэрэг асуудлаар зөвлөгөө өгнө." },
    { q: "Зөвлөгөө үнэгүй байдаг уу?", a: "Анхны зөвлөгөө болон асуулт хариулт үнэгүй. Тасралтгүй зөвлөгөо болон гэрээт хамтын ажиллагааны нөхцөл тохиролцооноор тогтооно." },
];

export default function Page() {
    return (
        <main className="bg-white">
            {/* BREADCRUMB */}
            <nav className="bg-zinc-50 border-b px-4 py-3">
                <div className="mx-auto max-w-6xl text-sm text-zinc-500 flex gap-2">
                    <Link href="/" className="hover:text-red-600">Нүүр</Link>
                    <span>/</span>
                    <span className="text-zinc-900">ВЭД зөвлөгөө</span>
                </div>
            </nav>

            {/* HERO */}
            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 to-emerald-900 py-20">
                <div className="relative mx-auto max-w-6xl px-4 text-white">
                    <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold mb-4">
                        📋 ВЭД зөвлөгөө
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black mb-4">
                        ВЭД зөвлөгөө <br />
                        <span className="text-yellow-300">Гадаад худалдааны дэмжлэг</span>
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mb-8">
                        Орос-Монгол чиглэлд гадаад эдийн засгийн үйл ажиллагааны мэргэжлийн зөвлөгөө.
                        Импорт, экспорт, гааль, татвар, гэрээ боловсруулалт.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-block bg-white text-emerald-700 px-8 py-4 rounded-full font-bold hover:bg-zinc-100 transition"
                    >
                        Зөвлөгөө авах →
                    </Link>
                </div>
            </section>

            {/* STATS */}
            <section className="bg-zinc-50 py-10">
                <div className="mx-auto max-w-6xl px-4 grid grid-cols-3 gap-6 text-center">
                    {[
                        { v: "100%", l: "Анхны зөвлөгөө үнэгүй" },
                        { v: "10+", l: "Жилийн туршлага" },
                        { v: "24/7", l: "Холбоо барих" },
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
                    <h2 className="text-3xl font-bold mb-4">ВЭД зөвлөгөөний үйлчилгээ</h2>
                    <p className="text-zinc-600 mb-10">
                        Bechekhan MN нь Орос-Монгол хоёр талын хууль, гааль, татварын мэдлэгтэй
                        мэргэжилтнүүдтэй. Таны бизнесийг гадаад зах зээлд амжилттай явуулахад
                        бүх талын дэмжлэг үзүүлнэ.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { icon: "📊", title: "Бизнесийн зөвлөгөө", desc: "ОХУ-аас бараа нийлүүлэх, Монголд зах зээлд нэвтрэх стратегийн зөвлөгөө." },
                            { icon: "📝", title: "Гэрээ боловсруулалт", desc: "Гадаад худалдааны гэрээ, хамтын ажиллагааны протокол боловсруулна." },
                            { icon: "💰", title: "Татварын зөвлөгөө", desc: "Гаалийн татвар, НӨАТ, орлогын татвар оновчлолын зөвлөгөө." },
                            { icon: "🔍", title: "Эрсдэлийн үнэлгээ", desc: "Гадаад худалдааны эрсдэлийг үнэлж, шийдлийг нь санал болгоно." },
                        ].map((s, i) => (
                            <div key={i} className="group border-2 border-zinc-200 rounded-2xl p-8 hover:border-emerald-600 hover:shadow-lg transition">
                                <p className="text-3xl mb-3">{s.icon}</p>
                                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                                <p className="text-zinc-600">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-zinc-50 py-20">
                <div className="mx-auto max-w-4xl px-4">
                    <h2 className="text-3xl font-bold mb-10 text-center">Түгээмэл асуултууд</h2>
                    <div className="space-y-4">
                        {faqs.map((f, i) => (
                            <div key={i} className="border border-zinc-200 bg-white rounded-2xl p-6">
                                <h3 className="font-bold text-lg mb-2 text-red-600">❓ {f.q}</h3>
                                <p className="text-zinc-600">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-emerald-700 to-emerald-900 py-16 text-white text-center">
                <div className="mx-auto max-w-4xl px-4">
                    <h2 className="text-3xl font-bold mb-4">Анхны зөвлөгөө үнэгүй!</h2>
                    <p className="text-white/80 mb-8 text-lg">Бидэнтэй холбогдож гадаад худалдааны бүх асуултаа шийдэж аваарай.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/#contact" className="bg-white text-emerald-700 px-8 py-4 rounded-full font-bold hover:bg-zinc-100 transition">
                            Зөвлөгөө авах →
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
                        <Link href="/services/customs" className="border rounded-xl p-4 hover:border-red-600 hover:shadow transition">
                            <p className="font-semibold">🛂 Гаалийн бүрдүүлэлт</p>
                            <p className="text-sm text-zinc-500 mt-1">Дэлгэрэнгүй →</p>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://bechekhan.mn";

export const metadata: Metadata = {
    title: "Авто Тээвэр | Улаан-Үдээс Улаанбаатар | Bechekhan MN",
    description:
        "Орос Монгол авто тээвэр. Улаан-Үдээс Улаанбаатар хүртэл сборный груз болон FTL тээвэр. 1 кг-аас 100 тонн хүртэл, 5-10 хоногт хүргэнэ.",
    keywords: [
        "авто тээвэр Орос Монгол",
        "Улаан-Үд Улаанбаатар авто",
        "сборный груз",
        "FTL тээвэр",
        "автоперевозки Россия Монголия",
        "грузовик Монголия",
    ],
    alternates: {
        canonical: `${siteUrl}/services/auto-transport`,
        languages: { mn: `${siteUrl}/services/auto-transport` },
    },
    openGraph: {
        type: "website",
        url: `${siteUrl}/services/auto-transport`,
        title: "Авто Тээвэр | Bechekhan MN",
        description: "Улаан-Үдээс Улаанбаатар хүртэл авто тээвэр. Сборный груз, FTL.",
        siteName: "Bechekhan MN",
        locale: "mn_MN",
        images: [{ url: "/facebook-preview.jpg", width: 1200, height: 630, alt: "Авто тээвэр Орос Монгол" }],
    },
};

const faqs = [
    { q: "Авто тээврээр хэдэн хоногт хүрдэг вэ?", a: "Улаан-Үдээс Улаанбаатар хүртэл дундаж 5-7 хоног зарцуулдаг. Цаг агаар болон гаалийн хяналтаас шалтгаалан 10 хүртэл хоног болно." },
    { q: "Хамгийн бага ачааны хэмжээ хэд вэ?", a: "Сборный груз үйлчилгээгээр 1 кг-аас эхлэн тээвэрлэнэ. FTL тээврийн хувьд бүтэн машин ашигладаг." },
    { q: "Ачааны даатгал байдаг уу?", a: "Тийм, бид тээвэрлэлтийн явцад ачааны даатгал хийх боломжтой. Дэлгэрэнгүй мэдээллийг манай менежерээс авна уу." },
    { q: "Ямар төрлийн ачаа тээвэрлэдэг вэ?", a: "Барилгын материал, тоног төхөөрөмж, хэрэглээний бараа, хүнсний бүтээгдэхүүн зэрэг олон төрлийн ачааг тээвэрлэнэ. Аюултай бараа тусгай зөвшөөрөл шаардана." },
    { q: "Гаалийн бүрдүүлэлтийг та нар хийдэг үү?", a: "Тийм. Бид гаалийн бүрдүүлэлтийн бүрэн үйлчилгээ үзүүлдэг. Тусдаа гааль хуудасаас дэлгэрэнгүй үзнэ үү." },
];

export default function Page() {
    return (
        <main className="bg-white">
            {/* BREADCRUMB */}
            <nav className="bg-zinc-50 border-b px-4 py-3">
                <div className="mx-auto max-w-6xl text-sm text-zinc-500 flex gap-2">
                    <Link href="/" className="hover:text-red-600">Нүүр</Link>
                    <span>/</span>
                    <span className="text-zinc-900">Авто тээвэр</span>
                </div>
            </nav>

            {/* HERO */}
            <section className="relative overflow-hidden bg-gradient-to-br from-red-600 to-orange-600 py-20">
                <div className="relative mx-auto max-w-6xl px-4 text-white">
                    <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold mb-4">
                        🚚 Авто тээвэр
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black mb-4">
                        Авто тээвэр <br />
                        <span className="text-yellow-300">Улаан-Үд → Улаанбаатар</span>
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mb-8">
                        ОХУ-ын Улаан-Үдээс Монгол улс хүртэл авто тээврийн найдвартай, хурдан үйлчилгээ.
                        Сборный груз болон FTL тээвэр — 1 кг-аас 100 тонн хүртэл.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-block bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-zinc-100 transition"
                    >
                        Үнийн санал авах →
                    </Link>
                </div>
            </section>

            {/* STATS */}
            <section className="bg-zinc-50 py-10">
                <div className="mx-auto max-w-6xl px-4 grid grid-cols-3 gap-6 text-center">
                    {[
                        { v: "5-7", l: "Хоног хүргэлт" },
                        { v: "1кг–100т", l: "Ачааны хэмжээ" },
                        { v: "24/7", l: "Дэмжлэг" },
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
                    <h2 className="text-3xl font-bold mb-4">Авто тээврийн үйлчилгээ</h2>
                    <p className="text-zinc-600 mb-10">
                        Bechekhan MN нь Орос-Монгол чиглэлд авто тээврийн иж бүрэн шийдэл санал болгоно.
                        Манай жолооч нар туршлагатай бөгөөд бүх маршрутыг сайн мэддэг.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { icon: "📦", title: "Сборный груз (LCL)", desc: "Жижиг ачааг нэгтгэн тээвэрлэх. Хэмжээгээрээ төлдөг тул хэмнэлттэй." },
                            { icon: "🚛", title: "FTL — Бүтэн машин", desc: "Том хэмжээний ачааг бүтэн машинаар тээвэрлэнэ. Хамгийн хурдан арга." },
                            { icon: "🏭", title: "Том оврын ачаа", desc: "Үйлдвэрийн тоног төхөөрөмж, машин механизм тусгай тээврээр." },
                            { icon: "❄️", title: "Хөргөлттэй тээвэр", desc: "Хүнс, эм болон хөргөлт шаардах ачааг тусгай машинаар тээвэрлэнэ." },
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

            {/* ЯАГААД АВТО */}
            <section className="bg-zinc-900 text-white py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Яагаад авто тээвэр?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: "⚡", t: "Хурдан", d: "Улаан-Үд–УБ маршрут дундаж 5-7 хоног" },
                            { icon: "🎯", t: "Хаалганаас хаалга", d: "Ачааг агуулахаас хүлээн авч, хүрэх газарт хүргэнэ" },
                            { icon: "💰", t: "Хэмнэлттэй", d: "Сборный ачаагаар зардлаа бууруулна" },
                        ].map((w, i) => (
                            <div key={i} className="text-center">
                                <p className="text-5xl mb-4">{w.icon}</p>
                                <h3 className="text-xl font-bold mb-2">{w.t}</h3>
                                <p className="text-zinc-300">{w.d}</p>
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
            <section className="bg-gradient-to-r from-red-600 to-orange-600 py-16 text-white text-center">
                <div className="mx-auto max-w-4xl px-4">
                    <h2 className="text-3xl font-bold mb-4">Авто тээврийн үнийн санал авах</h2>
                    <p className="text-white/90 mb-8 text-lg">Бидэнтэй холбогдож хамгийн сайн үнэ, хугацааг мэдэж аваарай.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/#contact" className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-zinc-100 transition">
                            Үнийн санал авах →
                        </Link>
                        <a href="tel:+79914271904" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition">
                            📞 +7 991 427 19 04
                        </a>
                    </div>
                </div>
            </section>

            {/* ХОЛБООТОЙ ХУУДАС */}
            <section className="py-12 bg-zinc-50">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-xl font-bold mb-6">Бусад үйлчилгээнүүд</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        <Link href="/services/railway" className="border rounded-xl p-4 hover:border-red-600 hover:shadow transition">
                            <p className="font-semibold">🚂 Төмөр зам</p>
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

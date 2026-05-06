import type { Metadata } from "next";

const siteUrl = "https://bechekhan.mn";

export const metadata: Metadata = {
    title: "Грузоперевозки Россия Монголия | Улан-Удэ Улан-Батор | Bechekhan MN",
    description:
        "Грузоперевозки из России в Монголию. Сборный груз и FTL из Улан-Удэ в Улан-Батор. Таможенное оформление, складские услуги. Надёжная логистика от 1 кг до 100 тонн.",
    keywords: [
        "грузоперевозки Россия Монголия",
        "перевозки Улан-Удэ Улан-Батор",
        "сборный груз Монголия",
        "карго Монголия из России",
        "грузоперевозки в Монголию",
        "доставка груза в Монголию",
        "логистика Монголия",
        "таможенное оформление Монголия",
        "автоперевозки Россия Монголия",
        "FTL перевозки Монголия",
        "ЖД перевозки Монголия",
        "Bechekhan грузоперевозки",
        "карго из Улан-Удэ",
    ],
    alternates: {
        canonical: `${siteUrl}/gruzoperevozki-rossiya-mongoliya`,
        languages: {
            "ru": `${siteUrl}/gruzoperevozki-rossiya-mongoliya`,
            "mn": siteUrl,
        },
    },
    openGraph: {
        type: "website",
        url: `${siteUrl}/gruzoperevozki-rossiya-mongoliya`,
        title: "Грузоперевозки Россия Монголия | Bechekhan MN",
        description:
            "Надёжные грузоперевозки из России в Монголию. Сборный груз, FTL, таможня. Улан-Удэ → Улан-Батор.",
        siteName: "Bechekhan MN",
        locale: "ru_RU",
        images: [
            {
                url: "/facebook-preview.jpg",
                width: 1200,
                height: 630,
                alt: "Грузоперевозки Россия Монголия",
            },
        ],
    },
};

export default function Page() {
    return (
        <main className="bg-white">

            {/* HERO */}
            <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-orange-600 py-24">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
                </div>
                <div className="relative mx-auto max-w-6xl px-4 text-center text-white">
                    <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold mb-6">
                        🌍 Международные грузоперевозки
                    </span>
                    <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
                        Грузоперевозки <br />
                        <span className="text-yellow-300">Россия → Монголия</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-xl text-white/90 mb-8 leading-relaxed">
                        Надёжная доставка грузов из России, Казахстана и Беларуси в Монголию.
                        Улан-Удэ ↔ Улан-Батор — сборный груз и FTL от 1 кг до 100 тонн.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/79914271904"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-100 shadow-2xl transition"
                        >
                            Запросить цену
                        </a>
                        <a
                            href="tel:+79914271904"
                            className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition"
                        >
                            📞 +7 991 427 19 04
                        </a>
                    </div>
                </div>
            </section>

            {/* СТАТИСТИКА */}
            <section className="bg-zinc-50 py-12">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="grid grid-cols-3 gap-8 text-center">
                        <div>
                            <p className="text-4xl font-bold text-red-600">5-10</p>
                            <p className="text-zinc-600 mt-2">Дней доставки</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-red-600">1кг–100т</p>
                            <p className="text-zinc-600 mt-2">Любой объём груза</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-red-600">24/7</p>
                            <p className="text-zinc-600 mt-2">Поддержка клиентов</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* УСЛУГИ */}
            <section className="py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
                        <p className="text-zinc-600 text-lg">Полный комплекс логистических услуг</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: "📦 Сборный груз (LCL)", desc: "Доставка небольших партий товара по выгодной цене" },
                            { title: "🚚 FTL — полная машина", desc: "Аренда целого грузовика для больших объёмов" },
                            { title: "🚂 Железнодорожные перевозки", desc: "ЖД доставка через Улан-Удэ — Наушки — Улан-Батор" },
                            { title: "🛂 Таможенное оформление", desc: "Полное таможенное сопровождение, ВЭД консультации" },
                        ].map((s, i) => (
                            <div key={i} className="group border-2 border-zinc-200 rounded-2xl p-8 hover:border-red-600 hover:shadow-xl transition duration-300">
                                <p className="text-2xl mb-3">{s.title}</p>
                                <p className="text-zinc-600">{s.desc}</p>
                                <div className="mt-4 h-1 w-0 group-hover:w-12 bg-red-600 transition-all duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* МАРШРУТЫ */}
            <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 py-20 text-white">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Наши маршруты</h2>
                        <p className="text-zinc-300">Регулярные рейсы по всем направлениям</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { from: "🇷🇺 Улан-Удэ", to: "🇲🇳 Улан-Батор", time: "5–7 дней" },
                            { from: "🇷🇺 Москва", to: "🇲🇳 Монголия", time: "10–14 дней" },
                            { from: "🇰🇿 Казахстан", to: "🇲🇳 Монголия", time: "7–10 дней" },
                        ].map((r, i) => (
                            <div key={i} className="bg-white/10 rounded-2xl p-6 text-center">
                                <p className="text-xl font-bold">{r.from}</p>
                                <p className="text-3xl my-3">↓</p>
                                <p className="text-xl font-bold">{r.to}</p>
                                <p className="text-yellow-300 mt-3 font-semibold">{r.time}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ПОЧЕМУ МЫ */}
            <section className="py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">Почему выбирают нас</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { icon: "✅", title: "Опыт работы на маршруте", desc: "Специализируемся на перевозках Россия–Монголия" },
                            { icon: "💰", title: "Выгодные цены", desc: "Оптимизированные маршруты для снижения затрат" },
                            { icon: "📋", title: "Полное оформление", desc: "Таможня, документы и ВЭД консультации" },
                            { icon: "📞", title: "Поддержка 24/7", desc: "Всегда на связи — WhatsApp, Viber, Telegram" },
                        ].map((w, i) => (
                            <div key={i} className="flex gap-5 p-6 bg-zinc-50 rounded-2xl">
                                <span className="text-4xl">{w.icon}</span>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">{w.title}</h3>
                                    <p className="text-zinc-600">{w.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-red-600 to-orange-600 py-20 text-white text-center">
                <div className="mx-auto max-w-4xl px-4">
                    <h2 className="text-4xl font-bold mb-6">Готовы отправить груз?</h2>
                    <p className="text-xl text-white/90 mb-8">
                        Свяжитесь с нами прямо сейчас и получите лучшую цену на грузоперевозки Россия–Монголия.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/79914271904"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-red-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-zinc-100 shadow-xl transition"
                        >
                            WhatsApp →
                        </a>
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

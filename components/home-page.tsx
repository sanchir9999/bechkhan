"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ServicesSection from "@/components/sections/services";
import AdvantagesSection from "@/components/sections/advantages";
import PartnerSection from "@/components/sections/partner";
import ContactSection from "@/components/sections/contact";
import { siteContent, type Lang } from "@/lib/site-content";
import QuoteModal from "@/components/QuoteModal";

export default function HomePage() {
    const [lang, setLang] = useState<Lang>("mn");
    const [openQuote, setOpenQuote] = useState(false);

    const t = siteContent[lang];

    return (
        <div className="min-h-screen bg-white text-zinc-900">

            {/* HEADER */}
            <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

                    <Link href="/" className="flex items-center gap-3">
                        <div className="relative h-16 w-16">
                            <Image src="/logo.png" alt="logo" fill className="object-contain" />
                        </div>

                        <div>
                            <p className="text-lg font-bold text-red-700">Bechekhan MN</p>
                            <p className="text-xs text-zinc-500">{t.hero.subtitle}</p>
                        </div>
                    </Link>

                    <nav className="hidden md:flex gap-6">
                        <a href="#about">{t.nav.about}</a>
                        <a href="#services">{t.nav.services}</a>
                        <a href="#advantages">{t.nav.advantages}</a>
                        <a href="#contact">{t.nav.contact}</a>
                    </nav>

                    <div className="flex items-center gap-2">
                        {(["mn", "en", "ru"] as Lang[]).map((item) => (
                            <button
                                key={item}
                                onClick={() => setLang(item)}
                                className={`px-3 py-1 rounded-full text-xs uppercase ${lang === item ? "bg-red-600 text-white" : "bg-zinc-100"
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            {/* MAIN */}
            <main>

                {/* HERO */}
                <section className="text-center py-16">
                    <h1 className="text-4xl font-bold">{t.hero.title}</h1>
                    <p className="mt-4 text-zinc-600">{t.hero.description}</p>

                    <div className="mt-6 flex justify-center gap-3">

                        {/* 🔥 QUOTE BUTTON */}
                        <button
                            onClick={() => setOpenQuote(true)}
                            className="bg-red-600 text-white px-6 py-3 rounded-full"
                        >
                            Үнийн санал авах
                        </button>

                        <Link
                            href="/oros-mongol-acha"
                            className="border border-red-600 text-red-600 px-6 py-3 rounded-full"
                        >
                            {t.hero.ctaThird}
                        </Link>

                    </div>
                </section>

                <HeroSection t={t} />
                <AboutSection t={t} />
                <ServicesSection t={t} />
                <AdvantagesSection t={t} />
                <PartnerSection lang={lang} />
                <ContactSection t={t} />

            </main>

            <footer className="text-center py-6 text-sm text-zinc-500">
                {t.footer.text}
            </footer>

            <QuoteModal
                open={openQuote}
                lang={lang}
                onClose={() => setOpenQuote(false)}
            />

        </div>
    );
}
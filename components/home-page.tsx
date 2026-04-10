"use client";

import Image from "next/image";
import { useState } from "react";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ServicesSection from "@/components/sections/services";
import AdvantagesSection from "@/components/sections/advantages";
import PartnerSection from "@/components/sections/partner";
import ContactSection from "@/components/sections/contact";
import { siteContent, type Lang } from "@/lib/site-content";

export default function HomePage() {
    const [lang, setLang] = useState<Lang>("mn");
    const t = siteContent[lang];

    return (
        <div className="min-h-screen bg-white text-zinc-900">
            <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                    <a href="#top" className="flex items-center gap-3">
                        <div className="relative h-22 w-22 overflow-hidden rounded-xl border border-zinc-200 bg-white">
                            <Image
                                src="/logo.png"
                                alt="Bechekhan MN logo"
                                fill
                                priority
                                className="object-contain p-1"
                            />
                        </div>

                        <div>
                            <p className="text-xl font-bold tracking-tight text-red-700">
                                Bechekhan MN
                            </p>
                            <p className="text-xs text-zinc-500">
                                {t.header.tagline}
                            </p>
                        </div>
                    </a>

                    <nav className="hidden items-center gap-6 md:flex">
                        <a href="#about" className="text-sm hover:text-red-600">
                            {t.nav.about}
                        </a>
                        <a href="#services" className="text-sm hover:text-red-600">
                            {t.nav.services}
                        </a>
                        <a href="#advantages" className="text-sm hover:text-red-600">
                            {t.nav.advantages}
                        </a>
                        <a href="#partner" className="text-sm hover:text-red-600">
                            Хамтрагч
                        </a>
                        <a href="#contact" className="text-sm hover:text-red-600">
                            {t.nav.contact}
                        </a>
                    </nav>

                    <div className="flex items-center gap-2">
                        {(["mn", "en", "ru"] as Lang[]).map((item) => (
                            <button
                                key={item}
                                onClick={() => setLang(item)}
                                className={`rounded-full px-3 py-2 text-xs font-semibold uppercase transition ${lang === item
                                    ? "bg-red-600 text-white"
                                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <main id="top">
                <HeroSection t={t} />
                <AboutSection t={t} />
                <ServicesSection t={t} />
                <AdvantagesSection t={t} />
                <PartnerSection lang={lang} />
                <ContactSection t={t} />
            </main>

            <footer className="border-t border-zinc-200 bg-white">
                <div className="mx-auto flex max-w-7xl justify-between px-4 py-6 text-sm text-zinc-500 sm:px-6 lg:px-8">
                    <p>{t.footer.text}</p>
                    <p>© {new Date().getFullYear()} Bechekhan MN</p>
                </div>
            </footer>
        </div>
    );
}
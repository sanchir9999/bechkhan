import Image from "next/image";

type HeroProps = {
    t: {
        hero: {
            title: string;
            subtitle: string;
            ctaPrimary: string;
            ctaSecondary: string;
        };
    };
};

export default function HeroSection({ t }: HeroProps) {
    return (
        <section className="bg-gradient-to-b from-zinc-50 to-white">
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
                <div className="max-w-3xl">
                    <span className="inline-flex rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-700 ring-1 ring-red-200">
                        International Cargo Transportation
                    </span>

                    <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
                        {t.hero.title}
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-zinc-600">
                        {t.hero.subtitle}
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                        >
                            {t.hero.ctaPrimary}
                        </a>

                        <a
                            href="#services"
                            className="inline-flex items-center justify-center rounded-2xl border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
                        >
                            {t.hero.ctaSecondary}
                        </a>
                    </div>
                </div>

                <div className="relative">
                    <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg">
                        <div className="relative h-[280px] w-full sm:h-[360px] lg:h-[460px]">
                            <Image
                                src="/hero-image.jpg"
                                alt="International cargo transportation"
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
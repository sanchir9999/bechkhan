import Link from "next/link";

type ServicesProps = {
    t: {
        services: {
            title: string;
            items: readonly string[];
        };
    };
};

const serviceLinks = [
    "/services/auto-transport",
    "/services/railway",
    "/services/customs",
    "/services/ved",
];

export default function ServicesSection({ t }: ServicesProps) {
    return (
        <section id="services" className="bg-zinc-50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight">{t.services.title}</h2>

                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {t.services.items.map((item, i) => (
                        <div
                            key={item}
                            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-red-300 transition"
                        >
                            <div className="mb-4 h-2 w-14 rounded-full bg-red-600" />
                            <p className="text-lg font-semibold">{item}</p>
                            {serviceLinks[i] && (
                                <Link
                                    href={serviceLinks[i]}
                                    className="mt-4 inline-block text-sm text-red-600 font-medium hover:underline"
                                >
                                    Дэлгэрэнгүй →
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}